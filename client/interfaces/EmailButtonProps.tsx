export default interface EmailButtonProps {
    HideShowDropDown : (params: any) => any;
    setEmail : (params: any) => any;
    verifyEmail  : (params: void) => any;
    setFailedEmailVerification: (params: any) => any;

    emailVerified: boolean;
    dropDowns: string[];
    failedEmailVerification: boolean;
  }