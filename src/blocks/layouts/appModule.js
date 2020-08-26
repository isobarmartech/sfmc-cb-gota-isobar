export const LAYOUT = `
<!-- APP START -->
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
    [topBorderHtml]
    <tr>
        <td align="center" bgcolor="[bgColor]">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td height="40" style="font-size: 1px; line-height: 1px; height: 40px;">&nbsp;</td>
                            </tr>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td class="w-20" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
                                <td>
                                    [imgAppHtml]
                                    [headlineHtml]
                                    [bodyHtml]
                                    [ctaHtml]
                                </td>
                                <td class="w-20" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
                            </tr>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td height="40" style="font-size: 1px; line-height: 1px; height: 40px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- APP END -->
`;

export const TOP_BORDER = `
<!-- top border -->
<tr>
    <td height="1" style="font-size: 1px; line-height: 1px; height: 1px;" bgcolor="[themeColor]">&nbsp;</td>
</tr>
<!-- top border -->
`;

export const APP_IMAGE = `
<!-- app logo -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td align="center">
            <img src="[imgAppUrl]" alt="" width="70" height="auto" style="display: block; border: 0; width: 70px;" class="w-50">
        </td>
    </tr>
    [spacerHtml]
</table>
<!-- app logo -->
`;

export const HEADLINE = `
<!-- headline -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="serif font-20" align="center" style="font-size: 24px; line-height: 30px; color: [textColor]; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
            [textHeadline]
        </td>
    </tr>
    [spacerHtml]
</table>
<!-- headline -->
`;

export const BODY = `
<!-- body -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="sans font-14" align="center" style="font-size: 16px; line-height: 21px; color: [textColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textBody]
        </td>
    </tr>
    [spacerHtml]
</table>
<!-- body -->
`;

export const DOUBLE_CTA = `
<!-- double cta -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td style="background-color: [themeColor];">
                                    <a class="sans button" href="[linkCta1]" target="_blank" style="font-size: 16px; line-height: 16px; color: [ctaTextColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700; text-decoration: none; border-radius: 0px; -webkit-border-radius: 0px; background-color: [themeColor]; border-top: 16px solid [themeColor]; border-bottom: 16px solid [themeColor]; border-right: 16px solid [themeColor]; border-left: 16px solid [themeColor]; display: inline-block; text-align: center;">
                                        [textCta1]
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td style="background-color: [themeColor];">
                                    <a class="sans button" href="[linkCta2]" target="_blank" style="font-size: 16px; line-height: 16px; color: [ctaTextColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700; text-decoration: none; border-radius: 0px; -webkit-border-radius: 0px; background-color: [themeColor]; border-top: 16px solid [themeColor]; border-bottom: 16px solid [themeColor]; border-right: 16px solid [themeColor]; border-left: 16px solid [themeColor]; display: inline-block; text-align: center;">
                                        [textCta2]
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- double cta -->
`;

export const LAYOUT_DUAL = `
<!-- APP START -->
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
    [topBorderHtml]
    <tr>
        <td align="center" bgcolor="[bgColor]">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td height="40" style="font-size: 1px; line-height: 1px; height: 40px;">&nbsp;</td>
                            </tr>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td>
                                    <!-- double app wrapper -->
                                    <table border="0" cellspacing="0" cellpadding="0" width="100%">
                                        <tr>
                                            <th class="break" valign="top" width="295" style="width: 295px;">
                                                [imgAppHtml]
                                                [headlineHtml]
                                                [bodyHtml]
                                                [ctaHtml]
                                            </th>
                                            <th class="break h-40" width="10" height="10" style="font-size: 1px; line-height: 1px; width: 10px; height: 10px;">&nbsp;</th>
                                            <th class="break" valign="top" width="295" style="width: 295px;">
                                                [imgAppHtml_secondary]
                                                [headlineHtml_secondary]
                                                [bodyHtml_secondary]
                                                [ctaHtml_secondary]
                                            </th>
                                        </tr>
                                    </table>
                                    <!-- double app wrapper -->
                                </td>
                            </tr>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td height="40" style="font-size: 1px; line-height: 1px; height: 40px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- APP END -->
`;

