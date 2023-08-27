"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.CellPreview = void 0;
const React = __importStar(require("react"));
const lodash_1 = require("lodash");
const actions = __importStar(require("@mrblenny/react-flow-chart/src/container/actions"));
const react_flow_chart_1 = require("@mrblenny/react-flow-chart");
const defaultChart = {
    offset: {
        x: 0,
        y: 0,
    },
    scale: 1,
    nodes: {},
    links: {},
    selected: {},
    hovered: {}
};
class CellPreview extends React.Component {
    constructor() {
        super(...arguments);
        this.state = lodash_1.cloneDeep(defaultChart);
        this.updateChart = (chart) => { this.setState(chart); };
    }
    render() {
        const chart = this.state;
        const stateActions = lodash_1.mapValues(actions, (func) => (...args) => this.setState(func(...args)));
        return (React.createElement("div", null,
            React.createElement("div", { className: 'lw-panel-editor' },
                React.createElement(react_flow_chart_1.FlowChart, { chart: chart, callbacks: stateActions, Components: {} }))));
    }
}
exports.CellPreview = CellPreview;
