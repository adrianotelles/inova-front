import type { Timestamp } from "firebase/firestore";

export interface ProductModel {
    id?: string;
    title?: string;
    description?: string;
    producer?: string;
    photo?: string;
    createdAt?: Timestamp | Date;
    visits?: number;
}