export default interface DiscordButtonProps {
    HideShowDropDown : (params: any) => any;

    verifyDiscord  : (params: void) => any;


    discordVerified : boolean;
    dropDowns: string[];


  }