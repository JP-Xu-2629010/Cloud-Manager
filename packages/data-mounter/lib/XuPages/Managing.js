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
exports.AccordionPage = void 0;
const react_1 = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const Theme_1 = require("../Theme");
const material_1 = require("@mui/material/");
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const OD_png_1 = __importDefault(require("./OD.png"));
const GD_png_1 = __importDefault(require("./GD.png"));
const OPEN_png_1 = __importDefault(require("./OPEN.png"));
const providers = [
    { name: 'j3_OD', type: 'One Drive', image: OD_png_1.default },
    { name: 'jin3_GD', type: 'Google Drive', image: GD_png_1.default },
    { name: 'j3_open', type: 'Open Drive', image: OPEN_png_1.default },
    { name: 'j3_p', type: 'pCloud', image: 'url_to_image3' },
    { name: 'j_MEGA', type: 'MEGA', image: 'url_to_image4' },
    { name: 'testOD', type: 'One Drive', image: OD_png_1.default },
];
const ProviderAccordion = ({ name, type, image, onRemove }) => {
    const [checked, setChecked] = (0, react_1.useState)(false);
    const [mount, setMount] = (0, react_1.useState)(false);
    const handleCheckConnection = () => {
        setChecked(true);
    };
    const handleMount = () => {
        setMount(true);
    };
    const handleRemoveRemote = () => {
        onRemove(name);
    };
    return (react_1.default.createElement(material_1.Accordion, { sx: { boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '10px' } },
        react_1.default.createElement(material_1.AccordionSummary, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) }, name),
        react_1.default.createElement(material_1.AccordionDetails, { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
            react_1.default.createElement("h4", null, type),
            react_1.default.createElement("img", { src: image, alt: "Provider", style: { width: '100%' } }),
            checked && react_1.default.createElement(material_1.Alert, { severity: "success" }, "Remote checked"),
            mount && react_1.default.createElement(material_1.Alert, { severity: "info" }, "Path: /tempMount/onedrive"),
            react_1.default.createElement("div", { style: { display: 'flex', gap: '10px', marginTop: '10px' } },
                react_1.default.createElement(material_1.Button, { variant: "outlined", onClick: handleCheckConnection }, "Check connection"),
                react_1.default.createElement(material_1.Button, { variant: "outlined", onClick: handleMount }, "Mount to local"),
                react_1.default.createElement(material_1.Button, { variant: "outlined", onClick: handleRemoveRemote }, "Remove remote")))));
};
const AccordionPage = () => {
    const [removedProvider, setRemovedProvider] = (0, react_1.useState)(null);
    const handleProviderRemove = (name) => {
        setRemovedProvider(name);
    };
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: Theme_1.theme },
        react_1.default.createElement("div", { className: 'accordion-page' },
            removedProvider && (react_1.default.createElement(material_1.Alert, { severity: "warning", style: { marginBottom: '10px' } }, `${removedProvider} removed`)),
            providers.map((provider, index) => (!removedProvider || removedProvider !== provider.name ? (react_1.default.createElement(ProviderAccordion, { key: index, name: provider.name, type: provider.type, image: provider.image, onRemove: handleProviderRemove })) : null)))));
};
exports.AccordionPage = AccordionPage;
exports.default = exports.AccordionPage;
