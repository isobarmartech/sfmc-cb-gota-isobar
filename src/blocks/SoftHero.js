import React from "react";
import {
    Card,
    Input,
    RadioButtonGroup,
    IconSettings,
    Dropdown,
    Radio,
    ColorPicker,
    Checkbox
} from "@salesforce/design-system-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../core/helpers";
import { LAYOUT, IMAGE, HEADLINE, GREETING, BODY, SIGNATURE, CTA_BUTTON, CTA_LINK, CONTENT_WRAPPER, SPACER } from "./layouts/softHero";
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


        if (this.props.content.toggleHeadline || this.props.content.toggleGreeting || this.props.content.toggleBody || this.props.content.toggleCta || this.props.content.toggleSignature) {
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
            if (this.props.content.toggleGreeting || this.props.content.toggleBody || this.props.content.toggleCta || this.props.content.toggleSignature) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "20");
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[headlineHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.headlineSize !== undefined) {
            regex = /\[headlineFontsize\]/gi;
            html = html.replace(regex, ui.components.headline[this.props.content.headlineSize].fontsize);
            regex = /\[headlineLineheight\]/gi;
            html = html.replace(regex, ui.components.headline[this.props.content.headlineSize].lineheight);
            regex = /\[headlineMobileClass\]/gi;
            html = html.replace(regex, ui.components.headline[this.props.content.headlineSize].mobileClass);
        }

        if (this.props.content.toggleGreeting) {
            regex = /\[greetingHtml\]/gi;
            html = html.replace(regex, GREETING);
            if (this.props.content.toggleBody) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            } else if (this.props.content.toggleCta || this.props.content.toggleSignature) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "20");
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[greetingHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleBody) {
            regex = /\[bodyHtml\]/gi;
            html = html.replace(regex, BODY);
            if (this.props.content.toggleCta || this.props.content.toggleSignature) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "20");
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[bodyHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleCta) {
            regex = /\[ctaHtml\]/gi;
            if (this.props.content.ctaStyle === "button") {
                html = html.replace(regex, CTA_BUTTON);
            } else if (this.props.content.ctaStyle === "link") {
                html = html.replace(regex, CTA_LINK);
            }
            if (this.props.content.toggleSignature) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "20");
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[ctaHtml\]/gi;
            html = html.replace(regex, "");
        }


        if (this.props.content.toggleSignature) {
            regex = /\[signatureHtml\]/gi;
            html = html.replace(regex, SIGNATURE);
        } else {
            regex = /\[signatureHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleBgColor) {
            regex = /\[bgColor\]/gi;
            html = html.replace(regex, `bgcolor="#FFFFFF"`);
        } else {
            regex = /\[bgColor\]/gi;
            html = html.replace(regex, "");
        }

        regex = /\[imageSignature\]/gi;
        html = html.replace(regex, this.props.content.publisherSignature);

        // Handle Rich Text Input
        if (this.props.content.textHeadline !== undefined) {
            regex = /\[textHeadline\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textHeadline));
        }
        if (this.props.content.textBody !== undefined) {
            regex = /\[textBody\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textBody));
        }

        if (this.props.content.publisherName !== undefined && this.props.content.publisherTitle !== undefined) {
            regex = /\[textSignature\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textSignature));
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
                        toggleGreeting: true,
                        toggleBody: true,
                        toggleCta: false,
                        toggleSignature: false,
                        toggleBgColor: true,
                        themeColor: "",
                        ctaStyle: "button",
                        alignContent: "center",
                        image: "https://via.placeholder.com/600x300",
                        textHeadline: "Lorem ipsum dolor sit amet consectetur",
                        headlineSize: "h1",
                        headlineFontsize: "",
                        headlineLineheight: "",
                        headlineMobileClass: "",
                        textGreeting: "Hej %%firstname_%%",
                        textBody: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus minima quas est, unde itaque ullam ipsum maiores provident nihil ratione eius earum nemo fuga, rem veniam.",
                        textCta: "Read more",
                        linkCta: "#",
                        signatureVersion: "default",
                        publisherSignature: "https://via.placeholder.com/250x70",
                        publisherName: "",
                        publisherTitle: "",
                        textSignature: "[b]Name Nameson[/b] \n Title",
                        brandName: "Select Brand",
                        colorSwatches: "",
                        brandIndex: ""
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
                brandIndex: i,
                swatches: ui.brands[i].colors,
                publisher_name: `${ui.brands[i].publisher.name}`,
                publisher_title: `${ui.brands[i].publisher.title}`,
                publisher_signa: `${ui.brands[i].publisher.signature}`
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
                                            this.onChange("publisherName", event.publisher_name);
                                            this.onChange("publisherTitle", event.publisher_title);
                                            this.onChange("publisherSignature", event.publisher_signa);
                                            this.onChange("textSignature", `[b]${event.publisher_name}[/b] \n ${event.publisher_title}`);
                                            this.onChange("brandIndex", event.brandIndex);
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
                                <div className="slds-text-title slds-m-bottom_xx-small">Greeting</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleGreeting}
                                    onChange={(event) => { this.onChange('toggleGreeting', event.target.checked) }}
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
                                <div className="slds-text-title slds-m-bottom_xx-small">Signature</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleSignature}
                                    onChange={(event) => { this.onChange('toggleSignature', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">White Background</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleBgColor}
                                    onChange={(event) => { this.onChange('toggleBgColor', event.target.checked) }}
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
                        <div className="slds-text-title slds-m-top_small">Align Content</div>
                        <RadioButtonGroup
                            onChange={event => {
                                this.onChange("alignContent", event.target.value);
                            }}
                        >
                            <Radio
                                label="Left"
                                variant="button-group"
                                value="left"
                                checked={this.props.content.alignContent === "left"}
                            ></Radio>
                            <Radio
                                label="Center"
                                variant="button-group"
                                value="center"
                                checked={this.props.content.alignContent === "center"}
                            ></Radio>
                            <Radio
                                label="Right"
                                variant="button-group"
                                value="right"
                                checked={this.props.content.alignContent === "right"}
                            ></Radio>
                        </RadioButtonGroup>
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
                        {
                            this.props.content.toggleHeadline ? (
                                <>
                                    <div className="slds-text-title slds-m-top_small">Headline size</div>
                                    <RadioButtonGroup
                                        onChange={event => {
                                            this.onChange("headlineSize", event.target.value);
                                        }}
                                    >
                                        <Radio
                                            label="H1"
                                            variant="button-group"
                                            value="h1"
                                            checked={this.props.content.headlineSize === "h1"}
                                        ></Radio>
                                        <Radio
                                            label="H2"
                                            variant="button-group"
                                            value="h2"
                                            checked={this.props.content.headlineSize === "h2"}
                                        ></Radio>
                                    </RadioButtonGroup>
                                    <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Headline Text</div>
                                    <RichTextEditor onChange={(data) => this.onChange("textHeadline", data)} text={this.props.content.textHeadline} toggleBold={false} toggleItalic={true} toggleLink={true} />
                                </>
                            ) : null
                        }
                        {
                            this.props.content.toggleGreeting ? (
                                <>
                                    <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Greeting Text</div>
                                    <Input
                                        value={this.props.content.textGreeting}
                                        onChange={event => {
                                            this.onChange("textGreeting", event.target.value);
                                        }}
                                    />
                                </>
                            ) : null
                        }
                        {
                            this.props.content.toggleBody ? (
                                <>
                                    <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Body Text</div>
                                    <RichTextEditor onChange={(data) => this.onChange("textBody", data)} text={this.props.content.textBody} toggleBold={true} toggleItalic={true} toggleLink={true} />
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
                        ) : null}
                        {this.props.content.toggleSignature ? (
                            <>
                                <div className="slds-text-title slds-m-top_small">Signature</div>
                                <RadioButtonGroup
                                    onChange={event => {
                                        this.onChange("signatureVersion", event.target.value);

                                        if (event.target.value === "default") {
                                            this.onChange("textSignature", `[b]${ui.brands[this.props.content.brandIndex].publisher.name}[/b] \n ${ui.brands[this.props.content.brandIndex].publisher.title}`);
                                            this.onChange("publisherSignature", ui.brands[this.props.content.brandIndex].publisher.signature);
                                        } else if (event.target.value === "custom") {
                                            this.onChange("textSignature", "[b]Name Nameson[/b] \n Title");
                                            this.onChange("publisherSignature", "https://via.placeholder.com/250x70");
                                        }

                                    }}
                                >
                                    <Radio
                                        label="Default"
                                        variant="button-group"
                                        value="default"
                                        checked={this.props.content.signatureVersion === "default"}
                                    ></Radio>
                                    <Radio
                                        label="Custom"
                                        variant="button-group"
                                        value="custom"
                                        checked={this.props.content.signatureVersion === "custom"}
                                    ></Radio>
                                </RadioButtonGroup>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Signature Image URL <span style={{ color: "#0070d2" }}>- Image Size: 250px Width</span></div>
                                <Input
                                    value={this.props.content.publisherSignature}
                                    onChange={event => {
                                        this.onChange("publisherSignature", event.target.value);
                                    }}
                                />
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Signature Text</div>
                                <RichTextEditor onChange={(data) => this.onChange("textSignature", data)} text={this.props.content.textSignature} toggleBold={true} toggleItalic={true} toggleLink={true} />
                            </>
                        ) : null}

                    </>
                ) : null
                }
            </Card >
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);