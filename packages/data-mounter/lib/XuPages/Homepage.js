"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@mui/material/styles");
const Theme_1 = require("../Theme");
// import { Button } from '@material-ui/core';
const material_1 = require("@mui/material/");
const middleLineStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center vertically
    // height: '100px',                // Adjust the height of the container
};
const buttonStyle = {
    width: '200px',
    height: '60px',
    fontSize: '16px',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center vertically
};
const Homepage = ({ setN }) => {
    const handleMountingClick = () => {
        setN(2);
    };
    const handleDataTransmissionClick = () => {
        setN(6);
    };
    const handleManagingClick = () => {
        setN(8);
    };
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: Theme_1.theme },
        react_1.default.createElement("div", null,
            react_1.default.createElement("h2", null, "Please select function"),
            react_1.default.createElement("br", null),
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", { style: middleLineStyle },
                react_1.default.createElement(material_1.Button, { variant: 'outlined', style: buttonStyle, onClick: handleMountingClick }, "Create New Remote")),
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", { style: middleLineStyle },
                react_1.default.createElement(material_1.Button, { variant: 'outlined', style: buttonStyle, onClick: handleDataTransmissionClick }, "Data Transmission")),
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", { style: middleLineStyle },
                react_1.default.createElement(material_1.Button, { variant: 'outlined', style: buttonStyle, onClick: handleManagingClick }, "Remote Management")))));
};
exports.default = Homepage;
