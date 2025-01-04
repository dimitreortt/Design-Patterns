import { SalesController } from "./SalesController";
import { SalesRepositoryImpl1 } from "./SalesRepository";
import { SalesService } from "./SalesService";
import { app } from "./../App";

const salesOverviewParams = {
    from: '',
    to: '',
    comparedTo: '',
    category: '',
    channel: '',
}

app.get('/sales/overview', (params: object = {}) => {
    return new SalesController(new SalesService(new SalesRepositoryImpl1())).overview(params)
})

app.get('/sales/overview/export', (params: object = {}) => {
    return new SalesController(new SalesService(new SalesRepositoryImpl1())).overviewExport(params)
})

console.log(app.call('/sales/overview', salesOverviewParams))
console.log(app.call('/sales/overview/export', salesOverviewParams))
