import React from "react";
import {
    Card,
    Input,
    IconSettings,
    RadioButtonGroup,
    Radio,
    Dropdown,
    Checkbox
} from "@salesforce/design-system-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../core/helpers";
import { LAYOUT, GIFBANNER } from "./layouts/header";
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

        if (this.props.content.toggleBanner) {
            regex = /\[gifHtml\]/gi;
            html = html.replace(regex, GIFBANNER);
        } else if (!this.props.content.toggleBanner) {
            regex = /\[gifHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleBanner && this.props.content.bannerType === "gif") {

            regex = /\[bannerDesktop\]/gi;
            html = html.replace(regex, ui.images.brandImages[this.props.content.brandId].banner.gif.desktop);

            regex = /\[bannerMobile\]/gi;
            html = html.replace(regex, ui.images.brandImages[this.props.content.brandId].banner.gif.mobile);

        } else if (this.props.content.toggleBanner && this.props.content.bannerType === "static") {

            regex = /\[bannerDesktop\]/gi;
            html = html.replace(regex, ui.images.brandImages[this.props.content.brandId].banner.static.desktop);

            regex = /\[bannerMobile\]/gi;
            html = html.replace(regex, ui.images.brandImages[this.props.content.brandId].banner.static.mobile);

        }

        if (this.props.content.logoVersion === "gota") {
            regex = /\[imgLogo\]/gi;
            html = html.replace(regex, ui.images.brandImages[this.props.content.brandId].header_gota);
        } else if (this.props.content.logoVersion === "custom") {
            regex = /\[imgLogo\]/gi;
            html = html.replace(regex, this.props.content.logoCustomUrl);
        } else {
            regex = /\[imgLogo\]/gi;
            html = html.replace(regex, ui.images.brandImages[this.props.content.brandId].header);
        }

        // BLT Unique Logo height
        if (this.props.content.brandId === "BLT" && this.props.content.logoVersion === "gota") {
            regex = /\[heightLogo\]/gi;
            html = html.replace(regex, "80");
            regex = /\[heightClass35\]/gi;
            html = html.replace(regex, "");
        } else {
            regex = /\[heightLogo\]/gi;
            html = html.replace(regex, "40");
            regex = /\[heightClass35\]/gi;
            html = html.replace(regex, `class="h-35"`);
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
                        toggleBanner: true,
                        bannerType: "static",
                        themeColor: "",
                        bannerDesktop: "",
                        bannerMobile: "",
                        linkLogo: "#",
                        linkBanner: "#",
                        brandName: "Select Brand",
                        brandId: "",
                        logoVersion: "gota",
                        logoCustomUrl: ""
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
                website: `${ui.brands[i].website}`,
                brandColor: `${ui.brands[i].colors[0]}`
            })
        }

        console.log(arr)
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
                                            this.onChange("linkLogo", event.website);
                                            this.onChange("linkBanner", event.website);
                                            this.onChange("themeColor", event.brandColor);
                                            this.onChange("brandName", event.label);
                                            this.onChange("logoCustomUrl", ui.images.brandImages[event.value].header_custom);
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
                                <div className="slds-text-title slds-m-bottom_xx-small">Banner</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleBanner}
                                    onChange={(event) => { this.onChange('toggleBanner', event.target.checked) }}
                                />
                            </div>
                        </div>
                        <div className="slds-clearfix">
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Logo Version</div>
                                <RadioButtonGroup
                                    onChange={event => {
                                        this.onChange("logoVersion", event.target.value);
                                    }}
                                >
                                    <Radio
                                        label="Gota Branded"
                                        variant="button-group"
                                        value="gota"
                                        checked={this.props.content.logoVersion === "gota"}
                                    ></Radio>
                                    <Radio
                                        label="Standard"
                                        variant="button-group"
                                        value="default"
                                        checked={this.props.content.logoVersion === "default" || this.props.content.logoVersion === undefined}
                                    ></Radio>
                                    <Radio
                                        label="Custom"
                                        variant="button-group"
                                        value="custom"
                                        checked={this.props.content.logoVersion === "custom"}
                                    ></Radio>
                                </RadioButtonGroup>
                            </div>
                        </div>
                        {this.props.content.logoVersion === "custom" ? (
                            <>
                                <div className="slds-clearfix">
                                    <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Custom Logo Url <span style={{ color: "#0070d2" }}>- Image Size: Max. 640px Width - 80px Height</span></div>
                                    <Input
                                        value={this.props.content.logoCustomUrl}
                                        onChange={event => {
                                            this.onChange("logoCustomUrl", event.target.value);
                                        }}
                                    />
                                </div>
                            </>
                        ) : null}
                        {this.props.content.toggleBanner ? (
                            <>
                                <div className="slds-clearfix">
                                    <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                        <div className="slds-text-title slds-m-bottom_xx-small">Banner type</div>
                                        <RadioButtonGroup
                                            onChange={event => {
                                                this.onChange("bannerType", event.target.value);
                                            }}
                                        >
                                            <Radio
                                                label="Static"
                                                variant="button-group"
                                                value="static"
                                                checked={this.props.content.bannerType === "static"}
                                            ></Radio>
                                            <Radio
                                                label="Gif"
                                                variant="button-group"
                                                value="gif"
                                                checked={this.props.content.bannerType === "gif"}
                                            ></Radio>
                                        </RadioButtonGroup>
                                    </div>
                                </div>
                            </>
                        ) : null}
                        <div className="slds-clearfix">
                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Logo link</div>
                            <Input
                                value={this.props.content.linkLogo}
                                onChange={event => {
                                    this.onChange("linkLogo", event.target.value);
                                }}
                            />
                        </div>
                        {this.props.content.toggleBanner ? (
                            <>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Banner link</div>
                                <Input
                                    value={this.props.content.linkBanner}
                                    onChange={event => {
                                        this.onChange("linkBanner", event.target.value);
                                    }}
                                />
                            </>
                        ) : null}
                    </>
                ) : null
                }
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
