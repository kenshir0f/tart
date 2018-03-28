import * as FirebaseFirestore from '@google-cloud/firestore';
import { DeltaDocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
export declare const initialize: (_firestore: FirebaseFirestore.Firestore) => void;
export declare class Snapshot<T extends Timestamps> {
    ref: FirebaseFirestore.DocumentReference;
    data: T;
    constructor(ref: FirebaseFirestore.DocumentReference, data: T);
    constructor(snapshot: FirebaseFirestore.DocumentSnapshot | DeltaDocumentSnapshot);
    private setCreatedDate();
    save(): Promise<FirebaseFirestore.WriteResult>;
    saveWithBatch(batch: FirebaseFirestore.WriteBatch): void;
    saveReferenceCollectionWithBatch<S extends Timestamps>(batch: FirebaseFirestore.WriteBatch, collectionName: string, snapshot: Snapshot<S>): void;
    saveNestedCollectionWithBatch<S extends Timestamps>(batch: FirebaseFirestore.WriteBatch, collectionName: string, snapshot: Snapshot<S>): void;
    fetchNestedCollections<S extends Timestamps>(collectionName: string): Promise<Snapshot<S>[]>;
    update(data: {
        [id: string]: any;
    }): Promise<FirebaseFirestore.WriteResult>;
    updateWithBatch(batch: FirebaseFirestore.WriteBatch, data: {
        [id: string]: any;
    }): void;
    delete(): Promise<FirebaseFirestore.WriteResult>;
    deleteWithBatch(batch: FirebaseFirestore.WriteBatch): void;
}
export interface Timestamps {
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const makeNotSavedSnapshot: <T extends Timestamps>(path: string, data: T) => Snapshot<T>;
export declare const fetch: <T extends Timestamps>(pathOrDocumentReference: string | FirebaseFirestore.DocumentReference, id?: string | undefined) => Promise<Snapshot<T>>;
