import { TreeType } from "./TreeType";

export class Tree {
    constructor(readonly x: number, readonly y: number, readonly type: TreeType) {}

    draw() {
        this.type.draw(this.x, this.y)
    }
}
