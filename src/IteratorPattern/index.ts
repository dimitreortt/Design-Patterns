import { CafeMenu } from "./CafeMenu";
import { DinerMenu } from "./DinerMenu";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { Waitress } from "./Waitress";

const dinerMenu = new DinerMenu()
const pancakeHouseMenu = new PancakeHouseMenu()
const cafeMenu = new CafeMenu()
const waitress = new Waitress()
waitress.addMenu(dinerMenu)
waitress.addMenu(pancakeHouseMenu)
waitress.addMenu(cafeMenu)
waitress.printMenu()
