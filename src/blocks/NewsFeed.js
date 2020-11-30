import React from "react";
import {
    Card,
    Input,
    ColorPicker,
    IconSettings,
    Dropdown,
} from "@salesforce/design-system-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../core/helpers";
import { LAYOUT } from "./layouts/newsFeed";
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
        if (this.props.content.themeWorkingColor) {
            regex = /\[themeColor\]/gi;
            html = html.replace(regex, this.props.content.themeWorkingColor);
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
                        brandName: "Select Brand",
                        brandId: "",
                        themeColor: "",
                        colorSwatches: "",
                        adText: "Annons:",
                        adUrlLink: "",
                        adUrlImg: "",
                        newsFeed: "",
                        newsFeedList: "",
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
                swatches: ui.brands[i].colors,
                adUrlLink: ui.brands[i].ad.link,
                adUrlImg: ui.brands[i].ad.img,
                newsFeedList: ui.brands[i].newsfeeds
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
                                            this.onChange("brandId", event.value);
                                            this.onChange("brandName", event.label);
                                            this.onChange("colorSwatches", event.swatches);
                                            this.onChange("adUrlLink", event.adUrlLink);
                                            this.onChange("adUrlImg", event.adUrlImg);
                                            this.onChange("newsFeedList", event.newsFeedList);
                                            this.onChange("newsFeed", (event.newsFeedList.length > 0 ? event.newsFeedList[0].label : ""));
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
                                <div className="slds-text-title slds-m-bottom_xx-small">News Feed</div>
                                <IconSettings iconPath="/assets/icons">
                                    <div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center slds-m-top_small">
                                        <div className="slds-col_padded" >
                                            <div className="slds-float_left">
                                                <Input
                                                    value={this.props.content.newsFeed}
                                                    onChange={event => {
                                                        this.onChange("newsFeed", event.target.value);
                                                    }}
                                                />
                                            </div>
                                            {this.props.content.newsFeedList.length > 1 ? (
                                                <>
                                                    <div className="slds-float_left">
                                                        <Dropdown
                                                            length={null}
                                                            iconCategory="utility"
                                                            iconName="down"
                                                            iconVariant="border-filled"
                                                            onSelect={event => {
                                                                this.onChange("newsFeed", event.label);
                                                            }}
                                                            options={this.props.content.newsFeedList}
                                                        />
                                                    </div>
                                                </>
                                            ) : null
                                            }
                                        </div>
                                    </div>
                                </IconSettings>
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
                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Ad Intro Text</div>
                        <Input
                            value={this.props.content.adText}
                            onChange={event => {
                                this.onChange("adText", event.target.value);
                            }}
                        />
                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Ad Link Url</div>
                        <Input
                            value={this.props.content.adUrlLink}
                            onChange={event => {
                                this.onChange("adUrlLink", event.target.value);
                            }}
                        />
                        <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Ad Image Url</div>
                        <Input
                            value={this.props.content.adUrlImg}
                            onChange={event => {
                                this.onChange("adUrlImg", event.target.value);
                            }}
                        />
                    </>
                ) : null
                }
            </Card>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);