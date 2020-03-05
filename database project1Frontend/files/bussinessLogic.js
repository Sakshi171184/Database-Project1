"use strict";
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
class bussinessLogic {
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedResponse = yield fetch('http://localhost:3000/CRUD/Fetch'); // This will fetch data from json file
            let dataFetched = yield fetchedResponse.json();
            return dataFetched;
        });
    }
    deleteData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedResponse = yield fetch(`http://localhost:3000/CRUD/Delete/${id}`, {
                method: 'delete'
            });
        });
    }
    newEntry(newElement) {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedResponse = yield fetch(`http://localhost:3000/CRUD/create`, {
                method: 'POST',
                body: JSON.stringify(newElement),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let fetched = yield fetchedResponse.json();
            return fetched;
        });
    }
    saveData(id, newElement) {
        return __awaiter(this, void 0, void 0, function* () {
            let fetchedResponse = yield fetch(`http://localhost:3000/CRUD/save/${id}`, {
                method: 'PUT',
                body: JSON.stringify(newElement),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        });
    }
}
exports.bussinessLogic = bussinessLogic;
exports.bussinessObject = new bussinessLogic();
