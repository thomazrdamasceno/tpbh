"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GenericService = /** @class */ (function () {
    function GenericService(path, afs) {
        this.afs = afs;
        this.path = '';
        this.path = path;
    }
    GenericService.prototype.delete = function (id) {
        return this.afs.doc(this.path + "/" + id).delete();
    };
    GenericService.prototype.addOrUpdate = function (item) {
        console.log("Path aqui: ");
        console.log(this.path);
        item.dataCadastro = item.dataCadastro || new Date();
        if (!item.id || item.id === '0') {
            item.id = item.id || this.afs.createId();
            return this.afs.doc(this.path + "/" + item.id).set(Object.assign({}, item));
        }
        else {
            return this.afs.doc(this.path + "/" + item.id).update(Object.assign({}, item));
        }
    };
    GenericService.prototype.getById = function (id) {
        return this.afs.doc(this.path + "/" + id).valueChanges();
    };
    GenericService.prototype.getAll = function () {
        return this.afs.collection(this.path).valueChanges();
    };
    GenericService.prototype.getByKeyValue = function (key, value) {
        return this.afs.collection(this.path, function (ref) { return ref.where(key, "==", value); }).valueChanges();
    };
    return GenericService;
}());
exports.GenericService = GenericService;
//# sourceMappingURL=generic.service.js.map