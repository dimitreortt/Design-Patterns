export interface SalesRepository {
    get(args: object): any
}

export class SalesRepositoryImpl1 implements SalesRepository {
    get(filters: object): any {

        // filtre tudo de acordo com o que é passado no filters
        return {
            sales: [
                { id: 1, name: 'Sale 1', price: 100 },
                { id: 2, name: 'Sale 2', price: 200 },
                { id: 3, name: 'Sale 3', price: 300 },
            ],
            total: 600,
            message: 'Sales retrieved successfully',
        }
    }
}
