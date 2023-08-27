"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const x_data_grid_1 = require("@mui/x-data-grid");
const rows = [
    { id: 1, col1: 'Test', col2: 'S3' },
    { id: 2, col1: 'Test2', col2: 'S3' },
    { id: 3, col1: 'Test3', col2: 'S3' }
];
const columns = [
    { field: 'col1', headerName: 'Name', width: 150 },
    { field: 'col2', headerName: 'Type', width: 150 }
];
function CurrentRemotes({ remotes }) {
    return (react_1.default.createElement("div", { style: { height: 300, width: '100%' } },
        react_1.default.createElement(x_data_grid_1.DataGrid, { rows: rows, columns: columns })));
}
exports.default = CurrentRemotes;
