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
            <img src="[imgApp]" alt="" width="70" height="auto" style="display: block; border: 0; width: 70px;" class="w-50">
        </td>
    </tr>
    <tr>
        <td height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
    </tr>
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
    <tr>
        <td height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
    </tr>
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
    <tr>
        <td height="25" style="font-size: 1px; line-height: 1px; height: 25px;">&nbsp;</td>
    </tr>
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
