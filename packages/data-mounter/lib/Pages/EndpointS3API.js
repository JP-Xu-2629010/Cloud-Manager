"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
function EndpointS3APIField() {
    return (react_1.default.createElement("div", { style: { margin: '10px', padding: '10px', lineHeight: '1' } },
        react_1.default.createElement(TextField_1.default, { id: "outlined-helperText", label: "Endpoint for S3 API", defaultValue: "Default", helperText: "Leave blank if using AWS to use the default endpoint for the region." })));
}
exports.default = EndpointS3APIField;
