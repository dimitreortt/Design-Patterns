import { DuckAdapter } from "./DuckAdapter";
import { MallardDuck } from "./MallardDuck";
import { TurkeyAdapter } from "./TurkeyAdapter";
import { WildTurkey } from "./WildTurkey";

const mallardDuck = new MallardDuck()
mallardDuck.fly()
mallardDuck.quack()

const wildTurkey = new WildTurkey()
wildTurkey.fly()
wildTurkey.gobble()

// turkeyDuck
const turkeyAdapter = new TurkeyAdapter(wildTurkey)
turkeyAdapter.fly()
turkeyAdapter.quack()

// duckTurkey
const duckAdapter = new DuckAdapter(mallardDuck)
duckAdapter.fly()
duckAdapter.gobble()