import { EntityDao } from "apicore/lib";

export abstract class AbstractDao implements EntityDao {
    protected daoInstance: any;

    save() {
        if (this.daoInstance._id) {
            return this.update(this.daoInstance._id,this.daoInstance);
        } else {
            return this.daoInstance.save()
                .then(() => {
                    return this;
                });
        }
    }

    abstract retrieve(id: string): Promise<AbstractDao>;

    abstract retrieveAll(): Promise<Array<AbstractDao>>;

    abstract update(id:string, daoInstance:any): Promise<AbstractDao>;

    abstract delete(id: string): Promise<void>;

}