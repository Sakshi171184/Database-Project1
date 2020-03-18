"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newfile_1 = require("./newfile");
class cancel {
    DeleteData() {
        let tableRow = ((event.target).parentNode).parentNode;
        for (var i = 1; i < 10; i++) {
            if (i == 8) {
                tableRow.cells[i].innerHTML = `<input  type="button" value="Edit" class="btn btn-primary"  >`;
                tableRow.cells[i].onclick = newfile_1.p.editFunctionallity;
            }
            else if (i == 9) {
                tableRow.cells[i].innerHTML = `<input type="button" value="Delete" class="btn btn-danger">`;
                tableRow.cells[i].onclick = newfile_1.p.deleteData;
            }
            else if (i == 5) {
                let dataOfPhone = newfile_1.p.RecordArray[tableRow.rowIndex - 1][i].toString();
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
            }
            else if (i == 6) {
                tableRow.cells[i].innerHTML = `${newfile_1.role[newfile_1.p.RecordArray[tableRow.rowIndex - 1][i]]}`;
            }
            else
                tableRow.cells[i].innerHTML = `${newfile_1.p.RecordArray[tableRow.rowIndex - 1][i]}`;
        }
    }
}
exports.cancel = cancel;
exports.cancelDataObject = new cancel();
