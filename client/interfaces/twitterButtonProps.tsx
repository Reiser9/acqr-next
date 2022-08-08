export default interface TwitterButtonProps {
    HideShowDropDown : (params: any) => any;
    setTwitterUserName : (params: any) => any;
    verifyTwitter  : (params: void) => any;

    twitterVerified: boolean;
    dropDowns: string[];
    failedTwitterVerification: boolean;
    isVerifyingTwitter: boolean;
  }