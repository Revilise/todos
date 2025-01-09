import {BasicAdapter, IBaseCreate, IBaseDelete, IBaseUpdate, IBaseWhere} from "@/db/lib/adapter";
import { Firebase } from "@/db/providers/firebase/config";
import { query } from "@firebase/database";
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  limit,
  setDoc,
  getDocs,
  orderBy
} from "@firebase/firestore";
import { generateUniqueId } from "@/shared/lib";

export class FirebaseAdapter implements BasicAdapter {
  db: Firestore;

  constructor() {
    const firebase = new Firebase();
    this.db = firebase.db as Firestore;
  }

  async findOne<DTO>(dto: string, id: string): Promise<DTO> {
    const docRef = doc(this.db, dto, id);
    return getDoc(docRef).then(record => record.data() as Promise<DTO>);
  }

  async select<DTO, DTOWhere extends IBaseWhere>(dto: string, data: DTOWhere): Promise<DTO[]> {
    const ref = collection(this.db, dto);

    const constrains = [
      limit(data.limit),
      orderBy("createdAt", "asc")
    ]

    // @ts-ignore
    const snapshot = await getDocs(query(ref, ...constrains));
    return snapshot.docs.map(doc => doc.data() as DTO);
  }

  async create<DTO, DTOCreate extends IBaseCreate>(dto: string, data: DTOCreate): Promise<DTO> {
    const uid = generateUniqueId();
    data.updatedAt = data.createdAt = new Date();
    const docRef = doc(this.db, dto, uid);
    const todo = Object.assign({uid}, data);
    return setDoc(docRef, todo).then(() => getDoc(docRef)).then(record => record.data() as Promise<DTO>);
  }

  async update<DTO, DTOUpdate extends IBaseUpdate>(dto: string, data: DTOUpdate): Promise<DTO> {
    data.updatedAt = new Date();
    const docRef = doc(this.db, dto, data.uid);
    return setDoc(docRef, data.updRecord).then(() => getDoc(docRef)).then(record => record.data() as Promise<DTO>);
  }

  async delete<DTO, DTODelete extends IBaseDelete>(dto: string, data: DTODelete): Promise<DTO> {
    const ref = doc(this.db, dto, data.uid);
    const record = await getDoc(ref);
    return deleteDoc(ref).then(() => record.data() as Promise<DTO>);
  }
}
