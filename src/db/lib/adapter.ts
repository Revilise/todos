import { Repository } from "@/db/lib/repository";

export interface IBaseWhere {
  limit: number,
}

export interface IBaseCreate {
  createdAt?: Date,
  updatedAt?: Date,
}

export interface IBaseUpdate {
  uid: string,
  updRecord: any,
  updatedAt?: Date,
}

export interface IBaseDelete {
  uid: string,
}

export interface BasicAdapter {
  findOne<DTO>(dto: string, id: string): Promise<DTO>;
  select<DTO, DTOWhere extends IBaseWhere>(dto: string, data: DTOWhere): Promise<DTO[]>;
  create<DTO, DTOCreate extends IBaseCreate>(dto: string, data: DTOCreate): Promise<DTO>;
  update<DTO, DTOUpdate extends IBaseUpdate>(dto: string, data: DTOUpdate): Promise<DTO>;
  delete<DTO, DTODelete extends IBaseDelete>(dto: string, data: DTODelete): Promise<DTO>;
}
