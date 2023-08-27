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
const react_1 = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const Theme_1 = require("../Theme");
const Alert_1 = __importDefault(require("@mui/material/Alert"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const OD_png_1 = __importDefault(require("./OD.png"));
const GD_png_1 = __importDefault(require("./GD.png"));
const OPEN_png_1 = __importDefault(require("./OPEN.png"));
const middleLineStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
const ResultMounting = ({ num }) => {
    const [showInfoAlert, setShowInfoAlert] = (0, react_1.useState)(true);
    const [showSuccessAlert, setShowSuccessAlert] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => {
            setShowInfoAlert(false);
            setShowSuccessAlert(true);
        }, 8000);
        return () => clearTimeout(timer);
    }, []);
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: Theme_1.theme },
        react_1.default.createElement("div", null,
            react_1.default.createElement(Stack_1.default, { sx: { width: '100%' }, style: middleLineStyle, spacing: 2 },
                showInfoAlert && react_1.default.createElement(Alert_1.default, { color: 'warning', severity: "info" }, "Please wait a moment."),
                showSuccessAlert && react_1.default.createElement(Alert_1.default, { severity: "success" }, "Success!")),
            showSuccessAlert && ((num === 31 ? react_1.default.createElement("img", { src: OD_png_1.default, alt: "Data", style: { width: '100%' } })
                : num === 18 ? react_1.default.createElement("img", { src: GD_png_1.default, alt: "Data", style: { width: '100%' } })
                    : num === 32 ? react_1.default.createElement("img", { src: OPEN_png_1.default, alt: "Data", style: { width: '100%' } })
                        : null)))));
};
exports.default = ResultMounting;
