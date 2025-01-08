import {BasicAdapter} from "@/db/lib/adapter";

export interface Repository<DTO, DTOWhere, DTOCreate, DTOUpdate, DTODelete> {
  adapter: BasicAdapter
  dtoName: string

  getOne(id: string): Promise<DTO>
  query(where: DTOWhere): Promise<DTO[]>
  create(record: DTOCreate): Promise<DTO>
  update(record: DTOUpdate): Promise<DTO>
  delete(record: DTODelete): Promise<DTO>
}
