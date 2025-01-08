import { Espresso } from "./Espresso";
import { HouseBlend } from "./HouseBlend";
import { Mocha } from "./Mocha";
import { Whip } from "./Whip";

const houseBlend = new Mocha(new Whip(new HouseBlend()))
console.log(houseBlend.cost())
console.log(houseBlend.getDescription())


const espresso = new Mocha(new Whip(new Espresso()))
console.log("\n" + espresso.getDescription())
console.log(espresso.cost())


