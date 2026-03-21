import type { Condition } from "@shared/types/condition.type";

export interface Param {
    fieldPath: string;
    condition: Condition;
    value: unknown
}

