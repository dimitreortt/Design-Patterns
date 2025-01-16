import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Waitress } from "./Waitress";

const pancakeHouseMenu = new Menu('PANCAKE HOUSE MENU', 'Breakfast')
const dinerMenu = new Menu('DINER MENU', 'Lunch')
const cafeMenu = new Menu('CAFE MENU', 'Diner')
const dessertMenu = new Menu('DESSERT MENU', 'Diner')
const allMenus = new Menu('ALL MENUS', 'All Menus Combined')

pancakeHouseMenu.add(new MenuItem('K&B´s Pancake Breakfast', 'Pancakes with scrambled eggs, and toast', true, 2.99))
pancakeHouseMenu.add(new MenuItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage', false, 2.99))
pancakeHouseMenu.add(new MenuItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.49))
pancakeHouseMenu.add(new MenuItem('Waffles', 'Waffles, with your choice of blueberries or strawberries', true, 3.59))

dinerMenu.add(new MenuItem('Vegetarian BLT', '(Fakin´) Bacon with lettuce & tomato on whole wheat', true, 2.99))
dinerMenu.add(new MenuItem('BLT','Bacon with lettuce & tomato on whole wheat', false, 2.99))
dinerMenu.add(new MenuItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29))
dinerMenu.add(new MenuItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 3.05))

cafeMenu.add(new MenuItem('Veggie Burger and Air Fries','Veggie burger on a whole wheat bun, lettuce, tomato, and fries',true,3.99))
cafeMenu.add(new MenuItem('Soup of the day', 'A cup of the soup of the day, with a side salad', false, 3.69))
cafeMenu.add(new MenuItem('Burrito', 'A large burrito, with whole pinto beans, salsa, guacamole', true, 4.29))

dessertMenu.add(new MenuItem('Apple Pie', 'Apple pie with a flakey crust, topped with vanilla icecream', true, 1.59));
dessertMenu.add(new MenuItem('Grape Pie', 'Grape pie with a flakey crust, topped with vanilla icecream', false, 1.50))
dessertMenu.add(new MenuItem('Mango Pie', 'Mango pie with a flakey crust, topped with vanilla icecream', true, 1.40))
dinerMenu.add(dessertMenu)

allMenus.add(pancakeHouseMenu)
allMenus.add(dinerMenu)
allMenus.add(cafeMenu)

const waitress = new Waitress(allMenus)
waitress.printVegetarianMenu()