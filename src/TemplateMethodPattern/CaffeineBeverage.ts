export abstract class CaffeineBeverage {
    constructor() { }

    prepareRecipe() {
        this.boilWater()
        this.brew()
        this.pourInCup()
        if (this.customerWantsCondiments()) {
            this.addCondiments()
        }
        this.hook()
    }

    boilWater() {
        console.log('boiling water')
    }
    
    pourInCup() {
        console.log('pouring in cup')
    }

    customerWantsCondiments() {
        return true
    }

    hook() {}

    abstract addCondiments(): void

    abstract brew(): void;
}
