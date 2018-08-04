"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractDao {
    save() {
        console.log("try to save", this.daoInstance);
        if (this.daoInstance._id) {
            console.log("update has been called");
            return this.update(this.daoInstance._id, this.daoInstance);
        }
        else {
            console.log("save has been called");
            return this.daoInstance.save()
                .then(() => {
                return this;
            });
        }
    }
}
exports.AbstractDao = AbstractDao;
