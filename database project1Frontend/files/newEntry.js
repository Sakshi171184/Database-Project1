"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newfile_1 = require("./newfile");
const validation_1 = require("./validation");
const bussinessLogic_1 = require("./bussinessLogic");
class newEntry {
    insertingRow(data) {
        const user_SelectionofInputElements = document.querySelectorAll('.formClass');
        let newArrayOfInputElements = Array.from(user_SelectionofInputElements).map((ew) => ew.value);
        let allTrue = true;
        let popup = document.getElementById("myPopup1");
        popup.style.display = "none";
        if (!validation_1.validate({ value: newArrayOfInputElements[0], required: true })) {
            popup.style.display = "block";
            allTrue = false;
        }
        popup = document.getElementById("myPopup2");
        popup.style.display = "none";
        if (!validation_1.validate({ value: newArrayOfInputElements[1], required: true })) {
            popup.style.display = "block";
            allTrue = false;
        }
        popup = document.getElementById("myPopup3");
        popup.style.display = "none";
        if (!validation_1.validate({ value: newArrayOfInputElements[2], required: true })) {
            popup.style.display = "block";
            allTrue = false;
        }
        popup = document.getElementById("myPopup4");
        popup.style.display = "none";
        if (!validation_1.validate({ value: newArrayOfInputElements[3], required: true, type: 'email' })) {
            popup.style.display = "block";
            allTrue = false;
        }
        popup = document.getElementById("myPopup5");
        popup.style.display = "none";
        if (!validation_1.validate({ value: newArrayOfInputElements[4], type: 'number', required: true, min: 1000000000, max: 9999999999 })) {
            popup.style.display = "block";
            allTrue = false;
        }
        popup = document.getElementById("myPopup6");
        popup.style.display = "none";
        if (!validation_1.validate({ value: newArrayOfInputElements[6], required: true })) {
            popup.style.display = "block";
            allTrue = false;
        }
        if (allTrue == true) {
            let country = document.getElementById("country").value;
            //console.log(country);
            let newObject = new newfile_1.EmployeeType(newArrayOfInputElements[0], newArrayOfInputElements[1], newArrayOfInputElements[2], newArrayOfInputElements[3], +(country + newArrayOfInputElements[4]), newArrayOfInputElements[5], newArrayOfInputElements[6]);
            newfile_1.p.formDisable();
            bussinessLogic_1.bussinessObject.newEntry(newObject).then(idOfObject => {
                newObject.id = idOfObject;
                console.log(newObject.id);
                data.rowformation(newObject);
                newArrayOfInputElements[4] = +(country + newArrayOfInputElements[4]);
                newArrayOfInputElements.unshift(newObject.id);
                newfile_1.p.RecordArray.push(newArrayOfInputElements);
            });
        }
    }
}
exports.newEntry = newEntry;
exports.newEntryObject = new newEntry();
