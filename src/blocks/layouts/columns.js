export const LAYOUT = `
<!-- 2-3 COLUMNS START -->
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
    <tr>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                </tr>
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td>
                        [headlineHtml]
                        [bodyHtml]
                        [spacerHtml]
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                [columnHtml]
                            </tr>
                        </table>
                    </td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- 2-3 COLUMNS END -->
`;

export const HEADLINE = `
<!-- headline -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="60" style="font-size: 1px; line-height: 1px; width: 60px;">&nbsp;</td>
        <td class="serif font-20" align="center" style="font-size: 24px; line-height: 30px; color: #2E2926; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
            [textHeadline]
        </td>
        <td class="w-20" width="60" style="font-size: 1px; line-height: 1px; width: 60px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
    </tr>
</table>
<!-- headline -->
`;

export const BODY = `
<!-- body -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="60" style="font-size: 1px; line-height: 1px; width: 60px;">&nbsp;</td>
        <td class="sans font-14" align="center" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textBody]
        </td>
        <td class="w-20" width="60" style="font-size: 1px; line-height: 1px; width: 60px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
    </tr>
</table>
<!-- body -->
`;

export const SPACER = `
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
    </tr>
</table>
`;

export const COLUMN = `
<th class="break" valign="top" width="[colWidth]" style="width: [colWidth]px; border: 1px solid #E3E3DE;">
[columnImageHtml]
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
    </tr>
</table>
[columnHeadlineHtml]
[columnBodyHtml]
[ctaHtml]
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
    </tr>
</table>
</th>
`;

export const COLUMN_SPACER = `
<th class="break" width="10" height="10" style="font-size: 1px; line-height: 1px; width: 10px; height: 10px;">&nbsp;</th>
`

export const COLUMN_IMAGE = `
<!-- image -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td>
            <img src="[colImg]" alt="" width="[colWidth]" height="auto" style="display: block; border: 0; width: [colWidth]px;" class="w-full">
        </td>
    </tr>
</table>
<!-- image -->
`;

export const COLUMN_HEADLINE = `
<!-- headline -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td class="serif" align="center" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
            [colHeadline]
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
    </tr>
</table>
<!-- headline -->
`;

export const COLUMN_BODY = `
<!-- body -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td class="sans font-12" align="center" style="font-size: 14px; line-height: 19px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [colBody]
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
    </tr>
</table>
<!-- body -->
`;

export const CTA_BUTTON = `
<!-- CTA - button -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td colspan="3" height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
    </tr>
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td style="background-color: [themeColor];">
                        <a class="sans button" href="[colCtaLink]" target="_blank" style="font-size: 16px; line-height: 16px; color: #ffffff; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700; text-decoration: none; border-radius: 0px; -webkit-border-radius: 0px; background-color: [themeColor]; border-top: 16px solid [themeColor]; border-bottom: 16px solid [themeColor]; border-right: 16px solid [themeColor]; border-left: 16px solid [themeColor]; display: inline-block; text-align: center;">
                            [colCtaText]
                        </a>
                    </td>
                </tr>
            </table>
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
    </tr>
</table>
<!-- CTA - button -->
`;

export const CTA_LINK = `
<!-- CTA - link -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td colspan="3" height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
    </tr>
    <tr>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="sans" align="left" style="font-size: 14px; line-height: 20px; color: [themeColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700;">
                        <a href="[colCtaLink]" target="_blank" style="color: [themeColor]; text-decoration: none;">
                            [colCtaText]
                        </a>
                    </td>
                    <td align="right" width="12" style="width: 12px;">
                        <a href="#" target="_blank">
                            <img src="[linkArrowUrl]" alt="" width="auto" height="12" style="display: block; border: 0; height: 12px;">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
        <td class="w-20" width="15" style="font-size: 1px; line-height: 1px; width: 15px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
    </tr>
</table>
<!-- CTA - link -->
`;
