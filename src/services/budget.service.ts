import { COLLECTION_NAMES } from "@shared/types/collection.type";
import { FirebaseService } from "./firebase/firebase.service";

export class BudgetService extends FirebaseService {
    constructor() {
        super(COLLECTION_NAMES.FORM);
    }

}