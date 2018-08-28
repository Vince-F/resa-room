import { EntityDao } from "apicore/lib";

export abstract class AbstractDao implements EntityDao {
    protected daoInstance: any;
    private new:boolean;

    constructor(data:any) {
        this.new = (data && data._id === undefined);
    }

    save() {
        if (this.isNew()) {
            return this.daoInstance.save()
                .then(() => {
                    return this;
                });
        } else {
            return this.update(this.daoInstance._id,this.daoInstance);
        }
    }

    isNew() {
        return this.new;
    }

    abstract retrieve(id: string): Promise<AbstractDao>;

    abstract retrieveAll(): Promise<Array<AbstractDao>>;

    abstract update(id:string, daoInstance:any): Promise<AbstractDao>;

    abstract delete(id: string): Promise<void>;

}