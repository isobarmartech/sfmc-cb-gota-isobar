import React from "react";
import {
    Card,
    Input,
    RadioButtonGroup,
    Radio,
    Slider,
    ColorPicker,
    Checkbox,
    IconSettings,
    Dropdown
} from "@salesforce/design-system-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../core/helpers";
import { LAYOUT, IMAGE, HEADLINE, CHECKLIST_WRAPPER, CHECKLIST_CHECKMARK, CTA_BUTTON, CTA_LINK, SUBTEXT, CONTENT_WRAPPER, SPACER } from "./layouts/checklist_v2";
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

        if (this.props.content.toggleHeadline || this.props.content.toggleChecklist || this.props.content.toggleCta || this.props.content.toggleSubtext) {
            regex = /\[contentWrapperHtml\]/gi;
            html = html.replace(regex, CONTENT_WRAPPER);
        } else {
            regex = /\[contentWrapperHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleImage) {
            regex = /\[imageHtml\]/gi;
            html = html.replace(regex, IMAGE);
        } else {
            regex = /\[imageHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleHeadline) {
            regex = /\[headlineHtml\]/gi;
            html = html.replace(regex, HEADLINE);
            if (this.props.content.toggleChecklist || this.props.content.toggleCta || this.props.content.toggleSubtext) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "20");
                regex = /\[spacerExtra\]/gi;
                html = html.replace(regex, "");
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[headlineHtml\]/gi;
            html = html.replace(regex, "");
        }

        let check_list = CHECKLIST_WRAPPER;

        if (this.props.content.checkmarkAmount > 0 && this.props.content.checkmarkAmount < 6) {
            let checks = "";
            for (let i = 0; i < this.props.content.checkmarkAmount; i++) {
                checks += CHECKLIST_CHECKMARK;
                regex = /\[textCheckmark\]/gi;
                checks = checks.replace(regex, `[textCheckmark${i + 1}]`);

                if ((i + 1) < this.props.content.checkmarkAmount) {
                    regex = /\[spacerHtml\]/gi;
                    checks = checks.replace(regex, SPACER);
                    regex = /\[spacerHeight\]/gi;
                    checks = checks.replace(regex, this.props.content.checkmarkHeight);
                    regex = /\[spacerExtra\]/gi;
                    checks = checks.replace(regex, `colspan="2"`);
                } else {
                    regex = /\[spacerHtml\]/gi;
                    checks = checks.replace(regex, "");
                }
            }
            regex = /\[checkmarkHtml\]/gi;
            check_list = check_list.replace(regex, checks);
        } else {
            regex = /\[checkmarkHtml\]/gi;
            check_list = check_list.replace(regex, "");
        }

        if (this.props.content.toggleChecklist) {
            regex = /\[checklistWrapperHtml\]/gi;
            html = html.replace(regex, check_list);
            if (this.props.content.toggleCta || this.props.content.toggleSubtext) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "20");
                regex = /\[spacerExtra\]/gi;
                html = html.replace(regex, `colspan="2"`);
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[checklistWrapperHtml\]/gi;
            html = html.replace(regex, "");
        }


        if (this.props.content.toggleCta) {
            regex = /\[ctaHtml\]/gi;
            if (this.props.content.ctaStyle === "button") {
                html = html.replace(regex, CTA_BUTTON);
            } else if (this.props.content.ctaStyle === "link") {
                html = html.replace(regex, CTA_LINK);
            }
            if (this.props.content.toggleSubtext) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "20");
                regex = /\[spacerExtra\]/gi;
                html = html.replace(regex, "");
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[ctaHtml\]/gi;
            html = html.replace(regex, "");
        }


        if (this.props.content.toggleSubtext) {
            regex = /\[subtextHtml\]/gi;
            html = html.replace(regex, SUBTEXT);
        } else {
            regex = /\[subtextHtml\]/gi;
            html = html.replace(regex, "");
        }

        // Handle Rich Text Input
        if (this.props.content.textHeadline !== undefined) {
            regex = /\[textHeadline\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textHeadline));
        }
        if (this.props.content.textCheckmark1 !== undefined) {
            regex = /\[textCheckmark1\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textCheckmark1));
        }
        if (this.props.content.textCheckmark2 !== undefined) {
            regex = /\[textCheckmark2\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textCheckmark2));
        }
        if (this.props.content.textCheckmark3 !== undefined) {
            regex = /\[textCheckmark3\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textCheckmark3));
        }
        if (this.props.content.textCheckmark4 !== undefined) {
            regex = /\[textCheckmark4\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textCheckmark4));
        }
        if (this.props.content.textCheckmark5 !== undefined) {
            regex = /\[textCheckmark5\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textCheckmark5));
        }
        if (this.props.content.textSubtext !== undefined) {
            regex = /\[textSubtext\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textSubtext));
        }

        // In case we have a working color
        if (this.props.content.themeWorkingColor) {
            regex = /\[themeColor\]/gi;
            html = html.replace(regex, this.props.content.themeWorkingColor);
            regex = /\[linkArrowUrl\]/gi;
            html = html.replace(regex, ui.images.arrows[this.props.content.themeWorkingColor]);
            regex = /\[checkmarkUrl\]/gi;
            html = html.replace(regex, ui.images.checkmarks[this.props.content.themeWorkingColor]);
        } else {
            regex = /\[linkArrowUrl\]/gi;
            html = html.replace(regex, ui.images.arrows[this.props.content.themeColor]);
            regex = /\[checkmarkUrl\]/gi;
            html = html.replace(regex, ui.images.checkmarks[this.props.content.themeColor]);
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
                        toggleImage: true,
                        toggleHeadline: true,
                        toggleChecklist: true,
                        toggleCta: true,
                        toggleSubtext: false,
                        themeColor: "",
                        checkmarkAmount: "1",
                        checkmarkHeight: "10",
                        ctaStyle: "button",
                        image: "https://via.placeholder.com/600x300",
                        textHeadline: "Lorem ipsum dolor sit amet consectetur",
                        textCheckmark1: "Lorem ipsum dolor sit amet consectetur",
                        textCheckmark2: "Lorem ipsum dolor sit amet consectetur",
                        textCheckmark3: "Lorem ipsum dolor sit amet consectetur",
                        textCheckmark4: "Lorem ipsum dolor sit amet consectetur",
                        textCheckmark5: "Lorem ipsum dolor sit amet consectetur",
                        textCta: "Read more",
                        textSubtext: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum inventore voluptate non. Esse repellendus voluptatibus voluptas vero similique sed quaerat odit. Aliquam recusandae aperiam vitae ex architecto veritatis harum porro!",
                        linkCta: "#",
                        brandName: "Select Brand",
                        colorSwatches: ""
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
                brandColor: `${ui.brands[i].colors[0]}`,
                swatches: ui.brands[i].colors
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
                                            this.onChange("themeColor", event.brandColor);
                                            this.onChange("brandName", event.label);
                                            this.onChange("colorSwatches", event.swatches);
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
                                <div className="slds-text-title slds-m-bottom_xx-small">Image</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleImage}
                                    onChange={(event) => { this.onChange('toggleImage', event.target.checked) }}
                                />
                            </div>
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
                                <div className="slds-text-title slds-m-bottom_xx-small">Checkmarks</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleChecklist}
                                    onChange={(event) => { this.onChange('toggleChecklist', event.target.checked) }}
                                />
                            </div>
                        </div>
                        <div className="slds-clearfix">
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">CTA</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleCta}
                                    onChange={(event) => { this.onChange('toggleCta', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Subtext</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleSubtext}
                                    onChange={(event) => { this.onChange('toggleSubtext', event.target.checked) }}
                                />
                            </div>
                        </div>
                        <div className="slds-m-top_small">
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
                        {this.props.content.toggleImage ? (
                            <>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Image URL <span style={{ color: "#0070d2" }}>- Image Size: 600px Width</span></div>
                                <Input
                                    value={this.props.content.image}
                                    onChange={event => {
                                        this.onChange("image", event.target.value);
                                    }}
                                />
                            </>
                        ) : null
                        }
                        {this.props.content.toggleHeadline ? (
                            <>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Headline Text</div>
                                <RichTextEditor onChange={(data) => this.onChange("textHeadline", data)} text={this.props.content.textHeadline} toggleBold={false} toggleItalic={true} toggleLink={true} />
                            </>
                        ) : null
                        }
                        {this.props.content.toggleChecklist ? (
                            <>
                                <div className="slds-text-title slds-m-top_small">Checkmark amount</div>
                                <Slider
                                    value={this.props.content.checkmarkAmount}
                                    min={1}
                                    max={5}
                                    step={1}
                                    onChange={event => {
                                        this.onChange("checkmarkAmount", event.target.value);
                                    }}
                                />
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Checkmark 1</div>
                                <RichTextEditor onChange={(data) => this.onChange("textCheckmark1", data)} text={this.props.content.textCheckmark1} toggleBold={true} toggleItalic={true} toggleLink={true} />
                                {this.props.content.checkmarkAmount >= 2 ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Checkmark 2</div>
                                        <RichTextEditor onChange={(data) => this.onChange("textCheckmark2", data)} text={this.props.content.textCheckmark2} toggleBold={true} toggleItalic={true} toggleLink={true} />
                                    </>
                                ) : null
                                }
                                {this.props.content.checkmarkAmount >= 3 ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Checkmark 3</div>
                                        <RichTextEditor onChange={(data) => this.onChange("textCheckmark3", data)} text={this.props.content.textCheckmark3} toggleBold={true} toggleItalic={true} toggleLink={true} />
                                    </>
                                ) : null
                                }
                                {this.props.content.checkmarkAmount >= 4 ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Checkmark 4</div>
                                        <RichTextEditor onChange={(data) => this.onChange("textCheckmark4", data)} text={this.props.content.textCheckmark4} toggleBold={true} toggleItalic={true} toggleLink={true} />
                                    </>
                                ) : null
                                }
                                {this.props.content.checkmarkAmount >= 5 ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Checkmark 5</div>
                                        <RichTextEditor onChange={(data) => this.onChange("textCheckmark5", data)} text={this.props.content.textCheckmark5} toggleBold={true} toggleItalic={true} toggleLink={true} />
                                    </>
                                ) : null
                                }
                                <div className="slds-text-title slds-m-top_small">Checkmark Line Height</div>
                                <Slider
                                    value={this.props.content.checkmarkHeight}
                                    min={5}
                                    max={15}
                                    step={5}
                                    onChange={event => {
                                        this.onChange("checkmarkHeight", event.target.value);
                                    }}
                                />
                            </>
                        ) : null
                        }
                        {this.props.content.toggleCta ? (
                            <>
                                <div className="slds-text-title slds-m-top_small">CTA style</div>
                                <RadioButtonGroup
                                    onChange={event => {
                                        this.onChange("ctaStyle", event.target.value);
                                    }}
                                >
                                    <Radio
                                        label="Button"
                                        variant="button-group"
                                        value="button"
                                        checked={this.props.content.ctaStyle === "button"}
                                    ></Radio>
                                    <Radio
                                        label="Link"
                                        variant="button-group"
                                        value="link"
                                        checked={this.props.content.ctaStyle === "link"}
                                    ></Radio>
                                </RadioButtonGroup>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Text</div>
                                <Input
                                    value={this.props.content.textCta}
                                    onChange={event => {
                                        this.onChange("textCta", event.target.value);
                                    }}
                                />
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Link</div>
                                <Input
                                    value={this.props.content.linkCta}
                                    onChange={event => {
                                        this.onChange("linkCta", event.target.value);
                                    }}
                                />
                            </>
                        ) : null
                        }
                        {this.props.content.toggleSubtext ? (
                            <>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Subtext</div>
                                <RichTextEditor onChange={(data) => this.onChange("textSubtext", data)} text={this.props.content.textSubtext} toggleBold={true} toggleItalic={true} toggleLink={true} />
                            </>
                        ) : null
                        }
                    </>
                ) : null
                }
            </Card >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);