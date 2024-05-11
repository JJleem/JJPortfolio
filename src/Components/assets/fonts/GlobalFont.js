import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import InterBlack from "./Inter-Black.woff";
import InterBold from "./Inter-Bold.woff";
import Inter from "./Inter-Medium.woff";
import InterThin from "./Inter-Thin.woff";
import NotoLight from "./NotoSansKR-Light.woff";
import NotoMedium from "./NotoSansKR-Medium.woff";
import NotoBold from "./NotoSansKR-Bold.woff";
const GlobalFont = createGlobalStyle` 
${reset} 
     @font-face {
        font-family: "InterBlack";
        src: local("InterBlack"), url(${InterBlack}) format('woff'); 
        font-weight: normal;
    }
    @font-face {
        font-family: "InterBold";
        src: local("InterBold"), url(${InterBold}) format('woff');
        font-weight: normal;
    }

    @font-face {
        font-family: "Inter";
        src: local("Inter"), url(${Inter}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "InterThin";
        src: local("InterThin"), url(${InterThin}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "NotoLight";
        src: local("NotoLight"), url(${NotoLight}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "NotoMedium";
        src: local("NotoMedium"), url(${NotoMedium}) format('woff');
        font-weight: normal;
    }
    @font-face {
        font-family: "NotoBold";
        src: local("NotoBold"), url(${NotoBold}) format('woff');
        font-weight: normal;
    }

`;
export default GlobalFont;
