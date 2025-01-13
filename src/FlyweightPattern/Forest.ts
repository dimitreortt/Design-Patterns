import { Tree } from "./Tree";
import { TreeFactory } from "./TreeFactory";

export class Forest {
    trees: Tree[] = []

    constructor(readonly treeFactory: TreeFactory) { }

    plantTree(x: number, y: number, name: string, color: string, texture: string) {
        const tree = new Tree(x, y, this.treeFactory.getTreeType(name, color, texture))
        this.trees.push(tree)
    }

    draw() {
        for (const tree of this.trees) {
            tree.draw()
        }
    }
}
