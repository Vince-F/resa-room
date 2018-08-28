import { EntityDao } from "apicore/lib";
export declare abstract class AbstractDao implements EntityDao {
    protected daoInstance: any;
    private new;
    constructor(data: any);
    save(): any;
    isNew(): boolean;
    abstract retrieve(id: string): Promise<AbstractDao>;
    abstract retrieveAll(): Promise<Array<AbstractDao>>;
    abstract update(id: string, daoInstance: any): Promise<AbstractDao>;
    abstract delete(id: string): Promise<void>;
}
