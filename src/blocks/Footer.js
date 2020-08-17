import React from "react";
import {
    Card,
    ColorPicker,
    IconSettings,
    Dropdown,
    Input,
    Slider,
    Checkbox
} from "@salesforce/design-system-react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../core/helpers";
import { LAYOUT, APP_ICONS, MENU, MENU_ITEM, COPYRIGHT, LEGAL } from "./layouts/footer";
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

        // In case we have a working color
        if (this.props.content.bgWorkingColor) {
            html = html.replace(
                new RegExp("\\[themeColor\\]", "gi"),
                this.props.content.bgWorkingColor
            );
        }

        if (this.props.content.toggleIcons) {
            regex = /\[appIconsHtml\]/gi;
            html = html.replace(regex, APP_ICONS);
        } else {
            regex = /\[appIconsHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleLegal) {
            regex = /\[legalHtml\]/gi;
            html = html.replace(regex, LEGAL);
        } else {
            regex = /\[legalHtml\]/gi;
            html = html.replace(regex, "");
        }

        if (this.props.content.toggleCopyright) {
            regex = /\[copyrightHtml\]/gi;
            html = html.replace(regex, COPYRIGHT);
        } else {
            regex = /\[copyrightHtml\]/gi;
            html = html.replace(regex, "");
        }

        regex = /\[imgLogo\]/gi;
        html = html.replace(regex, ui.images.logos[this.props.content.brandId].footer);

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

            regex = /\[linkArrowUrl\]/gi;
            menu_items = menu_items.replace(regex, ui.images.arrows[this.props.content.themeColor]);

            regex = /\[menuItemHtml\]/gi;
            html = html.replace(regex, menu_items);
        } else {
            regex = /\[menuHtml\]/gi;
            html = html.replace(regex, "");
        }

        // Handle Rich Text Input
        if (this.props.content.textLegal !== undefined) {
            regex = /\[textLegal\]/gi;
            html = html.replace(regex, richTextToHtml(this.props.content.textLegal));
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
                        toggleLegal: true,
                        menuAmount: "1",
                        themeColor: "",
                        brandName: "Select Brand",
                        brandId: "",
                        brandIndex: "",
                        linkArrowUrl: "",
                        textLegal: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.",
                        linkLogo: "#",
                        imgLogo: "none",
                        linkFacebook: "#",
                        linkTwitter: "#",
                        linkInstagram: "#",
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
                brandColor: `${ui.brands[i].brandColor}`,
                facebook: `${ui.brands[i].facebook}`,
                twitter: `${ui.brands[i].twitter}`,
                instagram: `${ui.brands[i].instagram}`,
                index: i,
                menuAmount: ui.brands[i].menu.length,
                textMenuItem1: ui.brands[i].menu[0] !== undefined ? ui.brands[i].menu[0].title : "Menu item 1",
                textMenuItem2: ui.brands[i].menu[1] !== undefined ? ui.brands[i].menu[1].title : "Menu item 2",
                textMenuItem3: ui.brands[i].menu[2] !== undefined ? ui.brands[i].menu[2].title : "Menu item 3",
                textMenuItem4: ui.brands[i].menu[3] !== undefined ? ui.brands[i].menu[3].title : "Menu item 4",
                textMenuItem5: ui.brands[i].menu[4] !== undefined ? ui.brands[i].menu[4].title : "Menu item 5",
                linkMenuItem1: ui.brands[i].menu[0] !== undefined ? ui.brands[i].menu[0].link : "#",
                linkMenuItem2: ui.brands[i].menu[1] !== undefined ? ui.brands[i].menu[1].link : "#",
                linkMenuItem3: ui.brands[i].menu[2] !== undefined ? ui.brands[i].menu[2].link : "#",
                linkMenuItem4: ui.brands[i].menu[3] !== undefined ? ui.brands[i].menu[3].link : "#",
                linkMenuItem5: ui.brands[i].menu[4] !== undefined ? ui.brands[i].menu[4].link : "#"
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
                                            this.onChange("brandName", event.label)
                                            this.onChange("linkFacebook", event.facebook);
                                            this.onChange("linkTwitter", event.twitter);
                                            this.onChange("linkInstagram", event.instagram);
                                            this.onChange("brandIndex", event.index);
                                            this.onChange("menuAmount", event.menuAmount);
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
                        </div>
                        <div className="slds-clearfix">
                            <div className="slds-float_left slds-m-right_medium slds-m-top_small">
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
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Brand Copyright</div>
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
                                <div className="slds-text-title slds-m-top_small slds-m-bottom_xx-small">Legal Text</div>
                                <RichTextEditor onChange={(data) => this.onChange("textLegal", data)} text={this.props.content.textLegal} toggleBold={true} toggleItalic={true} toggleLink={true} />
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