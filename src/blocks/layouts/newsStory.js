export const LAYOUT = `
<!-- NEWS STORY START -->
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
    <tr>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td colspan="3" height="1" style="font-size: 1px; line-height: 1px; height: 1px;" bgcolor="#E3E3DE">&nbsp;</td>
                            </tr>
                            <tr>
                                <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
                                <td>
                                    <table border="0" cellspacing="0" cellpadding="0" width="100%" dir="[alignImage]">
                                        <tr>
                                            <td class="w-30p" valign="top" width="170" style="width: 170px;">
                                                <a href="[linkArticle]" target="_blank">
                                                    <img src="[image]" alt="" width="170" height="auto" style="display: block; border: 0; width: 170px;" class="w-full">
                                                </a>
                                            </td>
                                            <td class="w-10" width="25" style="font-size: 1px; line-height: 1px; width: 25px;">&nbsp;</td>
                                            <td valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" width="100%" dir="ltr">
                                                    <tr>
                                                        <td>
                                                            [trumpetHtml]
                                                            [headlineHtml]
                                                            [teaserHtml]
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- NEWS STORY END -->
`;

export const TRUMPET = `
<!-- trumpet -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="sans" align="left" style="font-size: 11px; line-height: 16px; color: [themeColor]; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
            <a href="[linkArticle]" target="_blank" style="color: [themeColor]; text-decoration: none;">
            [textTrumpet]
            </a>
        </td>
    </tr>
    <tr>
        <td height="5" style="font-size: 1px; line-height: 1px; height: 5px;">&nbsp;</td>
    </tr>
</table>
<!-- trumpet -->
`

export const HEADLINE = `
<!-- headline -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="serif font-14" align="left" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
            <a href="[linkArticle]" target="_blank" style="color: #2E2926; text-decoration: none;">
            [textHeadline]
            </a>
        </td>
    </tr>
    <tr>
        <td height="5" style="font-size: 1px; line-height: 1px; height: 5px;">&nbsp;</td>
    </tr>
</table>
<!-- headline -->
`

export const TEASER = `
<!-- teaser -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="sans font-12" align="left" valign="top" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            <a href="[linkArticle]" target="_blank" style="color: #2E2926; text-decoration: none;">
            [textTeaser]
            </a>
        </td>
    </tr>
</table>
<!-- teaser -->
`
