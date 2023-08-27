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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transmission = void 0;
const react_1 = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const Theme_1 = require("../Theme");
const material_1 = require("@mui/material/");
const choices = [
    'j3_OD',
    'j3_open',
    'j3_p',
    'j_MEGA',
    'jin3_GD',
    'testOD',
];
const Transmission = ({ setN }) => {
    const [selectedChoice1, setSelectedChoice1] = (0, react_1.useState)('');
    const [selectedChoice2, setSelectedChoice2] = (0, react_1.useState)('');
    const [deleteOriginal, setDeleteOriginal] = (0, react_1.useState)(false);
    const handleChoice1Change = (event) => {
        const selectedValue = event.target.value;
        setSelectedChoice1(selectedValue);
    };
    const handleChoice2Change = (event) => {
        const selectedValue = event.target.value;
        setSelectedChoice2(selectedValue);
    };
    const handleDeleteOriginalChange = () => {
        setDeleteOriginal(!deleteOriginal);
    };
    const handleConfirmClick = () => {
        setN(5);
    };
    const choiceList2 = choices.filter(choice => choice !== selectedChoice1);
    const choiceList1 = choices.filter(choice => choice !== selectedChoice2);
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: Theme_1.theme },
        react_1.default.createElement("div", { className: 'selection-page' },
            react_1.default.createElement("h2", null, "Please select target and set path"),
            react_1.default.createElement(material_1.Divider, null),
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'baseline' } },
                react_1.default.createElement(material_1.FormControl, { variant: 'standard', sx: { m: 1, minWidth: 120 } },
                    react_1.default.createElement(material_1.InputLabel, null, "From:"),
                    react_1.default.createElement(material_1.Select, { value: selectedChoice1, onChange: handleChoice1Change }, choiceList1.map((choice) => (react_1.default.createElement(material_1.MenuItem, { key: choice, value: choice }, choice))))),
                react_1.default.createElement(material_1.TextField, { size: 'small', id: "path_1", label: "Path 1", variant: "outlined" })),
            react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'baseline' } },
                react_1.default.createElement(material_1.FormControl, { variant: 'standard', sx: { m: 1, minWidth: 120 } },
                    react_1.default.createElement(material_1.InputLabel, null, "To:"),
                    react_1.default.createElement(material_1.Select, { value: selectedChoice2, onChange: handleChoice2Change }, choiceList2.map((choice) => (react_1.default.createElement(material_1.MenuItem, { key: choice, value: choice }, choice))))),
                react_1.default.createElement(material_1.TextField, { size: 'small', id: "path_2", label: "Path 2", variant: "outlined" })),
            react_1.default.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
                react_1.default.createElement(material_1.Switch, { checked: deleteOriginal, onChange: handleDeleteOriginalChange, color: deleteOriginal ? 'warning' : 'primary' }),
                react_1.default.createElement("span", null, "Delete Original File"),
                react_1.default.createElement(material_1.Button, { size: "small", variant: "contained", onClick: handleConfirmClick, disabled: !selectedChoice1 || !selectedChoice2, style: { backgroundColor: deleteOriginal ? Theme_1.theme.palette.warning.main : '' } }, "Confirm")))));
};
exports.Transmission = Transmission;
exports.default = exports.Transmission;
