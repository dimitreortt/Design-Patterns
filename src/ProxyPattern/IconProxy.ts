import { Frame } from "./Frame";
import { Icon } from "./Icon";
import { Image } from "./Image";

export class IconProxy implements Image {
    content: string = 'width: 10, height: 10'

    constructor(readonly icon: Icon) {}

    paint(frame: Frame): void {
        if (!this.icon.content && !this.icon.loading) {
            this.icon.load().then(() => {
                this.paint(frame)
            })
            frame.paint(this)
        } else {
            this.icon.paint(frame)
        }
    }
}
