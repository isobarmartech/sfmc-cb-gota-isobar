export const LAYOUT = `
<!-- NEWS HERO START -->
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
                        [imageHtml]
                        [trumpetHtml]
                        [headlineHtml]
                        [teaserHtml]
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
<!-- NEWS HERO END -->
`;

export const IMAGE = `
<!-- image -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td>
            <a href="[linkArticle]" target="_blank">
                <img src="[image]" alt="" width="600" height="auto" style="display: block; border: 0; width: 600px;" class="w-full">
            </a>
        </td>
    </tr>
    [imageSpacerHtml]
</table>
<!-- image -->
`
export const IMAGE_SPACER = `
<tr>
    <td class="h-20" height="35" style="font-size: 1px; line-height: 1px; height: 35px;">&nbsp;</td>
</tr>
`

export const TRUMPET = `
<!-- trumpet -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
        <td class="sans" align="left" style="font-size: 11px; line-height: 16px; color: [themeColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
            <a href="[linkArticle]" target="_blank" style="color: [themeColor]; text-decoration: none;">
                [textTrumpet]
            </a>
        </td>
        <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
    </tr>
</table>
<!-- trumpet -->
`

export const HEADLINE = `
<!-- headline -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
        <td class="serif [headlineMobileClass]" align="left" style="font-size: [headlineFontsize]; line-height: [headlineLineheight]; color: #2E2926; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
            <a href="[linkArticle]" target="_blank" style="color: #2E2926; text-decoration: none;">
                [textHeadline]
            </a>
        </td>
        <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
    </tr>
</table>
<!-- headline -->
`

export const TEASER = `
<!-- teaser -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
        <td>
            <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                    <td class="sans" valign="top" width="20" style="font-size: 26px; line-height: 22px; color: [themeColor]; font-family: 'Sanomat', Georgia, serif; font-weight: 700; width: 20px;">
                        <a href="[linkArticle]" target="_blank" style="color: [themeColor]; text-decoration: none;">
                            &bull;
                        </a>
                    </td>
                    <td class="sans font-14" align="left" valign="top" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
                        <a href="[linkArticle]" target="_blank" style="color: #2E2926; text-decoration: none;">
                        [textTeaser]
                        </a>
                    </td>
                </tr>
            </table>
        </td>
        <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
    </tr>
</table>
<!-- teaser -->
`
