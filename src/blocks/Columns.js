import React from "react";
import {
    Card,
    Input,
    RadioButtonGroup,
    Radio,
    ColorPicker,
    Checkbox,
    IconSettings,
    Dropdown
} from "@salesforce/design-system-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../core/helpers";
import { LAYOUT, HEADLINE, BODY, SPACER, COLUMN_IMAGE, COLUMN_HEADLINE, COLUMN_BODY, CTA_BUTTON, CTA_LINK, COLUMN, COLUMN_SPACER } from "./layouts/columns";
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

        if (this.props.content.toggleHeadline || this.props.content.toggleBody) {
            regex = /\[spacerHtml\]/gi;
            html = html.replace(regex, SPACER);
        } else if (this.props.content.toggleHeadline === "off" || this.props.content.toggleBody === "off") {
            regex = /\[spacerHtml\]/gi;
            html = html.replace(regex, "");
        }

        let cols = "";

        for (let i = 0; i < this.props.content.colAmount; i++) {

            let col = COLUMN;

            if (this.props.content.toggleColImg) {
                regex = /\[columnImageHtml\]/gi;
                col = col.replace(regex, COLUMN_IMAGE);
                regex = /\[colImg\]/gi;
                col = col.replace(regex, `[colImg${i + 1}]`);
            } else {
                regex = /\[columnImageHtml\]/gi;
                col = col.replace(regex, "");
            }

            if (this.props.content.toggleColHeadline) {
                regex = /\[columnHeadlineHtml\]/gi;
                col = col.replace(regex, COLUMN_HEADLINE);
                regex = /\[colHeadline\]/gi;
                col = col.replace(regex, `[colHeadline${i + 1}]`);
            } else {
                regex = /\[columnHeadlineHtml\]/gi;
                col = col.replace(regex, "");
            }

            if (this.props.content.toggleColBody) {
                regex = /\[columnBodyHtml\]/gi;
                col = col.replace(regex, COLUMN_BODY);
                regex = /\[colBody\]/gi;
                col = col.replace(regex, `[colBody${i + 1}]`);
            } else {
                regex = /\[columnBodyHtml\]/gi;
                col = col.replace(regex, "");
            }

            if (this.props.content.toggleColCta) {
                regex = /\[ctaHtml\]/gi;
                if (this.props.content.ctaStyle === "button") {
                    col = col.replace(regex, CTA_BUTTON);
                } else if (this.props.content.ctaStyle === "link") {
                    col = col.replace(regex, CTA_LINK);
                }
                regex = /\[colCtaText\]/gi;
                col = col.replace(regex, `[colCtaText${i + 1}]`);
                regex = /\[colCtaLink\]/gi;
                col = col.replace(regex, `[colCtaLink${i + 1}]`);
            } else {
                regex = /\[ctaHtml\]/gi;
                col = col.replace(regex, "");
            }

            cols = cols + col;

            if (i + 1 < this.props.content.colAmount) {
                cols = cols + COLUMN_SPACER;
            }
        }

        if (this.props.content.toggleColImg || this.props.content.toggleColHeadline || this.props.content.toggleColBody || this.props.content.toggleColCta) {
            regex = /\[columnHtml\]/gi;
            html = html.replace(regex, cols);
        } else {
            regex = /\[columnHtml\]/gi;
            html = html.replace(regex, "");
        }

        // Handle Rich Text Input
        if (this.props.content.textBody !== undefined) {
            regex = /\[textBody\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textBody));
        }
        if (this.props.content.textHeadline !== undefined) {
            regex = /\[textHeadline\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textHeadline));
        }
        if (this.props.content.colHeadline1 !== undefined) {
            regex = /\[colHeadline1\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.colHeadline1));
        }
        if (this.props.content.colBody1 !== undefined) {
            regex = /\[colBody1\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.colBody1));
        }
        if (this.props.content.colHeadline2 !== undefined) {
            regex = /\[colHeadline2\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.colHeadline2));
        }
        if (this.props.content.colBody2 !== undefined) {
            regex = /\[colBody2\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.colBody2));
        }
        if (this.props.content.colHeadline3 !== undefined) {
            regex = /\[colHeadline3\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.colHeadline3));
        }
        if (this.props.content.colBody3 !== undefined) {
            regex = /\[colBody3\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.colBody3));
        }

        // In case we have a working color
        if (this.props.content.themeWorkingColor) {
            regex = /\[themeColor\]/gi;
            html = html.replace(regex, this.props.content.themeWorkingColor);
            regex = /\[linkArrowUrl\]/gi;
            html = html.replace(regex, ui.images.arrows[this.props.content.themeWorkingColor]);
        } else {
            regex = /\[linkArrowUrl\]/gi;
            html = html.replace(regex, ui.images.arrows[this.props.content.themeColor]);
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
                        toggleHeadline: true,
                        toggleBody: true,
                        toggleColImg: true,
                        toggleColHeadline: true,
                        toggleColBody: true,
                        toggleColCta: true,
                        textHeadline: "Lorem ipsum dolor",
                        textBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        themeColor: "",
                        ctaStyle: "button",
                        colAmount: "2",
                        colWidth: "293",
                        colImg1: `https://via.placeholder.com/300x150`,
                        colHeadline1: "Lorem ipsum 1",
                        colBody1: "Dolor sit amet consectetur adipisicing elit. 1",
                        colCtaText1: "Read more 1",
                        colCtaLink1: "#",
                        colImg2: `https://via.placeholder.com/300x150`,
                        colHeadline2: "Lorem ipsum 2",
                        colBody2: "Dolor sit amet consectetur adipisicing elit. 2",
                        colCtaText2: "Read more 2",
                        colCtaLink2: "#",
                        colImg3: `https://via.placeholder.com/300x150`,
                        colHeadline3: "Lorem ipsum 3",
                        colBody3: "Dolor sit amet consectetur adipisicing elit. 3",
                        colCtaText3: "Read more 3",
                        colCtaLink3: "#",
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
                                <div className="slds-text-title slds-m-bottom_xx-small">Body</div>
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
                        </div>
                        <div className="slds-clearfix">
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title">Layout</div>
                                <RadioButtonGroup
                                    onChange={event => {
                                        this.onChange("colAmount", event.target.value);
                                        this.onChange("colWidth", (event.target.value === "2" ? "293" : "192"));
                                    }}
                                >
                                    <Radio
                                        label="2 Columns"
                                        variant="button-group"
                                        value="2"
                                        checked={this.props.content.colAmount === "2"}
                                    ></Radio>
                                    <Radio
                                        label="3 Columns"
                                        variant="button-group"
                                        value="3"
                                        checked={this.props.content.colAmount === "3"}
                                    ></Radio>
                                </RadioButtonGroup>
                            </div>
                        </div>
                        <div className="slds-clearfix">
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Col Image</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleColImg}
                                    onChange={(event) => { this.onChange('toggleColImg', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Col Headline</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleColHeadline}
                                    onChange={(event) => { this.onChange('toggleColHeadline', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Col Text</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleColBody}
                                    onChange={(event) => { this.onChange('toggleColBody', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Col CTA</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleColCta}
                                    onChange={(event) => { this.onChange('toggleColCta', event.target.checked) }}
                                />
                            </div>
                        </div>

                        {this.props.content.toggleColCta ? (
                            <>
                                <div className="slds-clearfix">
                                    <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                        <div className="slds-text-title slds-m-bottom_xx-small">CTA style</div>
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
                                    </div>
                                </div>
                            </>
                        ) : null
                        }

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
                        {this.props.content.toggleHeadline ? (
                            <>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Headline Text</div>
                                <RichTextEditor onChange={(data) => this.onChange("textHeadline", data)} text={this.props.content.textHeadline} toggleBold={false} toggleItalic={true} toggleLink={true} />
                            </>
                        ) : null
                        }
                        {this.props.content.toggleBody ? (
                            <>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Body Text</div>
                                <RichTextEditor onChange={(data) => this.onChange("textBody", data)} text={this.props.content.textBody} toggleBold={true} toggleItalic={true} toggleLink={true} />
                            </>
                        ) : null
                        }
                        {this.props.content.toggleColImg || this.props.content.toggleColHeadline || this.props.content.toggleColBody || this.props.content.toggleColCta ? (
                            <div className="slds-theme_shade slds-p-around_medium slds-m-top_small slds-box">
                                <div className="slds-text-heading_small slds-m-bottom_xx-small">Column 1</div>

                                {this.props.content.toggleColImg ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small" style={{ color: "#0070d2" }}>Image Size: 300px Width</div>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Image</div>
                                        <Input
                                            value={this.props.content.colImg1}
                                            onChange={event => {
                                                this.onChange("colImg1", event.target.value);
                                            }}
                                        />
                                    </>
                                ) : null
                                }
                                {this.props.content.toggleColHeadline ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Headline</div>
                                        <RichTextEditor onChange={(data) => this.onChange("colHeadline1", data)} text={this.props.content.colHeadline1} toggleBold={false} toggleItalic={true} toggleLink={true} />
                                    </>
                                ) : null
                                }
                                {this.props.content.toggleColBody ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Body Text</div>
                                        <RichTextEditor onChange={(data) => this.onChange("colBody1", data)} text={this.props.content.colBody1} toggleBold={true} toggleItalic={true} toggleLink={true} />
                                    </>
                                ) : null
                                }
                                {this.props.content.toggleColCta ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Text</div>
                                        <Input
                                            value={this.props.content.colCtaText1}
                                            onChange={event => {
                                                this.onChange("colCtaText1", event.target.value);
                                            }}
                                        />
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Link</div>
                                        <Input
                                            value={this.props.content.colCtaLink1}
                                            onChange={event => {
                                                this.onChange("colCtaLink1", event.target.value);
                                            }}
                                        />
                                    </>
                                ) : null
                                }
                            </div>
                        ) : null
                        }
                        {this.props.content.toggleColImg || this.props.content.toggleColHeadline || this.props.content.toggleColBody || this.props.content.toggleColCta ? (
                            <div className="slds-theme_shade slds-p-around_medium slds-m-top_small slds-box">
                                <div className="slds-text-heading_small slds-m-bottom_xx-small">Column 2</div>

                                {this.props.content.toggleColImg ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small" style={{ color: "#0070d2" }}>Image Size: 300px Width</div>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Image</div>
                                        <Input
                                            value={this.props.content.colImg2}
                                            onChange={event => {
                                                this.onChange("colImg2", event.target.value);
                                            }}
                                        />
                                    </>
                                ) : null
                                }
                                {this.props.content.toggleColHeadline ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Headline</div>
                                        <RichTextEditor onChange={(data) => this.onChange("colHeadline2", data)} text={this.props.content.colHeadline2} toggleBold={false} toggleItalic={true} toggleLink={true} />
                                    </>
                                ) : null
                                }
                                {this.props.content.toggleColBody ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Body Text</div>
                                        <RichTextEditor onChange={(data) => this.onChange("colBody2", data)} text={this.props.content.colBody2} toggleBold={true} toggleItalic={true} toggleLink={true} />
                                    </>
                                ) : null
                                }
                                {this.props.content.toggleColCta ? (
                                    <>
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Text</div>
                                        <Input
                                            value={this.props.content.colCtaText2}
                                            onChange={event => {
                                                this.onChange("colCtaText2", event.target.value);
                                            }}
                                        />
                                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Link</div>
                                        <Input
                                            value={this.props.content.colCtaLink2}
                                            onChange={event => {
                                                this.onChange("colCtaLink2", event.target.value);
                                            }}
                                        />
                                    </>
                                ) : null
                                }
                            </div>
                        ) : null
                        }
                        {(this.props.content.toggleColImg || this.props.content.toggleColHeadline || this.props.content.toggleColBody || this.props.content.toggleColCta) && this.props.content.colAmount === "3" ? (
                            <>
                                <div className="slds-theme_shade slds-p-around_medium slds-m-top_small slds-box">
                                    <div className="slds-text-heading_small slds-m-bottom_xx-small">Column 3</div>
                                    {this.props.content.toggleColImg ? (
                                        <>
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small" style={{ color: "#0070d2" }}>Image Size: 300px Width</div>
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Image</div>
                                            <Input
                                                value={this.props.content.colImg3}
                                                onChange={event => {
                                                    this.onChange("colImg3", event.target.value);
                                                }}
                                            />
                                        </>
                                    ) : null
                                    }
                                    {this.props.content.toggleColHeadline ? (
                                        <>
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Headline</div>
                                            <RichTextEditor onChange={(data) => this.onChange("colHeadline3", data)} text={this.props.content.colHeadline3} toggleBold={false} toggleItalic={true} toggleLink={true} />
                                        </>
                                    ) : null
                                    }
                                    {this.props.content.toggleColBody ? (
                                        <>
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Body Text</div>
                                            <RichTextEditor onChange={(data) => this.onChange("colBody3", data)} text={this.props.content.colBody3} toggleBold={true} toggleItalic={true} toggleLink={true} />
                                        </>
                                    ) : null
                                    }
                                    {this.props.content.toggleColCta ? (
                                        <>
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Text</div>
                                            <Input
                                                value={this.props.content.colCtaText3}
                                                onChange={event => {
                                                    this.onChange("colCtaText3", event.target.value);
                                                }}
                                            />
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">CTA Link</div>
                                            <Input
                                                value={this.props.content.colCtaLink3}
                                                onChange={event => {
                                                    this.onChange("colCtaLink3", event.target.value);
                                                }}
                                            />
                                        </>
                                    ) : null
                                    }
                                </div>
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