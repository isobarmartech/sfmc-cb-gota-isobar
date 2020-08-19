export const LAYOUT = `
<!-- CHECKLIST START -->
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
    <tr>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                </tr>
                <tr>
                    <td class="w-20" width="9" style="font-size: 1px; line-height: 1px; width: 9px;">&nbsp;</td>
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%" style="border: 1px solid #E3E3DE;">
                            <tr>
                                <td>
                                    [imageHtml]
                                    <table border="0" cellspacing="0" cellpadding="0" width="100%" bgcolor="#FFFFFF">
                                        <tr>
                                            <td colspan="3" height="40" style="font-size: 1px; line-height: 1px; height: 40px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td class="w-20" width="60" style="font-size: 1px; line-height: 1px; width: 60px;">&nbsp;</td>
                                            <td>
                                                [headlineHtml]
                                                [checklistWrapperHtml]
                                                [ctaHtml]
                                                [subtextHtml]
                                            </td>
                                            <td class="w-20" width="60" style="font-size: 1px; line-height: 1px; width: 60px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" height="30" style="font-size: 1px; line-height: 1px; height: 30px;">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>

                    </td>
                    <td class="w-20" width="9" style="font-size: 1px; line-height: 1px; width: 9px;">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- CHECKLIST END -->
`;

export const IMAGE = `
<!-- image -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td>
            <img src="[image]" alt="" width="600" height="auto" style="display: block; border: 0; width: 600px;" class="w-full">
        </td>
    </tr>
</table>
<!-- image -->
`

export const HEADLINE = `
<!-- headline -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="serif" align="left" style="font-size: 24px; line-height: 30px; color: #2E2926; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
            [textHeadline]
        </td>
    </tr>
    <tr>
        <td height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
    </tr>
</table>
<!-- headline -->
`

export const CHECKLIST_WRAPPER = `
<!-- checkmark wrapper -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    [checkmarkHtml]
    <tr>
        <td colspan="2" height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
    </tr>
</table>
<!-- checkmark wrapper -->
`

export const CHECKLIST_CHECKMARK = {
    1: `
    <!-- single checkmark -->
    <tr>
        <td align="left" valign="top" width="32" style="width: 32px;">
            <img src="[checkmarkUrl]" alt="" width="20" height="20" style="display: block; border: 0; width: 20px;">
        </td>
        <td class="sans font-14" align="left" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textCheckmark1]
        </td>
    </tr>
    <tr>
        <td colspan="2" height="[checkmarkHeight]" style="font-size: 1px; line-height: 1px; height: [checkmarkHeight]px;">&nbsp;</td>
    </tr>
    <!-- single checkmark -->
    `,
    2: `
    <!-- single checkmark -->
    <tr>
        <td align="left" valign="top" width="32" style="width: 32px;">
            <img src="[checkmarkUrl]" alt="" width="20" height="20" style="display: block; border: 0; width: 20px;">
        </td>
        <td class="sans font-14" align="left" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textCheckmark2]
        </td>
    </tr>
    <tr>
        <td colspan="2" height="[checkmarkHeight]" style="font-size: 1px; line-height: 1px; height: [checkmarkHeight]px;">&nbsp;</td>
    </tr>
    <!-- single checkmark -->
    `,
    3: `
    <!-- single checkmark -->
    <tr>
        <td align="left" valign="top" width="32" style="width: 32px;">
            <img src="[checkmarkUrl]" alt="" width="20" height="20" style="display: block; border: 0; width: 20px;">
        </td>
        <td class="sans font-14" align="left" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textCheckmark3]
        </td>
    </tr>
    <tr>
        <td colspan="2" height="[checkmarkHeight]" style="font-size: 1px; line-height: 1px; height: [checkmarkHeight]px;">&nbsp;</td>
    </tr>
    <!-- single checkmark -->
    `,
    4: `
    <!-- single checkmark -->
    <tr>
        <td align="left" valign="top" width="32" style="width: 32px;">
            <img src="[checkmarkUrl]" alt="" width="20" height="20" style="display: block; border: 0; width: 20px;">
        </td>
        <td class="sans font-14" align="left" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textCheckmark4]
        </td>
    </tr>
    <tr>
        <td colspan="2" height="[checkmarkHeight]" style="font-size: 1px; line-height: 1px; height: [checkmarkHeight]px;">&nbsp;</td>
    </tr>
    <!-- single checkmark -->
    `,
    5: `
    <!-- single checkmark -->
    <tr>
        <td align="left" valign="top" width="32" style="width: 32px;">
            <img src="[checkmarkUrl]" alt="" width="20" height="20" style="display: block; border: 0; width: 20px;">
        </td>
        <td class="sans font-14" align="left" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textCheckmark5]
        </td>
    </tr>
    <tr>
        <td colspan="2" height="[checkmarkHeight]" style="font-size: 1px; line-height: 1px; height: [checkmarkHeight]px;">&nbsp;</td>
    </tr>
    <!-- single checkmark -->
    `

}

export const CTA_BUTTON = `
<!-- CTA - button -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td align="left">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td style="background-color: [themeColor];">
                        <a class="sans button" href="[linkCta]" target="_blank" style="font-size: 16px; line-height: 16px; color: #ffffff; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700; text-decoration: none; border-radius: 0px; -webkit-border-radius: 0px; background-color: [themeColor]; border-top: 16px solid [themeColor]; border-bottom: 16px solid [themeColor]; border-right: 16px solid [themeColor]; border-left: 16px solid [themeColor]; display: inline-block; text-align: center;">
                            [textCta]
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
    </tr>
</table>
<!-- CTA - button -->
`


export const CTA_LINK = `
<!-- CTA - link -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td align="left">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="sans" align="left" style="font-size: 14px; line-height: 20px; color: [themeColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700;">
                        <a href="[linkCta]" target="_blank" style="color: [themeColor]; text-decoration: none;">
                            [textCta]
                        </a>
                    </td>
                    <td align="right" width="12" style="width: 12px;">
                        <a href="[linkCta]" target="_blank">
                            <img src="[linkArrowUrl]" alt="" width="auto" height="12" style="display: block; border: 0; height: 12px;">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
    </tr>
</table>
<!-- CTA - link -->
`

export const SUBTEXT = `
<!-- subtext -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="sans" align="left" style="font-size: 11px; line-height: 16px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textSubtext]
        </td>
    </tr>
    <tr>
        <td height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
    </tr>
</table>
<!-- subtext -->
`