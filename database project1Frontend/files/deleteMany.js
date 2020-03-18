"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newfile_1 = require("./newfile");
const bussinessLogic_1 = require("./bussinessLogic");
class deleteMany {
    deleteMany() {
        const userSelectionOfInputElements = document.querySelectorAll('.checkBoxFunction');
        let newArrayOfChecks = Array.from(userSelectionOfInputElements).map((ew) => ew.checked);
        let checkBoxes = Array.from(userSelectionOfInputElements);
        let ifAnyChecked = false;
        for (let i = 0; i < newArrayOfChecks.length; i++) {
            if (newArrayOfChecks[i] == true) {
                ifAnyChecked = true;
                let rowToDelete = checkBoxes[i].parentNode.parentNode;
                bussinessLogic_1.bussinessObject.deleteData(rowToDelete.id).then(() => {
                    newfile_1.p.RecordArray.splice(rowToDelete.rowIndex - 1, 1);
                    rowToDelete.parentNode.removeChild(rowToDelete);
                });
            }
        }
        if (ifAnyChecked == false) {
            alert("No row is selected");
        }
    }
}
exports.deleteMany = deleteMany;
exports.deleteManyObject = new deleteMany();
