export const LAYOUT = `
<!-- FOOTER START -->
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
    <tr>
        <td height="1" style="font-size: 1px; line-height: 1px; height: 1px;" bgcolor="#D8D8D8">&nbsp;</td>
    </tr>
    <tr>
        <td align="center" bgcolor="#F4F2F0">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td height="25" style="font-size: 1px; line-height: 1px; height: 25px;">&nbsp;</td>
                            </tr>
                        </table>
                        [appIconsHtml]
                        [menuHtml]
                        [legalHtml]
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td height="25" style="font-size: 1px; line-height: 1px; height: 25px;">&nbsp;</td>
                            </tr>
                        </table>
                    </td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center" bgcolor="#000000">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                </tr>
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td align="center">
                        <a href="[linkLogo]" target="_blank">
                            <img src="[imgLogo]" alt="" width="auto" height="25" style="display: block; border: 0; height: 25px;">
                        </a>
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
<!-- FOOTER END -->
`;

export const APP_ICONS = `
<!-- app icons -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td>
                        <a href="[linkFacebook]" target="_blank">
                            <img src="https://image.s50.sfmc-content.com/lib/fe4011717564047c761673/m/1/95069442-0976-4867-aff8-c57fe9229ff1.png" alt="" width="40" height="40" style="display: block; border: 0; width: 40px;">
                        </a>
                    </td>
                    <td width="30" style="font-size: 1px; line-height: 1px; width: 30px;">&nbsp;</td>
                    <td>
                        <a href="[linkTwitter]" target="_blank">
                            <img src="https://image.s50.sfmc-content.com/lib/fe4011717564047c761673/m/1/b38feafa-6c3d-4a6e-a4d0-f3d588592845.png" alt="" width="40" height="40" style="display: block; border: 0; width: 40px;">
                        </a>
                    </td>
                    <td width="30" style="font-size: 1px; line-height: 1px; width: 30px;">&nbsp;</td>
                    <td>
                        <a href="[linkInstagram]" target="_blank">
                            <img src="https://image.s50.sfmc-content.com/lib/fe4011717564047c761673/m/1/0ec5ea9b-2fb4-40e9-8e64-6cdab62ca3c3.png" alt="" width="40" height="40" style="display: block; border: 0; width: 40px;">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td height="25" style="font-size: 1px; line-height: 1px; height: 25px;">&nbsp;</td>
    </tr>
</table>
<!-- app icons -->
`;

export const MENU = `
<!-- menu -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td>
        [menuItemHtml]
        </td>
    </tr>
    <tr>
        <td height="1" style="font-size: 1px; line-height: 1px; height: 1px;" bgcolor="#B2B2B0">&nbsp;</td>
    </tr>
    <tr>
        <td height="35" style="font-size: 1px; line-height: 1px; height: 35px;">&nbsp;</td>
    </tr>
</table>
<!-- menu -->
`;

export const MENU_ITEM = `
<!-- menu item -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td colspan="3" height="1" style="font-size: 1px; line-height: 1px; height: 1px;" bgcolor="#B2B2B0">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
    </tr>
    <tr>
        <td width="20" style="font-size: 1px; line-height: 1px; width: 20px;">&nbsp;</td>
        <td>
            <table border="0" cellspacing="0" cellpadding="0" width="100%">
                <tr>
                    <td class="sans font-14" align="left" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700;">
                        <a href="[linkMenuItem]" target="_blank" style="color: #2E2926; text-decoration: none;">
                            [textMenuItem]
                        </a>
                    </td>
                    <td align="right" width="12" style="width: 12px;">
                        <a href="[linkMenuItem]" target="_blank">
                            <img src="[linkArrowUrl]" alt="" width="auto" height="15" style="display: block; border: 0; height: 15px;">
                        </a>
                    </td>
                </tr>
            </table>
        </td>
        <td width="20" style="font-size: 1px; line-height: 1px; width: 20px;">&nbsp;</td>
    </tr>
    <tr>
        <td colspan="3" height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
    </tr>
</table>
<!-- menu item -->
`;

export const COPYRIGHT = `
<!-- copyright -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="100" style="font-size: 1px; line-height: 1px; width: 100px;">&nbsp;</td>
        <td class="sans" align="center" style="font-size: 11px; line-height: 16px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 700;">
            &copy; [brandName]
        </td>
        <td class="w-20" width="100" style="font-size: 1px; line-height: 1px; width: 100px;">&nbsp;</td>
    </tr>
</table>
<!-- copyright -->
`;

export const LEGAL = `
[copyrightHtml]
<!-- legal -->
<table border="0" cellspacing="0" cellpadding="0" width="100%">
    <tr>
        <td class="w-20" width="100" style="font-size: 1px; line-height: 1px; width: 100px;">&nbsp;</td>
        <td class="sans" align="center" style="font-size: 11px; line-height: 16px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            [textLegal]
        </td>
        <td class="w-20" width="100" style="font-size: 1px; line-height: 1px; width: 100px;">&nbsp;</td>
    </tr>
</table>
<!-- legal -->
`;