import { SalesRepository } from "./SalesRepository";

export class SalesService {
    constructor(readonly salesRepository: SalesRepository) {}

    overview(args: object) {
        const sales = this.salesRepository.get(args)
        const salesSummary = this.getSalesSummary(sales)
        const graphData = this.getGraphData(sales)
        const topProducts = this.getTopProducts(sales)
        const slowMovingItems = this.getSlowMovingItems(sales)
        const topCostumers = this.getTopCustomers(sales)

        return {
            salesSummary,
            graphData,
            topProducts,
            slowMovingItems,
            topCostumers
        }
    }

    private getSalesSummary(sales: any) {
        // logic to get sales summary
        return sales
    }

    private getGraphData(sales: any) {
        // logic to get sales summary
        return sales
    }

    private getTopProducts(sales: any) {
        // logic to get top products
        return sales
    }

    private getSlowMovingItems(sales: any) {
        // logic to get slow moving items
        return sales
    }

    private getTopCustomers(sales: any) {
        // logic to get top customers
        return sales
    }

    overviewExport(args: object) {
        return this.generateCsv(this.overview(args))
    }

    private generateCsv(overview: any) {
        // logic to generate csv
        return overview
    }
}