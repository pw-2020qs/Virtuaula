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
exports.saveFile = exports.loadFile = exports.model = void 0;
var fs = __importStar(require("fs"));
var config_1 = require("../config");
// in-memory model
exports.model = [];
/**
 * Load data model from disk
 */
function loadFile() {
    try {
        console.log("Loading model from the file system...");
        exports.model = JSON.parse(fs.readFileSync(config_1.config["users"]).toString());
        console.log("Model loaded");
    }
    catch (error) {
        console.error("Failed to load data model from filesystem");
        console.error(error.stack);
    }
}
exports.loadFile = loadFile;
/**
 * Save data model to disk
 */
function saveFile() {
    try {
        console.log("Saving model to the file system...");
        fs.writeFileSync(config_1.config["users"], JSON.stringify(exports.model));
        console.log("Finished saving data");
    }
    catch (error) {
        console.error("Failed to save data model to filesystem");
        console.error(error.stack);
    }
}
exports.saveFile = saveFile;
