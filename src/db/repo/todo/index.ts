import { Repository } from "@/db/lib/repository";
import { ITodo, ITodoCreate, ITodoDelete, ITodoUpdate, ITodoWhere } from "./interfaces";
import { BasicAdapter } from "@/db/lib/adapter";

export class TodosRepository implements Repository<ITodo, ITodoWhere, ITodoCreate, ITodoUpdate, ITodoDelete> {
    adapter: BasicAdapter;
    dtoName: string;

    constructor(adapter: BasicAdapter, dtoName = "todo") {
        this.adapter = adapter;
        this.dtoName = dtoName;
    }

    getOne(id: string): Promise<ITodo> {
        return this.adapter.findOne<ITodo>(this.dtoName, id);
    }

    query(where: ITodoWhere): Promise<ITodo[]> {
        return this.adapter.select<ITodo, ITodoWhere>(this.dtoName, where);
    }
    create(data: ITodoCreate): Promise<ITodo> {
        return this.adapter.create<ITodo, ITodoCreate>(this.dtoName, data);
    }
    update(record: ITodoUpdate): Promise<ITodo> {
        return this.adapter.update<ITodo, ITodoUpdate>(this.dtoName, record);
    }
    delete(record: ITodoDelete): Promise<ITodo> {
        return this.adapter.delete(this.dtoName, record);
    }
}
