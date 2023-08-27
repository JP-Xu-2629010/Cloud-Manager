"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenWeb = void 0;
const react_1 = __importDefault(require("react"));
const styles_1 = require("@mui/material/styles");
const Theme_1 = require("../Theme");
// import { Button } from '@material-ui/core';
const material_1 = require("@mui/material/");
const Alert_1 = __importDefault(require("@mui/material/Alert"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const middleLineStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center vertically
    // height: '100px',                // Adjust the height of the container
};
/* const buttonStyle = {
    width: '200px', // Adjust the width as needed
    height: '50px', // Adjust the height as needed
    fontSize: '16px', // Adjust the font size as needed
    margin: '5px', // Add margin for spacing between buttons
}; */
const OpenWeb = ({ setN, num }) => {
    const handleOpenLinkClick = () => {
        setN(10 + num);
        const urlOD = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?access_type=offline&client_id=b15665d9-eda6-4092-8539-0eec376afd59&redirect_uri=http%3A%2F%2Flocalhost%3A53682%2F&response_type=code&scope=Files.Read+Files.ReadWrite+Files.Read.All+Files.ReadWrite.All+Sites.Read.All+offline_access&state=fPiwOAGb8zzoxsThO4R2HQ'; // Replace with the desired URL
        const urlGD = 'https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=202264815644.apps.googleusercontent.com&redirect_uri=http%3A%2F%2F127.0.0.1%3A53682%2F&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&state=MtA-wb0PBjxJ47wSFEVAuA&service=lso&o2v=1&flowName=GeneralOAuthFlow';
        if (num == 31) {
            window.open(urlOD, '_blank'); // Opens the URL in a new tab/window
        }
        else if (num == 18) {
            window.open(urlGD, '_blank');
        }
    };
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: Theme_1.theme },
        react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', /* justifyContent: 'center', */ height: '100vh' } },
            react_1.default.createElement("br", null),
            react_1.default.createElement(Stack_1.default, { sx: { width: '100%' }, style: middleLineStyle, spacing: 2 },
                react_1.default.createElement(Alert_1.default, { severity: "success" }, "Automatic authentication supported!")),
            react_1.default.createElement("br", null),
            react_1.default.createElement("p", null, "Use web browser to automatically authenticate rclone with remote"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", null,
                react_1.default.createElement(material_1.TextField, { size: 'small', variant: 'standard', id: "RemoteName", label: "Remote name" })),
            react_1.default.createElement("br", null),
            react_1.default.createElement(material_1.Button, { size: 'large', variant: 'contained', onClick: handleOpenLinkClick }, "Open in Browser"))));
};
exports.OpenWeb = OpenWeb;
exports.default = exports.OpenWeb;
