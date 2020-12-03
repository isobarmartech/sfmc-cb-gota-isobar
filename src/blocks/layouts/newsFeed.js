export const LAYOUT = `
<!-- %%[
VAR @rows, @row, @count, @ad, @mod, @link, @img, @title, @description, @random, @subject
SET @rows = LookupRows('[newsFeed]', 'Dummy', 1)
SET @count = RowCount(@rows)
SET @random = random(100000, 999999)
/* where to show the ad */
SET @ad = divide(@count, 2)
IF mod(@ad, 1) > 0 THEN
SET @ad = FormatNumber(Subtract(@ad, 1), 0)
ENDIF
IF @count > 0 THEN
FOR @I = 1 TO @COUNT DO
SET @row = Row(@rows, @I)
SET @link = Field(@row, 'Link')
SET @title = Field(@row, 'Title')
SET @description = Field(@row, 'Description')
SET @img = Field(@row, 'Img')
IF @I == 1 THEN
SET @subject = @title
]%% -->

%%[ if 0 == 1 then ]%%
<!-- temp. editor workaround -->
<style>
    .stylingblock-content-wrapper.camarker-inner{
        font-size: 0px;
    }
    .stylingblock-content-wrapper.camarker-inner>table {
        font-size: initial;
    }
</style>
<table  border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
  <tr>
  <td height="30" style="font-size: 1px; line-height: 1px; height: 30px;">&nbsp;</td>
  </tr>
  <tr>
  <td>
  <table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;" bgcolor="[themeColor]">
  <tr>
    <td align="center">
      <table border="0" cellspacing="0" cellpadding="0" width="600" style="width: 600px;" class="w-full">
        <tr>
          <td colspan="3" height="40" style="font-size: 1px; line-height: 1px; height: 40px;">&nbsp;</td>
        </tr>
        <tr>
          <td class="sans font-14" align="center" style="font-size: 16px; line-height: 21px; color: #FFFFFF; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            News Feed Placeholder for:
          </td>
        </tr>
        <tr>
          <td height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
        </tr>
        <tr>
          <td class="serif font-20" align="center" style="font-size: 24px; line-height: 30px; color: #FFFFFF; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
            [newsFeed]
          </td>
        </tr>
        <tr>
          <td height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
        </tr>
        <tr>
          <td class="sans font-14" align="center" style="font-size: 16px; line-height: 21px; color: #FFFFFF; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
            The news feed will dynamically render here.
            <br>
            Go to the <b>Preview and Test</b> tab to see the final result.
          </td>
        </tr>
        <tr>
          <td colspan="3" height="40" style="font-size: 1px; line-height: 1px; height: 40px;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
  </td>
  </tr>
  <tr>
  <td height="30" style="font-size: 1px; line-height: 1px; height: 30px;">&nbsp;</td>
  </tr>
</table>
%%[ endif ]%%

%%[ /* <!-- */ ]%%
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
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td>
                                    <a href="%%=RedirectTo(v(@link))=%%" target="_blank">
                                        <img src="%%=v(@img)=%%" alt="" width="600" height="auto" style="display: block; border: 0; width: 600px;" class="w-full">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="h-20" height="35" style="font-size: 1px; line-height: 1px; height: 35px;">&nbsp;</td>
                            </tr>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
                                <td class="serif font-30" align="left" style="font-size: 40px; line-height: 46px; color: #2E2926; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
                                    <a href="%%=RedirectTo(v(@link))=%%" target="_blank" style="color: #2E2926; text-decoration: none;">
                                        %%=v(@title)=%%
                                    </a>
                                </td>
                                <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td colspan="3" height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                            </tr>
                        </table>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td class="hide" width="40" style="font-size: 1px; line-height: 1px; width: 40px;">&nbsp;</td>
                                <td>
                                    <table border="0" cellspacing="0" cellpadding="0" width="100%">
                                        <tr>
                                            <td class="sans" valign="top" width="20" style="font-size: 26px; line-height: 22px; color: [themeColor]; font-family: 'Sanomat', Georgia, serif; font-weight: 700; width: 20px;">
                                                <a href="%%=RedirectTo(v(@link))=%%" target="_blank" style="color: [themeColor]; text-decoration: none;">
                                                    &bull;
                                                </a>
                                            </td>
                                            <td class="sans font-14" align="left" valign="top" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
                                                <a href="%%=RedirectTo(v(@link))=%%" target="_blank" style="color: #2E2926; text-decoration: none;">
                                                    %%=v(@description)=%%
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
%%[ /* --> */ ]%%
<!-- %%[ELSE ]%% -->
%%[ /* <!-- */ ]%%
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
                                    <table border="0" cellspacing="0" cellpadding="0" width="100%" dir="rtl">
                                        <tr>
                                            <td class="w-30p" valign="top" width="170" style="width: 170px;">
                                                <a href="%%=RedirectTo(@link)=%%" target="_blank">
                                                    <img src="%%=v(@img)=%%" alt="" width="170" height="auto" style="display: block; border: 0; width: 170px;" class="w-full">
                                                </a>
                                            </td>
                                            <td class="w-10" width="25" style="font-size: 1px; line-height: 1px; width: 25px;">&nbsp;</td>
                                            <td valign="top">
                                                <table border="0" cellspacing="0" cellpadding="0" width="100%" dir="ltr">
                                                    <tr>
                                                        <td>
                                                            <table border="0" cellspacing="0" cellpadding="0" width="100%">
                                                                <tr>
                                                                    <td class="serif font-14" align="left" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat', Georgia, serif; font-weight: 700;">
                                                                        <a href="%%=RedirectTo(@link)=%%" target="_blank" style="color: #2E2926; text-decoration: none;">
                                                                            %%=v(@title)=%%
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td height="5" style="font-size: 1px; line-height: 1px; height: 5px;">&nbsp;</td>
                                                                </tr>
                                                            </table>
                                                            <table border="0" cellspacing="0" cellpadding="0" width="100%">
                                                                <tr>
                                                                    <td class="sans font-12" align="left" valign="top" style="font-size: 16px; line-height: 21px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
                                                                        <a href="%%=RedirectTo(@link)=%%" target="_blank" style="color: #2E2926; text-decoration: none;">
                                                                            %%=v(@description)=%%
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
%%[ /* --> */ ]%%
<!-- %%[
ENDIF
IF @I == @ad THEN
]%% -->
%%[ /* <!-- */ ]%%
<table border="0" cellspacing="0" cellpadding="0" width="100%" style="width: 100%;">
    <tr>
        <td align="center">
            <table border="0" cellspacing="0" cellpadding="0" width="620" style="width: 620px;" class="w-full">
                <tr>
                    <td class="w-20" width="10" style="font-size: 1px; line-height: 1px; width: 10px;">&nbsp;</td>
                    <td>
                        <table border="0" cellspacing="0" cellpadding="0" width="100%">
                            <tr>
                                <td height="1" style="font-size: 1px; line-height: 1px; height: 1px;" bgcolor="#E3E3DE">&nbsp;</td>
                            </tr>
                            <tr>
                                <td height="20" style="font-size: 1px; line-height: 1px; height: 20px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td class="sans font-12" align="center" style="font-size: 14px; line-height: 19px; color: #2E2926; font-family: 'Sanomat Sans', Arial, sans-serif; font-weight: 300;">
                                    [adText]
                                </td>
                            </tr>
                            <tr>
                                <td height="10" style="font-size: 1px; line-height: 1px; height: 10px;">&nbsp;</td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <a href="%%=RedirectTo(Concat('[adUrlLink]', @random))=%%" target="_blank" style="display: inline-block;">
                                        <img src="%%=RedirectTo(Concat('[adUrlImg]', @random))=%%" alt="" width="320" height="auto" style="display: block; border: 0; width: 320px;" class="w-280">
                                    </a>
                                </td>
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
%%[ /* --> */ ]%%
<!-- %%[
ENDIF
NEXT @i
ENDIF
ENDIF
]%% -->
`;