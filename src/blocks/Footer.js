import React from "react";
import {
    Card,
    ColorPicker,
    IconSettings,
    Dropdown,
    Input,
    Slider,
    Checkbox,
    Button
} from "@salesforce/design-system-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../core/helpers";
import { LAYOUT, APP_ICONS, APP_ICONS_NO_TWITTER, MENU, MENU_ITEM, COPYRIGHT, LEGAL, CONTENT_WRAPPER, ADDRESS, USUBSCRIBE, SPACER } from "./layouts/footer";
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

        if (this.props.content.toggleIcons || this.props.content.toggleMenu || this.props.content.toggleCopyright || this.props.content.toggleLegal || this.props.content.toggleAddress || this.props.content.toggleUnsubscribe) {
            regex = /\[contentWrapperHtml\]/gi;
            html = html.replace(regex, CONTENT_WRAPPER);
        } else {
            regex = /\[contentWrapperHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleIcons) {
            regex = /\[appIconsHtml\]/gi;

            if (this.props.content.linkTwitter === "") {
                html = html.replace(regex, APP_ICONS_NO_TWITTER);
            } else {
                html = html.replace(regex, APP_ICONS);
            }

            if (this.props.content.toggleMenu || this.props.content.toggleCopyright || this.props.content.toggleLegal || this.props.content.toggleAddress || this.props.content.toggleUnsubscribe) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "25");
                regex = /\[spacerExtra\]/gi;
                html = html.replace(regex, "");
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[appIconsHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleMenu) {
            regex = /\[menuHtml\]/gi;
            html = html.replace(regex, MENU);

            let menu_items = "";

            for (let i = 0; i < this.props.content.menuAmount; i++) {

                let menu_item = MENU_ITEM;

                regex = /\[textMenuItem\]/gi;
                menu_item = menu_item.replace(regex, `[textMenuItem${i + 1}]`);

                regex = /\[linkMenuItem\]/gi;
                menu_item = menu_item.replace(regex, `[linkMenuItem${i + 1}]`);

                menu_items = menu_items + menu_item;
            }


            regex = /\[menuItemHtml\]/gi;
            html = html.replace(regex, menu_items);

            if (this.props.content.toggleCopyright || this.props.content.toggleLegal || this.props.content.toggleAddress || this.props.content.toggleUnsubscribe) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "35");
                regex = /\[spacerExtra\]/gi;
                html = html.replace(regex, "");
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[menuHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleCopyright) {
            regex = /\[copyrightHtml\]/gi;
            html = html.replace(regex, COPYRIGHT);
            if (this.props.content.toggleLegal) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            } else if (this.props.content.toggleAddress || this.props.content.toggleUnsubscribe) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "15");
                regex = /\[spacerExtra\]/gi;
                html = html.replace(regex, `colspan="3"`);
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[copyrightHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleLegal) {
            regex = /\[legalHtml\]/gi;
            html = html.replace(regex, LEGAL);
            if (this.props.content.toggleAddress || this.props.content.toggleUnsubscribe) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "15");
                regex = /\[spacerExtra\]/gi;
                html = html.replace(regex, `colspan="3"`);
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[legalHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleAddress) {
            regex = /\[addressHtml\]/gi;
            html = html.replace(regex, ADDRESS);
            if (this.props.content.toggleUnsubscribe) {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, SPACER);
                regex = /\[spacerHeight\]/gi;
                html = html.replace(regex, "15");
                regex = /\[spacerExtra\]/gi;
                html = html.replace(regex, `colspan="3"`);
            } else {
                regex = /\[spacerHtml\]/gi;
                html = html.replace(regex, "");
            }
        } else {
            regex = /\[addressHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleUnsubscribe) {
            regex = /\[unsubscribeHtml\]/gi;
            html = html.replace(regex, USUBSCRIBE);

        } else {
            regex = /\[unsubscribeHtml\]/gi;
            html = html.replace(regex, "");
        }

        regex = /\[linkUnsubscribe\]/gi;
        html = html.replace(regex, `%%=redirectto(cloudpagesurl('${this.props.content.selectedCloudpageUrl}', 'type', '${this.props.content.linkUnsubscribeType === undefined ? 'offer' : this.props.content.linkUnsubscribeType}', 'brand', '${this.props.content.brandId}'))=%%`);

        regex = /\[imgLogo\]/gi;
        html = html.replace(regex, ui.images.brandImages[this.props.content.brandId].footer);


        // Handle Rich Text Input
        if (this.props.content.textLegal !== undefined) {
            regex = /\[textLegal\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textLegal));
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
                        toggleIcons: true,
                        toggleMenu: true,
                        toggleCopyright: true,
                        toggleLegal: false,
                        toggleAddress: true,
                        toggleUnsubscribe: true,
                        menuAmount: "1",
                        themeColor: "",
                        brandName: "Select Brand",
                        brandId: "",
                        brandIndex: "",
                        colorSwatches: "",
                        linkArrowUrl: "",
                        textLegal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.",
                        linkLogo: "#",
                        imgLogo: "none",
                        linkFacebook: "#",
                        linkTwitter: "#",
                        linkInstagram: "#",
                        textUnsubscribe: "",
                        linkUnsubscribeType: "offer",
                        defaultCloudpageUrl: "",
                        selectedCloudpageUrl: "",
                        textAddress: "",
                        linkAddress: "",
                        textMenuItem1: "",
                        linkMenuItem1: "",
                        textMenuItem2: "",
                        linkMenuItem2: "",
                        textMenuItem3: "",
                        linkMenuItem3: "",
                        textMenuItem4: "",
                        linkMenuItem4: "",
                        textMenuItem5: "",
                        linkMenuItem5: ""
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
                brandColor: `${ui.brands[i].colors[0]}`,
                swatches: ui.brands[i].colors,
                facebook: `${ui.brands[i].facebook}`,
                twitter: `${ui.brands[i].twitter}`,
                instagram: `${ui.brands[i].instagram}`,
                index: i,
                menuAmount: ui.brands[i].menu.length,
                textUnsubscribe: ui.brands[i].unsubscribe,
                textAddress: ui.brands[i].address.text,
                linkAddress: ui.brands[i].address.link,
                textMenuItem1: ui.brands[i].menu[0] !== undefined ? ui.brands[i].menu[0].title : "Menu item 1",
                textMenuItem2: ui.brands[i].menu[1] !== undefined ? ui.brands[i].menu[1].title : "Menu item 2",
                textMenuItem3: ui.brands[i].menu[2] !== undefined ? ui.brands[i].menu[2].title : "Menu item 3",
                textMenuItem4: ui.brands[i].menu[3] !== undefined ? ui.brands[i].menu[3].title : "Menu item 4",
                textMenuItem5: ui.brands[i].menu[4] !== undefined ? ui.brands[i].menu[4].title : "Menu item 5",
                linkMenuItem1: ui.brands[i].menu[0] !== undefined ? ui.brands[i].menu[0].link : "#",
                linkMenuItem2: ui.brands[i].menu[1] !== undefined ? ui.brands[i].menu[1].link : "#",
                linkMenuItem3: ui.brands[i].menu[2] !== undefined ? ui.brands[i].menu[2].link : "#",
                linkMenuItem4: ui.brands[i].menu[3] !== undefined ? ui.brands[i].menu[3].link : "#",
                linkMenuItem5: ui.brands[i].menu[4] !== undefined ? ui.brands[i].menu[4].link : "#",
                defaultCloudpageUrl: ui.brands[i].cloudpageUrl
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
                                            this.onChange("linkLogo", event.website);
                                            this.onChange("themeColor", event.brandColor);
                                            this.onChange("colorSwatches", event.swatches);
                                            this.onChange("brandName", event.label)
                                            this.onChange("linkFacebook", event.facebook);
                                            this.onChange("linkTwitter", event.twitter);
                                            this.onChange("linkInstagram", event.instagram);
                                            this.onChange("brandIndex", event.index);
                                            this.onChange("menuAmount", event.menuAmount);
                                            this.onChange("textUnsubscribe", event.textUnsubscribe);
                                            this.onChange("textAddress", event.textAddress);
                                            this.onChange("linkAddress", event.linkAddress);
                                            this.onChange("textMenuItem1", event.textMenuItem1);
                                            this.onChange("textMenuItem2", event.textMenuItem2);
                                            this.onChange("textMenuItem3", event.textMenuItem3);
                                            this.onChange("textMenuItem4", event.textMenuItem4);
                                            this.onChange("textMenuItem5", event.textMenuItem5);
                                            this.onChange("linkMenuItem1", event.linkMenuItem1);
                                            this.onChange("linkMenuItem2", event.linkMenuItem2);
                                            this.onChange("linkMenuItem3", event.linkMenuItem3);
                                            this.onChange("linkMenuItem4", event.linkMenuItem4);
                                            this.onChange("linkMenuItem5", event.linkMenuItem5);
                                            this.onChange("defaultCloudpageUrl", event.defaultCloudpageUrl);
                                            this.onChange("selectedCloudpageUrl", event.defaultCloudpageUrl);
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
                                <div className="slds-text-title slds-m-bottom_xx-small">Social Icons</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleIcons}
                                    onChange={(event) => { this.onChange('toggleIcons', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Menu</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleMenu}
                                    onChange={(event) => { this.onChange('toggleMenu', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Copyright</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleCopyright}
                                    onChange={(event) => { this.onChange('toggleCopyright', event.target.checked) }}
                                />
                            </div>
                        </div>
                        <div className="slds-clearfix">
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Legal Text</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleLegal}
                                    onChange={(event) => { this.onChange('toggleLegal', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Address</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleAddress}
                                    onChange={(event) => { this.onChange('toggleAddress', event.target.checked) }}
                                />
                            </div>
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                <div className="slds-text-title slds-m-bottom_xx-small">Unsubscribe</div>
                                <Checkbox
                                    labels={{
                                        label: '',
                                        toggleDisabled: '',
                                        toggleEnabled: ''
                                    }}
                                    variant="toggle"
                                    checked={this.props.content.toggleUnsubscribe}
                                    onChange={(event) => { this.onChange('toggleUnsubscribe', event.target.checked) }}
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
                        {this.props.content.toggleMenu ? (
                            <>
                                <div className="slds-text-title slds-m-top_small">Menu Item Amount</div>
                                <Slider
                                    value={this.props.content.menuAmount}
                                    min={1}
                                    max={5}
                                    step={1}
                                    onChange={event => {
                                        this.onChange("menuAmount", event.target.value);
                                    }}
                                />
                                <div className="slds-theme_shade slds-p-around_medium slds-m-top_small slds-box">
                                    <div className="slds-text-heading_small slds-m-bottom_xx-small">Menu Item 1</div>
                                    <div className="slds-text-title slds-m-bottom_xx-small">Text</div>
                                    <Input
                                        value={this.props.content.textMenuItem1}
                                        onChange={event => {
                                            this.onChange("textMenuItem1", event.target.value);
                                        }}
                                    />
                                    <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Link</div>
                                    <Input
                                        value={this.props.content.linkMenuItem1}
                                        onChange={event => {
                                            this.onChange("linkMenuItem1", event.target.value);
                                        }}
                                    />
                                </div>
                                {this.props.content.menuAmount >= 2 ? (
                                    <>
                                        <div className="slds-theme_shade slds-p-around_medium slds-m-top_small slds-box">
                                            <div className="slds-text-heading_small slds-m-bottom_xx-small">Menu Item 2</div>
                                            <div className="slds-text-title slds-m-bottom_xx-small">Text</div>
                                            <Input
                                                value={this.props.content.textMenuItem2}
                                                onChange={event => {
                                                    this.onChange("textMenuItem2", event.target.value);
                                                }}
                                            />
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Link</div>
                                            <Input
                                                value={this.props.content.linkMenuItem2}
                                                onChange={event => {
                                                    this.onChange("linkMenuItem2", event.target.value);
                                                }}
                                            />
                                        </div>
                                    </>
                                ) : null
                                }
                                {this.props.content.menuAmount >= 3 ? (
                                    <>
                                        <div className="slds-theme_shade slds-p-around_medium slds-m-top_small slds-box">
                                            <div className="slds-text-heading_small slds-m-bottom_xx-small">Menu Item 3</div>
                                            <div className="slds-text-title slds-m-bottom_xx-small">Text</div>
                                            <Input
                                                value={this.props.content.textMenuItem3}
                                                onChange={event => {
                                                    this.onChange("textMenuItem3", event.target.value);
                                                }}
                                            />
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Link</div>
                                            <Input
                                                value={this.props.content.linkMenuItem3}
                                                onChange={event => {
                                                    this.onChange("linkMenuItem3", event.target.value);
                                                }}
                                            />
                                        </div>
                                    </>
                                ) : null
                                }
                                {this.props.content.menuAmount >= 4 ? (
                                    <>
                                        <div className="slds-theme_shade slds-p-around_medium slds-m-top_small slds-box">
                                            <div className="slds-text-heading_small slds-m-bottom_xx-small">Menu Item 4</div>
                                            <div className="slds-text-title slds-m-bottom_xx-small">Text</div>
                                            <Input
                                                value={this.props.content.textMenuItem4}
                                                onChange={event => {
                                                    this.onChange("textMenuItem4", event.target.value);
                                                }}
                                            />
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Link</div>
                                            <Input
                                                value={this.props.content.linkMenuItem4}
                                                onChange={event => {
                                                    this.onChange("linkMenuItem4", event.target.value);
                                                }}
                                            />
                                        </div>
                                    </>
                                ) : null
                                }
                                {this.props.content.menuAmount >= 5 ? (
                                    <>
                                        <div className="slds-theme_shade slds-p-around_medium slds-m-top_small slds-box">
                                            <div className="slds-text-heading_small slds-m-bottom_xx-small">Menu Item 5</div>
                                            <div className="slds-text-title slds-m-bottom_xx-small">Text</div>
                                            <Input
                                                value={this.props.content.textMenuItem5}
                                                onChange={event => {
                                                    this.onChange("textMenuItem5", event.target.value);
                                                }}
                                            />
                                            <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Link</div>
                                            <Input
                                                value={this.props.content.linkMenuItem5}
                                                onChange={event => {
                                                    this.onChange("linkMenuItem5", event.target.value);
                                                }}
                                            />
                                        </div>
                                    </>
                                ) : null
                                }
                            </>
                        ) : null
                        }
                        {this.props.content.toggleLegal ? (
                            <>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Legal Text</div>
                                <RichTextEditor onChange={(data) => this.onChange("textLegal", data)} text={this.props.content.textLegal} toggleBold={true} toggleItalic={true} toggleLink={true} />
                            </>
                        ) : null
                        }
                        {this.props.content.toggleUnsubscribe ? (
                            <>
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Unsubsribe Text</div>
                                <Input
                                    value={this.props.content.textUnsubscribe}
                                    onChange={event => {
                                        this.onChange("textUnsubscribe", event.target.value);
                                    }}
                                />
                                <div className="slds-clearfix">
                                    <div className="slds-float_left slds-m-right_medium slds-m-top_small">
                                        <div className="slds-text-title">Unsubscribe Type</div>
                                        <IconSettings iconPath="/assets/icons">
                                            <div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center slds-m-top_xx-small">
                                                <div className="slds-col_padded" >
                                                    <div className="slds-float_left">
                                                        <Dropdown
                                                            length={null}
                                                            iconCategory="utility"
                                                            iconName="down"
                                                            iconVariant="border-filled"
                                                            onSelect={event => {
                                                                this.onChange("linkUnsubscribeType", event.label);
                                                            }}
                                                            options={[{ label: "offer" }, { label: "editorial" }, { label: "info" }]}
                                                        />
                                                    </div>
                                                    <div className="slds-float_left slds-text-heading_small slds-p-top_xx-small slds-p-left_x-small">
                                                        {this.props.content.linkUnsubscribeType === undefined ? 'offer' : this.props.content.linkUnsubscribeType}
                                                    </div>
                                                </div>
                                            </div>
                                        </IconSettings>
                                    </div>
                                    <div className="slds-float_left slds-m-left_large slds-m-top_small">
                                        <IconSettings iconPath="/assets/icons">
                                            <div className="slds-text-title slds-m-bottom_xx-small">Cloudpage URL</div>
                                            <div className="slds-float_left">
                                                <div className="slds-float_left" style={{ width: "90px" }}>
                                                    <Input
                                                        maxLength={5}
                                                        value={this.props.content.selectedCloudpageUrl}
                                                        onChange={event => {
                                                            this.onChange("selectedCloudpageUrl", event.target.value);
                                                        }}
                                                        errorText={this.props.content.selectedCloudpageUrl === undefined || this.props.content.selectedCloudpageUrl === "" ? "URL missing" : ""}
                                                    />
                                                </div>
                                                {(this.props.content.selectedCloudpageUrl !== this.props.content.defaultCloudpageUrl) || (this.props.content.selectedCloudpageUrl === undefined && this.props.content.defaultCloudpageUrl === undefined) ? (
                                                    <div className="slds-float_left">
                                                        <Button
                                                            iconCategory="utility"
                                                            iconName="refresh"
                                                            iconVariant="border-filled"
                                                            onClick={(e) => {
                                                                if (this.props.content.selectedCloudpageUrl === undefined || this.props.content.defaultCloudpageUrl === undefined) {
                                                                    console.log("hard reload")
                                                                    for (let i = 0; i < this.brandList().length; i++) {
                                                                        if (this.brandList()[i].value === this.props.content.brandId) {
                                                                            this.onChange("selectedCloudpageUrl", this.brandList()[i].defaultCloudpageUrl);
                                                                            this.onChange("defaultCloudpageUrl", this.brandList()[i].defaultCloudpageUrl);
                                                                        }
                                                                    }
                                                                } else {
                                                                    console.log("soft reload")
                                                                    this.onChange("selectedCloudpageUrl", this.props.content.defaultCloudpageUrl);
                                                                }

                                                            }}
                                                        />
                                                    </div>
                                                ) : null
                                                }
                                            </div>
                                        </IconSettings>
                                    </div>
                                </div>
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