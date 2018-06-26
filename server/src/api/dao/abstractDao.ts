import { EntityDao } from "apicore/lib";

export abstract class AbstractDao implements EntityDao{
    protected daoInstance:any;

    save() {
        return this.daoInstance.save()
            .then(() => {
                return this;
            });
    }

    abstract retrieve(id:string):Promise<AbstractDao>;

    abstract retrieveAll():Promise<Array<AbstractDao>>;

    abstract delete(id:string):Promise<void>;
    
}