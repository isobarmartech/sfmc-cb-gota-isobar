import React from "react";
import {
    Card,
    Input,
    Textarea,
    ColorPicker,
    RadioButtonGroup,
    Radio,
    Checkbox
} from "@salesforce/design-system-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../core/helpers";
import { LAYOUT, TRUMPET, HEADLINE, TEASER } from "./layouts/newsStory";
import { ui } from "../constants/ui.js";

var SDK = require("blocksdk");
var sdk = new SDK();

class Article extends React.Component {
    onChange = (element, value) => {
        this.props.editContent(element, value);
    };

    setContent = () => {
        let pattern, regex;
        let html = LAYOUT;

        // In case we have a working color
        if (this.props.content.bgWorkingColor) {
            html = html.replace(
                new RegExp("\\[themeColor\\]", "gi"),
                this.props.content.bgWorkingColor
            );
        }

        if (this.props.content.toggleTrumpet) {
            regex = /\[trumpetHtml\]/gi;
            html = html.replace(regex, TRUMPET);
        } else {
            regex = /\[trumpetHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleHeadline) {
            regex = /\[headlineHtml\]/gi;
            html = html.replace(regex, HEADLINE);
        } else {
            regex = /\[headlineHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleTeaser) {
            regex = /\[teaserHtml\]/gi;
            html = html.replace(regex, TEASER);
        } else {
            regex = /\[teaserHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.textTeaser !== undefined) {
            regex = /\[textTeaser\]/gi;
            html = html.replace(regex, this.props.content.textTeaser.replace(/\n/gi, "<br>"));
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
                        linkArticle: "#",
                        toggleTrumpet: true,
                        toggleHeadline: true,
                        toggleTeaser: true,
                        alignImage: "ltr",
                        themeColor: ui.brands[0].brandColor,
                        image: "https://via.placeholder.com/170x110",
                        textTrumpet: "Lorem ipsum 2020",
                        textHeadline: "Lorem ipsum dolor sit amet consectetur",
                        textTeaser: `"Lorem ipsum dolor sit"`
                    }
                });
            }

        });
    };


    render() {
        this.setContent();
        return (
            <Card hasNoHeader={true} bodyClassName="slds-card__body_inner">
                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Article Link</div>
                <Input
                    value={this.props.content.linkArticle}
                    onChange={event => {
                        this.onChange("linkArticle", event.target.value);
                    }}
                />
                <div className="slds-m-top_small">
                    <div className="slds-text-title">Image Alignment</div>
                    <RadioButtonGroup
                        onChange={event => {
                            this.onChange("alignImage", event.target.value);
                        }}
                    >
                        <Radio
                            label="Image left"
                            variant="button-group"
                            value="ltr"
                            checked={this.props.content.alignImage === "ltr"}
                        ></Radio>
                        <Radio
                            label="Image right"
                            variant="button-group"
                            value="rtl"
                            checked={this.props.content.alignImage === "rtl"}
                        ></Radio>
                    </RadioButtonGroup>
                </div>
                <div className="slds-clearfix">
                    <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                        <div className="slds-text-title slds-m-bottom_xx-small">Trumpet</div>
                        <Checkbox
                            labels={{
                                label: '',
                                toggleDisabled: '',
                                toggleEnabled: ''
                            }}
                            variant="toggle"
                            checked={this.props.content.toggleTrumpet}
                            onChange={(event) => { this.onChange('toggleTrumpet', event.target.checked) }}
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
                        <div className="slds-text-title slds-m-bottom_xx-small">Teaser</div>
                        <Checkbox
                            labels={{
                                label: '',
                                toggleDisabled: '',
                                toggleEnabled: ''
                            }}
                            variant="toggle"
                            checked={this.props.content.toggleTeaser}
                            onChange={(event) => { this.onChange('toggleTeaser', event.target.checked) }}
                        />
                    </div>
                </div>
                <div className="slds-m-top_small">
                    <div className="slds-text-title slds-m-bottom_xx-small">Theme Color</div>
                    <ColorPicker
                        hideInput={true}
                        swatchColors={ui.colors}
                        value={this.props.content.themeColor}
                        variant={"swatches"}
                        events={{
                            onChange: (event, data) => {
                                this.onChange("themeColor", data.color);
                            },
                            onWorkingColorChange: (event, data) => {
                                this.onChange(
                                    "bgWorkingColor",
                                    data.color.hex
                                );
                            }
                        }}
                        onClose={() =>
                            this.onChange("bgWorkingColor", undefined)
                        }
                    />
                </div>
                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Image URL <span style={{ color: "#0070d2" }}>- Image size: 170px width</span></div>
                <Input
                    value={this.props.content.image}
                    onChange={event => {
                        this.onChange("image", event.target.value);
                    }}
                />
                {this.props.content.toggleTrumpet ? (
                    <>
                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Trumpet Text</div>
                        <Input
                            value={this.props.content.textTrumpet}
                            onChange={event => {
                                this.onChange("textTrumpet", event.target.value);
                            }}
                        />
                    </>
                ) : null}
                {this.props.content.toggleHeadline ? (
                    <>
                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Headline Text</div>
                        <Input
                            value={this.props.content.textHeadline}
                            onChange={event => {
                                this.onChange("textHeadline", event.target.value);
                            }}
                        />
                    </>
                ) : null}
                {this.props.content.toggleTeaser ? (
                    <>
                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Teaser Text</div>
                        <Textarea
                            value={this.props.content.textTeaser}
                            onChange={event => {
                                this.onChange("textTeaser", event.target.value);
                            }}
                        />
                    </>
                ) : null}
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);