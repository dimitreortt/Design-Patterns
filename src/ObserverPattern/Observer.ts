import { Observable } from "./Observable";

export interface Observer {
    update(currentState: any, observable?: Observable): void
}
