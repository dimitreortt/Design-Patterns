class App {
    routes: any = {}

    get(route: string, fn: Function) {
        this.routes[route] = fn
    }

    call(route: string, params: object = {}) {
        if (this.routes[route]) {
            return this.routes[route](params)
        }
    }
}

export const app = new App()