import { TreeType } from "./TreeType";

export class TreeFactory {
    treeTypes: TreeType[] = []

    constructor() { }

    getTreeType(name: string, color: string, texture: string) {
        for (const treeType of this.treeTypes) {
            if (treeType.name === name && treeType.color === color && treeType.texture === texture) {
                console.log('I used the flyweight')
                return treeType;
            }
        }
        const treeType = new TreeType(name, color, texture);
        this.treeTypes.push(treeType)
        return treeType
    }
}
