"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newfile_1 = require("./newfile");
const validation_1 = require("./validation");
const bussinessLogic_1 = require("./bussinessLogic");
class Save {
    SaveData() {
        let Data = [];
        let tableRow = ((event.target).parentNode).parentNode;
        let allTrue = true;
        for (let i = 1; i < 8; i++) {
            let inputElement = ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[0]).value;
            if (i == 6)
                continue;
            else if (i == 4) {
                ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[1]).style.display = "none";
                if (!validation_1.validate({ value: inputElement, required: true, type: 'email' })) {
                    allTrue = false;
                    ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[1]).style.display = "block";
                }
            }
            else if (i == 5) {
                ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[1]).style.display = "none";
                if (!validation_1.validate({ value: inputElement, required: true, type: 'number', min: 100000000000, max: 9999999999999 })) {
                    allTrue = false;
                    ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[1]).style.display = "block";
                }
            }
            else {
                ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[1]).style.display = "none";
                if (!validation_1.validate({ value: inputElement, required: true })) {
                    allTrue = false;
                    ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[1]).style.display = "block";
                }
            }
        }
        if (allTrue == true) {
            Data.push(tableRow.rowIndex - 1);
            for (let i = 1; i < 10; i++) {
                if (i == 8) {
                    tableRow.cells[i].innerHTML = `<input  type="button" value="Edit" class="btn btn-primary">`;
                    tableRow.cells[i].onclick = newfile_1.p.editFunctionallity;
                }
                else if (i == 9) {
                    tableRow.cells[i].innerHTML = `<input type="button" value="Delete"   class="btn btn-danger">`;
                    tableRow.cells[i].onclick = newfile_1.p.deleteData;
                }
                else if (i == 6) {
                    let inputElement = ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[0]).value;
                    tableRow.cells[i].innerHTML = newfile_1.role[+inputElement];
                    Data.push(+inputElement);
                }
                else if (i == 5) {
                    let inputElement = ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[0]).value;
                    let dataOfPhone = inputElement.toString();
                    let lastTen;
                    let initialOfNumber;
                    if (dataOfPhone.length == 12) {
                        lastTen = dataOfPhone.substring(2, dataOfPhone.length);
                        initialOfNumber = dataOfPhone.substring(0, 2);
                    }
                    else {
                        lastTen = dataOfPhone.substring(3, dataOfPhone.length);
                        initialOfNumber = dataOfPhone.substring(0, 3);
                    }
                    tableRow.cells[i].innerHTML = "+" + initialOfNumber + "-" + lastTen;
                    Data.push(inputElement);
                }
                else {
                    let inputElement = ((document.getElementById('New-Table')).rows[tableRow.rowIndex].cells[i].childNodes[0]).value;
                    tableRow.cells[i].innerHTML = inputElement;
                    Data.push(inputElement);
                }
            }
            let newObject = new newfile_1.EmployeeType(Data[1], Data[2], Data[3], Data[4], Data[5], Data[6], Data[7]);
            bussinessLogic_1.bussinessObject.saveData(tableRow.id, newObject).then(() => newfile_1.p.RecordArray.splice(tableRow.rowIndex - 1, 1, Data));
        }
    }
}
exports.Save = Save;
exports.saveDataObject = new Save();
