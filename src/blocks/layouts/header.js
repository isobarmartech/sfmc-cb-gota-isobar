export const LAYOUT = `
<!-- HEADER START -->
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
    <tr>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td colspan="3" height="30" style="font-size: 1px; line-height: 1px; height: 30px;">&nbsp;</td>
                </tr>
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td class="sans" align="center" style="font-size: 11px; line-height: 16px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
                        Ser mailet konstigt ut? <a href="#" style="color: [themeColor]; text-decoration: none;">Klicka här</a> för att öppna webbversion.
                    </td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" height="15" style="font-size: 1px; line-height: 1px; height: 15px;">&nbsp;</td>
                </tr>
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td height="1" style="font-size: 1px; line-height: 1px; height: 1px;" bgcolor="#E3E3DE">&nbsp;</td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                </tr>
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td align="center">
                        <a href="[linkLogo]" target="_blank">
                            <img src="[imgLogo]" alt="" width="auto" height="40" style="display: block; border: 0; height: 40px;" class="h-35">
                        </a>
                    </td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                </tr>
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td height="1" style="font-size: 1px; line-height: 1px; height: 1px;" bgcolor="#E3E3DE">&nbsp;</td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- HEADER END -->
[gifHtml]
`;

export const GIFBANNER = `
<!-- GIF BANNER START -->
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
    <tr>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td>
                        <a href="[linkBanner]" target="_blank">
                            <img src="[bannerDesktop]" alt="" width="600" height="auto" style="display: block; border: 0; width: 600px;" class="hide">
                        </a>
                        <!--[if !mso]><!-->
                        <div class="show" style="display: none; visibility: hidden; overflow: hidden; max-height: 0;">
                            <a href="[linkBanner]" target="_blank">
                                <img src="[bannerMobile]" alt="" style="display: block; border: 0; width: 100%;">
                            </a>
                        </div>
                        <!--<![endif]-->
                    </td>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- GIF BANNER END -->
`;
