"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {p} from "./newfile"
class formVisibility {
    formFormation() {
        document.getElementById('form-visibility').style.display = "block";
    }
    formDelete() {
        document.getElementById('MakingForm').reset();
        document.getElementById('form-visibility').style.display = "none";
    }
}
exports.formVisibility = formVisibility;
exports.formVisibilityObject = new formVisibility();
