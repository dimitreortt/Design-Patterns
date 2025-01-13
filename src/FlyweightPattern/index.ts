import { Forest } from "./Forest";
import { TreeFactory } from "./TreeFactory";

const treeFactory = new TreeFactory()
const forest = new Forest(treeFactory)

const colors = ['Light Brown', 'Brown']
const names = ['Oak Tree', 'Cherry']
const textures = ['Oak_Bark_Texture', 'Pine_Bark_Texture']

const random = () => Math.floor(Math.random() * 100) + 1
const randomBinary = () => Math.round(Math.random());

for (let i = 0; i < 10; i++) {
    forest.plantTree(random(), random(), colors[randomBinary()], names[randomBinary()], textures[randomBinary()])
}

forest.draw()

console.log(treeFactory.treeTypes.length)