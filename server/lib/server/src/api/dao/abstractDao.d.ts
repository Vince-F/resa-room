import { EntityDao } from "apicore/lib";
export declare abstract class AbstractDao implements EntityDao {
    protected daoInstance: any;
    save(): any;
    abstract retrieve(id: string): Promise<AbstractDao>;
    abstract retrieveAll(): Promise<Array<AbstractDao>>;
    abstract delete(id: string): Promise<void>;
}
