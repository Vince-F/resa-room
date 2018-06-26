"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractDao {
    save() {
        return this.daoInstance.save()
            .then(() => {
            return this;
        });
    }
}
exports.AbstractDao = AbstractDao;
