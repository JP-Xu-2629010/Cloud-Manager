"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
// import { createTheme } from '@material-ui/core';
const styles_1 = require("@mui/material/styles");
const colors_1 = require("@mui/material/colors");
exports.theme = (0, styles_1.createTheme)({
    palette: {
        secondary: {
            main: '#ea5b2d',
            dark: '#b12800',
            light: '#ff8c5a',
        },
        /* primary: {
          main: '#0f4e8a',
          dark: '#00275c',
          light: '#4e79ba',
        }, */
        primary: {
            light: colors_1.blue[300],
            main: colors_1.blue[500],
            dark: colors_1.blue[700],
            // darker: blue[900],
        },
    },
});
