import { Frame } from "./Frame";
import { Icon } from "./Icon";
import { IconProxy } from "./IconProxy";

const icon = new Icon('imageRrl')
const iconProxy = new IconProxy(icon)
const frame = new Frame()
iconProxy.paint(frame)