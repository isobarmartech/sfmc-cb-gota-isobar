import React from "react";
import {
    Card,
    ColorPicker,
    IconSettings,
    Dropdown,
    RadioButtonGroup,
    Radio,
    Input,
    Checkbox
} from "@salesforce/design-system-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../core/helpers";
import { LAYOUT, TOP_BORDER, APP_IMAGE, HEADLINE, BODY, DOUBLE_CTA } from "./layouts/appModule";
import { ui } from "../constants/ui.js";
import RichTextEditor from '../components/RichTextEditor';
import { richTextToHtml } from "../components/RichTextEditor";

var SDK = require("blocksdk");
var sdk = new SDK();

class Article extends React.Component {
    onChange = (element, value) => {
        this.props.editContent(element, value);
    };

    setContent = () => {
        let pattern, regex;
        let html = LAYOUT;

        if (this.props.content.toggleImgApp) {
            regex = /\[imgAppHtml\]/gi;
            html = html.replace(regex, APP_IMAGE);
        } else {
            regex = /\[imgAppHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleHeadline) {
            regex = /\[headlineHtml\]/gi;
            html = html.replace(regex, HEADLINE);
        } else {
            regex = /\[headlineHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleBody) {
            regex = /\[bodyHtml\]/gi;
            html = html.replace(regex, BODY);
        } else {
            regex = /\[bodyHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleDoubleCta) {
            regex = /\[ctaHtml\]/gi;
            html = html.replace(regex, DOUBLE_CTA);
        } else {
            regex = /\[ctaHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleInvertedColors) {
            regex = /\[textColor\]/gi;
            html = html.replace(regex, "#FFFFFF");
            regex = /\[themeColor\]/gi;
            html = html.replace(regex, "#FFFFFF");

            // In case we have a working color
            if (this.props.content.themeWorkingColor) {
                regex = /\[ctaTextColor\]/gi;
                html = html.replace(regex, this.props.content.themeWorkingColor);
                regex = /\[bgColor\]/gi;
                html = html.replace(regex, this.props.content.themeWorkingColor);
            } else {
                regex = /\[ctaTextColor\]/gi;
                html = html.replace(regex, this.props.content.themeColor);
                regex = /\[bgColor\]/gi;
                html = html.replace(regex, this.props.content.themeColor);
            }

            regex = /\[topBorderHtml\]/gi;
            html = html.replace(regex, "");

        } else {
            regex = /\[textColor\]/gi;
            html = html.replace(regex, "#2E2926");

            // In case we have a working color
            if (this.props.content.themeWorkingColor) {
                regex = /\[themeColor\]/gi;
                html = html.replace(regex, this.props.content.themeWorkingColor);
            } else {
                regex = /\[themeColor\]/gi;
                html = html.replace(regex, this.props.content.themeColor);

            }

            regex = /\[ctaTextColor\]/gi;
            html = html.replace(regex, "#FFFFFF");
            regex = /\[bgColor\]/gi;
            html = html.replace(regex, "#F4F2F0");
        }

        if (this.props.content.appColor === "custom") {
            regex = /\[imgApp\]/gi;
            html = html.replace(regex, this.props.content.imgAppUrl);
        } else {
            regex = /\[imgApp\]/gi;
            html = html.replace(regex, ui.images.brandImages[this.props.content.brandId].app[this.props.content.appColor === "mono" ? (this.props.content.toggleInvertedColors ? "white" : "black") : "color"])
        }

        if (this.props.content.toggleTopBorder) {
            regex = /\[topBorderHtml\]/gi;
            html = html.replace(regex, TOP_BORDER);
        } else {
            regex = /\[topBorderHtml\]/gi;
            html = html.replace(regex, "");
        }

        // Handle Rich Text Input
        if (this.props.content.textHeadline !== undefined) {
            regex = /\[textHeadline\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textHeadline));
        }
        if (this.props.content.textBody !== undefined) {
            regex = /\[textBody\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textBody));
        }

        // Auto version
        let keys = Object.keys(this.props.content);
        for (let i = 0; i < keys.length; i++) {
            pattern = `\\[${keys[i]}\\]`;
            html = html.replace(
                new RegExp(pattern, "gi"),
                this.props.content[keys[i]]
            );
        }

        regex = /_#(?=\w{6}\.png)/gi;
        html = html.replace(regex, "_");

        sdk.setContent(html);
    };

    componentDidMount = () => {
        sdk.getData(data => {
            if (data && Object.keys(data).length > 0) {
                this.props.initFromSaved(data);
            } else {
                this.props.initFromSaved({
                    content: {
                        toggleTopBorder: true,
                        toggleImgApp: true,
                        toggleHeadline: true,
                        toggleBody: true,
                        toggleDoubleCta: true,
                        toggleInvertedColors: false,
                        appColor: "mono",
                        themeColor: "",
                        brandName: "Select Brand",
                        brandId: "",
                        colorSwatches: "",
                        imgApp: "",
                        imgAppUrl: "http://via.placeholder.com/70x70",
                        textHeadline: "Lorem ipsum dolor sit amet",
                        textBody: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.",
                        textCta1: "Google Play",
                        linkCta1: "#",
                        textCta2: "App Store",
                        linkCta2: "#",
                        textColor: "#2E2926",
                        ctaTextColor: "#FFFFFF",
                        bgColor: "#F4F2F0"
                    }
                });
            }
        });
    };

    brandList = () => {
        let arr = [];
        for (let i = 0; i < ui.brands.length; i++) {
            arr.push({
                label: `${ui.brands[i].name}`,
                value: `${ui.brands[i].id}`,
                brandColor: `${ui.brands[i].colors[0]}`,
                swatches: ui.brands[i].colors,
                linkCta1: ui.brands[i].applinks !== undefined ? ui.brands[i].applinks.googleplay : "#",
                linkCta2: ui.brands[i].applinks !== undefined ? ui.brands[i].applinks.appstore : "#",
            })
        }
        return arr;
    }

    render() {
        if (this.props.content.brandName !== undefined && this.props.content.brandName !== "Select Brand") {
            this.setContent();
        }
        return (
            <Card hasNoHeader={true} bodyClassName="slds-card__body_inner">
                <div className="slds-clearfix">
                    <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                        <h1 className="slds-text-heading_large">{this.props.content.brandName}</h1>
                        <IconSettings iconPath="/assets/icons">
                            <div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center slds-m-top_small">
                                <div className="slds-col_padded">
                                    <span>Change brand </span>
                                    <Dropdown
                                        length={null}
                                        iconCategory="utility"
                                        iconName="down"
                                        iconVariant="border-filled"
                                        onSelect={event => {
                                            this.onChange("brandId", event.value);
                                            this.props.content.toggleInvertedColors === true ? this.onChange("themeColor", event.swatches[1]) : this.onChange("themeColor", event.swatches[0]);
                                            this.onChange("colorSwatches", event.swatches);
                                            this.onChange("brandName", event.label);
                                            this.onChange("linkCta1", event.linkCta1);
                                            this.onChange("linkCta2", event.linkCta2);
                                        }}
                                        options={this.brandList()}
                                    />
                                </div>
                            </div>
                        </IconSettings>
                    </div>
                </div>

                {this.props.content.brandName !== undefined && this.props.content.brandName !== "Select Brand" ? (
                    <>
                        <div className="slds-clearfix">
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Inverted Colors</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleInvertedColors}
                                    onChange={(event) => {
                                        this.onChange('toggleInvertedColors', event.target.checked);
                                        this.props.content.toggleInvertedColors === true ? this.onChange('themeColor', this.props.content.colorSwatches[0]) : this.onChange('themeColor', this.props.content.colorSwatches[1]);
                                    }}
                                    onSelect={event => {
                                    }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Top Border</div>
                                <Checkbox
                                    disabled={this.props.content.toggleInvertedColors}
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={!(this.props.content.toggleInvertedColors || this.props.content.toggleTopBorder === false)}
                                    onChange={(event) => { this.onChange('toggleTopBorder', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">App Image</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleImgApp}
                                    onChange={(event) => { this.onChange('toggleImgApp', event.target.checked) }}
                                />
                            </div>
                        </div>
                        <div className="slds-clearfix">
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Headline</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleHeadline}
                                    onChange={(event) => { this.onChange('toggleHeadline', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Body text</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleBody}
                                    onChange={(event) => { this.onChange('toggleBody', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">CTA</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleDoubleCta}
                                    onChange={(event) => { this.onChange('toggleDoubleCta', event.target.checked) }}
                                />
                            </div>
                        </div>
                        <div className="slds-clearfix">
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Theme Color</div>
                                <ColorPicker
                                    hideInput={true}
                                    swatchColors={this.props.content.colorSwatches}
                                    value={this.props.content.themeColor}
                                    valueWorking={this.props.content.themeColor}
                                    variant={"swatches"}
                                    events={{
                                        onChange: (event, data) => {
                                            this.onChange("themeColor", data.color);
                                        },
                                        onWorkingColorChange: (event, data) => {
                                            this.onChange(
                                                "themeWorkingColor",
                                                data.color.hex
                                            );
                                        }
                                    }}
                                    onClose={() =>
                                        this.onChange("themeWorkingColor", undefined)
                                    }
                                />
                            </div>
                        </div>
                        {this.props.content.toggleImgApp ? (
                            <>
                                <div className="slds-text-title slds-m-top_small">App Image Color</div>
                                <RadioButtonGroup
                                    onChange={event => {
                                        this.onChange("appColor", event.target.value);
                                    }}
                                >
                                    <Radio
                                        label={this.props.content.toggleInvertedColors ? "White" : "Black"}
                                        variant="button-group"
                                        value="mono"
                                        checked={this.props.content.appColor === "mono"}
                                    ></Radio>
                                    <Radio
                                        label="Brand Color"
                                        variant="button-group"
                                        value="color"
                                        checked={this.props.content.appColor === "color"}
                                    ></Radio>
                                    <Radio
                                        label="Custom"
                                        variant="button-group"
                                        value="custom"
                                        checked={this.props.content.appColor === "custom"}
                                    ></Radio>
                                </RadioButtonGroup>
                                {
                                    this.props.content.appColor === "custom" ? (
                                        <>
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">App Image URL</div>
                                            <Input
                                                value={this.props.content.imgAppUrl}
                                                onChange={event => {
                                                    this.onChange("imgAppUrl", event.target.value);
                                                }}
                                            />
                                        </>
                                    ) : null
                                }
                            </>
                        ) : null}
                        {
                            this.props.content.toggleHeadline ? (
                                <>
                                    <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Headline Text</div>
                                    <RichTextEditor onChange={(data) => this.onChange("textHeadline", data)} text={this.props.content.textHeadline} toggleBold={false} toggleItalic={true} toggleLink={false} />
                                </>
                            ) : null
                        }
                        {
                            this.props.content.toggleBody ? (
                                <>
                                    <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Body Text</div>
                                    <RichTextEditor onChange={(data) => this.onChange("textBody", data)} text={this.props.content.textBody} toggleBold={true} toggleItalic={true} toggleLink={false} />
                                </>
                            ) : null
                        }
                        {this.props.content.toggleDoubleCta ? (
                            <>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA text 1</div>
                                <Input
                                    value={this.props.content.textCta1}
                                    onChange={event => {
                                        this.onChange("textCta1", event.target.value);
                                    }}
                                />
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Link 1</div>
                                <Input
                                    value={this.props.content.linkCta1}
                                    onChange={event => {
                                        this.onChange("linkCta1", event.target.value);
                                    }}
                                />
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA text 2</div>
                                <Input
                                    value={this.props.content.textCta2}
                                    onChange={event => {
                                        this.onChange("textCta2", event.target.value);
                                    }}
                                />
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Link 2</div>
                                <Input
                                    value={this.props.content.linkCta2}
                                    onChange={event => {
                                        this.onChange("linkCta2", event.target.value);
                                    }}
                                />
                            </>
                        ) : null
                        }
                    </>
                ) : null
                }
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);