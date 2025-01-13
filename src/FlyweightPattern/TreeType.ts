export class TreeType {
    constructor(readonly name: string, readonly color: string, readonly texture: string) {}

    draw(x: number, y: number) {
        console.log(`drawing tree at: (${x},${y})`, this.name, this.color, this.texture);
    }
}

