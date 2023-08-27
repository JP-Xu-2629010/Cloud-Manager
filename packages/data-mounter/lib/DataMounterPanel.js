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
exports.DataMounterPanel = void 0;
const react_1 = __importStar(require("react"));
// import { ThemeProvider } from '@material-ui/core/styles';
const styles_1 = require("@mui/material/styles");
const Theme_1 = require("./Theme");
// import { Button } from '@material-ui/core';
const material_1 = require("@mui/material/");
const Homepage_1 = __importDefault(require("./XuPages/Homepage")); // 1
const Mounting_1 = __importDefault(require("./XuPages/Mounting")); // 2 [2]
// 3 [2.1]
// import OpenWeb from './XuPages/OpenWeb'; // 4 [2.2]
const ResultMounting_1 = __importDefault(require("./XuPages/ResultMounting")); // 5 [2.3]
const Transmission_1 = __importDefault(require("./XuPages/Transmission")); // 6
// 7 [3.1]
const Managing_1 = __importDefault(require("./XuPages/Managing")); // 8
const DataMounterPanel = (props) => {
    const [n, setN] = (0, react_1.useState)(0);
    /* const handleNextClick = () => {
        if (n < 99) {
            setN(n + 1);
        }
    }; */
    const handleHomeClick = () => {
        setN(1);
    };
    const handleBackClick = () => {
        if (n > 1) {
            if (n == 8) {
                setN(1);
            }
            else if (n == 6) {
                setN(1);
            }
            else if (n == 2) {
                setN(1);
            }
            else if (n == 5) {
                setN(6);
            }
            else if (n == 3 || n == 4 || n > 8) {
                setN(2);
            }
            else {
                setN(n - 1);
            }
        }
    };
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: Theme_1.theme },
        react_1.default.createElement("div", { className: 'lifewatch-widget' },
            react_1.default.createElement("div", { className: 'lifewatch-widget-content' },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("p", { className: 'lw-panel-header' }, "Cloud Manager")),
                react_1.default.createElement(material_1.Divider, null),
                react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', padding: '8px' } },
                    react_1.default.createElement(material_1.Button, { size: "small", variant: "text", onClick: handleBackClick }, "\u300A Back"),
                    react_1.default.createElement("div", { style: { flex: 1 } }),
                    react_1.default.createElement("div", { style: { position: 'absolute', left: '50%', transform: 'translateX(-50%)' } },
                        react_1.default.createElement(material_1.Button, { size: "small", variant: "text", onClick: handleHomeClick }, "\u300CHome\u300D"))),
                n === 1 && react_1.default.createElement(Homepage_1.default, { setN: setN }),
                " ",
                n === 2 && react_1.default.createElement(Mounting_1.default, { setN: setN }),
                n === 4 && react_1.default.createElement(Mounting_1.default, { setN: setN }),
                n === 5 && react_1.default.createElement(ResultMounting_1.default, { num: n }),
                n === 6 && react_1.default.createElement(Transmission_1.default, { setN: setN }),
                n === 8 && react_1.default.createElement(Managing_1.default, null),
                n >= 10 && react_1.default.createElement(ResultMounting_1.default, { num: n - 10 })))));
};
exports.DataMounterPanel = DataMounterPanel;
