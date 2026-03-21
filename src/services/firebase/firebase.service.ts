import type { Param } from "@shared/models/param.model";
import { collection, doc, getDoc, getDocs, limit, query, setDoc, where, type CollectionReference } from "firebase/firestore";
import { db } from "@config/firebase";

export class FirebaseService {
    private collectionRef!: CollectionReference;

    constructor(collectionName: string) {
        this.collectionRef = collection(db, collectionName);
    }

    public async findAll<T>(): Promise<T[]> {
        const snapshot = await getDocs(this.collectionRef);

        if (snapshot.empty) throw new Error('Não foi encontrado dados');

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })) as T[];
    }

    public async findQuery<T>({ fieldPath, condition, value }: Param): Promise<T[]> {
        const q = query(this.collectionRef, where(fieldPath, condition, value));
        const snapshot = await getDocs(q);

        if (snapshot.empty) throw new Error('Não foi encontrado dados');

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })) as T[];
    }


    public async findLimit<T>(qtd: number): Promise<T[]> {
        const q = query(this.collectionRef, limit(qtd));
        const snapshot = await getDocs(q);

        if (snapshot.empty) throw new Error('Não foi encontrado dados');

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        })) as T[];
    }

    public async findOne<T>(id: string): Promise<T> {
        const docRef = doc(this.collectionRef, id);
        const snapshot = await getDoc(docRef);

        if (!snapshot.exists()) throw new Error(`Documento com id ${id} não encontrado`);

        return snapshot.data() as T;
    }

    public async set<T>(data: T): Promise<T> {
        const id = doc(this.collectionRef).id;
        return await setDoc(doc(this.collectionRef, id), {
            ...data,
            id
        }, { merge: true }) as T;
    }
}