export const APP_IMAGE_DUAL = `
<!-- app logo -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td align="center">
            <img src="[imgAppUrl]" alt="" width="70" height="auto" style="display: block; border: 0; width: 70px;" class="w-50">
        </td>
    </tr>
    [spacerHtml]
</table>
<!-- app logo -->
`;

export const APP_IMAGE_DUAL_SECONDARY = `
<!-- app logo -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td align="center">
            <img src="[imgAppUrl_secondary]" alt="" width="70" height="auto" style="display: block; border: 0; width: 70px;" class="w-50">
        </td>
    </tr>
    [spacerHtml]
</table>
<!-- app logo -->
`;

export const HEADLINE_DUAL = `
<!-- headline -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td class="serif" align="center" style="font-size: 16px; line-height: 21px; color: [textColor]; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
            [textHeadline]
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
    [spacerHtml]
</table>
<!-- headline -->
`;

export const HEADLINE_DUAL_SECONDARY = `
<!-- headline -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td class="serif" align="center" style="font-size: 16px; line-height: 21px; color: [textColor]; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
            [textHeadline_secondary]
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
    [spacerHtml]
</table>
<!-- headline -->
`;

export const BODY_DUAL = `
<!-- body -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td class="sans font-12" align="center" style="font-size: 14px; line-height: 19px; color: [textColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textBody]
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
    [spacerHtml]
</table>
<!-- body -->
`;

export const BODY_DUAL_SECONDARY = `
<!-- body -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td class="sans font-12" align="center" style="font-size: 14px; line-height: 19px; color: [textColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textBody_secondary]
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
    [spacerHtml]
</table>
<!-- body -->
`;

export const DOUBLE_CTA_DUAL = `
<!-- double cta -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td valign="top">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td class="sans" align="left" style="font-size: 14px; line-height: 20px; color: [themeColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700;">
                                    <a href="[linkCta1]" target="_blank" style="color: [themeColor]; text-decoration: none;">
                                        [textCta1]
                                    </a>
                                </td>
                                <td align="right" width="12" style="width: 12px;">
                                    <a href="[linkCta1]" target="_blank">
                                        <img src="[linkArrowUrl]" alt="" width="auto" height="12" style="display: block; border: 0; height: 12px;">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td valign="top">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td class="sans" align="left" style="font-size: 14px; line-height: 20px; color: [themeColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700;">
                                    <a href="[linkCta2]" target="_blank" style="color: [themeColor]; text-decoration: none;">
                                        [textCta2]
                                    </a>
                                </td>
                                <td align="right" width="12" style="width: 12px;">
                                    <a href="[linkCta2]" target="_blank">
                                        <img src="[linkArrowUrl]" alt="" width="auto" height="12" style="display: block; border: 0; height: 12px;">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
</table>
<!-- double cta -->
`;

export const DOUBLE_CTA_DUAL_SECONDARY = `
<!-- double cta -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td valign="top">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td class="sans" align="left" style="font-size: 14px; line-height: 20px; color: [themeColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700;">
                                    <a href="[linkCta1_secondary]" target="_blank" style="color: [themeColor]; text-decoration: none;">
                                        [textCta1_secondary]
                                    </a>
                                </td>
                                <td align="right" width="12" style="width: 12px;">
                                    <a href="[linkCta1_secondary]" target="_blank">
                                        <img src="[linkArrowUrl]" alt="" width="auto" height="12" style="display: block; border: 0; height: 12px;">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td valign="top">
                        <table border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td class="sans" align="left" style="font-size: 14px; line-height: 20px; color: [themeColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700;">
                                    <a href="[linkCta2_secondary]" target="_blank" style="color: [themeColor]; text-decoration: none;">
                                        [textCta2_secondary]
                                    </a>
                                </td>
                                <td align="right" width="12" style="width: 12px;">
                                    <a href="[linkCta2_secondary]" target="_blank">
                                        <img src="[linkArrowUrl]" alt="" width="auto" height="12" style="display: block; border: 0; height: 12px;">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
</table>
<!-- double cta -->
`;

export const SPACER = `
<tr>
    <td [spacerExtra] height="[spacerHeight]" style="font-size: 1px; line-height: 1px; height: [spacerHeight]px;">&nbsp;</td>
</tr>
`