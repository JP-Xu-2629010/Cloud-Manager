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
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const Dropdown = ({ options, show, className, selectedIndex, setSelectedIndex }) => {
    const [selectedOption, setSelectedOption] = (0, react_1.useState)(options[selectedIndex]);
    if (!show) {
        return null;
    }
    return (react_1.default.createElement("div", { style: { margin: '10px', padding: '10px', lineHeight: '1' } },
        react_1.default.createElement(core_1.Select, { className: className, value: selectedOption, onChange: (event) => {
                setSelectedOption(event.target.value);
                setSelectedIndex(options.indexOf(event.target.value));
            } }, options.map((option, index) => (react_1.default.createElement(core_1.MenuItem, { key: index, value: option }, option))))));
};
exports.default = Dropdown;
