"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractDao {
    constructor(data) {
        this.new = (data && data._id === undefined);
    }
    save() {
        if (this.isNew()) {
            return this.daoInstance.save()
                .then(() => {
                return this;
            });
        }
        else {
            return this.update(this.daoInstance._id, this.daoInstance);
        }
    }
    isNew() {
        return this.new;
    }
}
exports.AbstractDao = AbstractDao;
