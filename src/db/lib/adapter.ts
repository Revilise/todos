import { Repository } from "@/db/lib/repository";

export interface IBaseWhere {
  limit: number,
}

export interface IBaseUpdate {
  uid: string,
  updRecord: any
}

export interface IBaseDelete {
  uid: string,
}

export interface BasicAdapter {
  findOne<DTO>(dto: string, id: string): Promise<DTO>;
  select<DTO, DTOWhere extends IBaseWhere>(dto: string, data: DTOWhere): Promise<DTO[]>;
  create<DTO, DTOCreate>(dto: string, data: DTOCreate): Promise<DTO>;
  update<DTO, DTOUpdate extends IBaseUpdate>(dto: string, data: DTOUpdate): Promise<DTO>;
  delete<DTO, DTODelete extends IBaseDelete>(dto: string, data: DTODelete): Promise<DTO>;
}
