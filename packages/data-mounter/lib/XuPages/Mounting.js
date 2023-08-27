"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mounting = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const styles_1 = require("@mui/material/styles");
const Theme_1 = require("../Theme");
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const OpenWeb_1 = __importDefault(require("./OpenWeb")); // 4 [2.2]
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
const Mounting = ({ setN }) => {
    const [num, setNum] = (0, react_1.useState)(0);
    const [toDisplay, setTo] = (0, react_1.useState)(0); // same as n from HomePage
    const [accessType, setType] = (0, react_1.useState)(0);
    const handleOptionChange = (event) => {
        setNum(event.target.value);
    };
    const handleAccessChange = (event) => {
        setType(event.target.value);
    };
    const handelNextStepClick = () => {
        if (num == 18 || num == 31 || num == 35) {
            // setN(4);
            setTo(4);
        }
        else {
            // setN(3);
            setTo(3);
        }
    };
    const handleOpenLinkClick = () => {
        setN(10 + num);
        // const url = 'https://www.google.com'; // Replace with the desired URL
        // window.open(url, '_blank'); // Opens the URL in a new tab/window
    };
    const providerOptions = [
        "1 / 1Fichier",
        "2 / Akamai NetStorage",
        "3 / Alias for an existing remote",
        "4 / Amazon Drive",
        "5 / Amazon S3 Compliant Storage Providers including AWS, Alibaba, ArvanCloud, Ceph, China Mobile, Cloudflare, GCS, DigitalOcean, Dreamhost, Huawei OBS, IBM COS, IDrive e2, IONOS Cloud, Liara, Lyve Cloud, Minio, Netease, Petabox, RackCorp, Scaleway, SeaweedFS, StackPath, Storj, Tencent COS, Qiniu and Wasabi",
        "6 / Backblaze B2",
        "7 / Better checksums for other remotes",
        "8 / Box",
        "9 / Cache a remote",
        "10 / Citrix Sharefile",
        "11 / Combine several remotes into one",
        "12 / Compress a remote",
        "13 / Dropbox",
        "14 / Encrypt/Decrypt a remote",
        "15 / Enterprise File Fabric",
        "16 / FTP",
        "17 / Google Cloud Storage (this is not Google Drive)",
        "18 / Google Drive",
        "19 / Google Photos",
        "20 / HTTP",
        "21 / Hadoop distributed file system",
        "22 / HiDrive",
        "23 / In memory object storage system.",
        "24 / Internet Archive",
        "25 / Jottacloud",
        "26 / Koofr, Digi Storage and other Koofr-compatible storage providers",
        "27 / Local Disk",
        "28 / Mail.ru Cloud",
        "29 / Mega",
        "30 / Microsoft Azure Blob Storage",
        "31 / Microsoft OneDrive",
        "32 / OpenDrive",
        "33 / OpenStack Swift (Rackspace Cloud Files, Blomp Cloud Storage, Memset Memstore, OVH)",
        "34 / Oracle Cloud Infrastructure Object Storage",
        "35 / Pcloud",
        "36 / PikPak",
        "37 / Put.io",
        "38 / QingCloud Object Storage",
        "39 / SMB / CIFS",
        "40 / SSH/SFTP",
        "41 / Sia Decentralized Cloud",
        "42 / Storj Decentralized Cloud Storage",
        "43 / Sugarsync",
        "44 / Transparently chunk/split large files",
        "45 / Union merges the contents of several upstream fs",
        "46 / Uptobox",
        "47 / WebDAV",
        "48 / Yandex Disk",
        "49 / Zoho",
        "50 / premiumize.me",
        "51 / seafile"
    ];
    const accessOptions = [
        "1 / Full access all files.",
        "2 / Read-only access metadata and contents.",
        "3 / Access to files created by rclone only.",
        "4 / Allows read and write access to the Application Data folder.",
        "5 / Allows read-only access to file metadata but does not allow any access to read or download file content.",
    ];
    /*     const selectLabelStyle = {
            fontSize: '16px', // Adjust the font size as needed
            innerHeight: '60px'
            // You can add more styling properties here
        }; */
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: Theme_1.theme },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, "Please select cloud storage provider"),
            react_1.default.createElement(core_1.Divider, null),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", { style: middleLineStyle },
                react_1.default.createElement(FormControl_1.default, { sx: { m: 1, minWidth: 120 } },
                    react_1.default.createElement(InputLabel_1.default, { id: "demo-simple-select-helper-label" }, "Provider"),
                    react_1.default.createElement(core_1.Select, { value: num, onChange: handleOptionChange, displayEmpty: true },
                        react_1.default.createElement(core_1.MenuItem, { value: 0, disabled: true }, "Select an option"),
                        providerOptions.map((option, index) => (react_1.default.createElement(core_1.MenuItem, { key: index, value: index + 1 }, option))))),
                react_1.default.createElement(FormControl_1.default, { sx: { m: 1, minWidth: 120 } },
                    react_1.default.createElement(InputLabel_1.default, { id: "access-simple-select-helper-label" }, "Access type"),
                    react_1.default.createElement(core_1.Select, { value: accessType, onChange: handleAccessChange, displayEmpty: true },
                        react_1.default.createElement(core_1.MenuItem, { value: 0, disabled: true }, "Select an option"),
                        accessOptions.map((option, index) => (react_1.default.createElement(core_1.MenuItem, { key: index, value: index + 1 }, option))))),
                react_1.default.createElement(core_1.Button, { size: 'small', variant: 'outlined', onClick: handelNextStepClick }, "Confirm")),
            react_1.default.createElement("div", null,
                react_1.default.createElement("br", null),
                react_1.default.createElement(core_1.Divider, null),
                react_1.default.createElement("br", null)),
            toDisplay === 3 &&
                react_1.default.createElement("div", null,
                    react_1.default.createElement("div", { style: middleLineStyle },
                        react_1.default.createElement(Stack_1.default, { sx: { width: '100%' }, style: middleLineStyle, spacing: 2 },
                            react_1.default.createElement(Alert_1.default, { severity: "info", color: 'warning' }, "Account information needed!"))),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("div", { style: middleLineStyle },
                        react_1.default.createElement(core_1.TextField, { size: 'small', variant: 'standard', id: "RemoteName", label: "Remote name" })),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("div", { style: middleLineStyle },
                        react_1.default.createElement("p", null,
                            react_1.default.createElement(core_1.TextField, { size: 'small', id: "userAccount", label: "Username", variant: "outlined" })),
                        react_1.default.createElement("p", null,
                            react_1.default.createElement(core_1.TextField, { size: 'small', id: "password", label: "Password", variant: "outlined" })),
                        react_1.default.createElement(core_1.Button, { size: 'small', variant: 'outlined', onClick: handleOpenLinkClick }, "Connect"))),
            toDisplay === 4 && react_1.default.createElement(OpenWeb_1.default, { setN: setN, num: num }))));
};
exports.Mounting = Mounting;
exports.default = exports.Mounting;
