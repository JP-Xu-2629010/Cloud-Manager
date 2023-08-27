"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const buttonStyle = {
    width: '200px',
    height: '50px',
    fontSize: '16px',
    margin: '5px', // Add margin for spacing between buttons
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
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Please select function"),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { style: buttonStyle, onClick: handleMountingClick }, "Mounting New Cloud Storage")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { style: buttonStyle, onClick: handleDataTransmissionClick }, "Data Transmission")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { style: buttonStyle, onClick: handleManagingClick }, "Managing Cloud Storage"))));
};
exports.default = Homepage;
