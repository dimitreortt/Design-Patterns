import { SalesService } from "./SalesService"

export class SalesController {
    constructor(readonly salesService: SalesService) {}
    
    public overview(params: object) {
        return this.salesService.overview(params)
    }
 
    public overviewExport(params: object) {
        return this.salesService.overviewExport(params)
    }
}