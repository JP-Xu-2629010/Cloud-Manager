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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("@jupyterlab/application");
const apputils_1 = require("@jupyterlab/apputils");
const React = __importStar(require("react"));
const DataMounterPanel_1 = require("./DataMounterPanel");
const id = 'lifewatch:data-mounter';
exports.default = {
    activate,
    id,
    autoStart: true,
    requires: [application_1.ILabShell, application_1.ILayoutRestorer]
};
function activate(lab, labShell, restorer) {
    return __awaiter(this, void 0, void 0, function* () {
        let widget;
        lab.started.then(() => {
            widget = apputils_1.ReactWidget.create(React.createElement(DataMounterPanel_1.DataMounterPanel, null));
            widget.id = 'lifewatch/data-mounter';
            widget.title.iconClass = 'data-mounter-icon';
            widget.title.caption = 'Data Mounter';
            restorer.add(widget, widget.id);
        });
        lab.restored.then(() => {
            if (!widget.isAttached) {
                labShell.add(widget, 'left');
            }
        });
        return { widget };
    });
}
