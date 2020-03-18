"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.type != null && validatableInput.type == 'email') {
        let phoneRGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        isValid = isValid && phoneRGEX.test(validatableInput.value.toString());
    }
    if (validatableInput.type != null && validatableInput.type === 'number') {
        let phoneRGEX = /^\d+$/;
        isValid = isValid && phoneRGEX.test(validatableInput.value.toString());
    }
    if (validatableInput.min != null && validatableInput.type === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null && validatableInput.type === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    // if(validatableInput.type != null && validatableInput.type === 'phonenumber'){
    //   let phoneRGEX1 =/^+\d{2}-\d{10}$/;
    //   let phoneRGEX2 =/^+\d{3}-\d{10}$/;
    //   let ans=phoneRGEX1.test(validatableInput.value.toString())|| phoneRGEX2.test(validatableInput.value.toString())
    //       isValid = isValid && ans;
    // }
    return isValid;
}
exports.validate = validate;
