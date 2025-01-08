import { GarageDoor } from "./GarageDoor";
import { GarageDoorCloseCommand } from "./GarageDoorCloseCommand";
import { GarageDoorOpenCommand } from "./GarageDoorOpenCommand";
import { LightOffCommand } from "./LightOffCommand";
import { LightOnCommand } from "./LightOnCommand";
import { LivingRoomLight } from "./LivingRoomLight";
import { MacroCommand } from "./MacroCommand";
import { NoCommand } from "./NoCommand";
import { RemoteControl } from "./RemoteControl";
import { Stereo } from "./Stereo";
import { StereoOffComand } from "./StereoOffComand";
import { StereoOnWithCDCommand } from "./StereoOnWithCDCommand";

const remote = new RemoteControl()
remote.setCommand(0, new LightOnCommand(new LivingRoomLight()), new LightOffCommand(new LivingRoomLight()))
remote.pressOnButton(0)
remote.pressOffButton(0)

remote.pressUndo()

remote.setCommand(1, new StereoOnWithCDCommand(new Stereo()), new StereoOffComand(new Stereo()))
remote.pressOnButton(1)
remote.pressOffButton(1)

remote.pressUndo()

remote.setCommand(2, new GarageDoorOpenCommand(new GarageDoor()), new GarageDoorCloseCommand(new GarageDoor()))
remote.pressOnButton(2)
remote.pressOffButton(2)

remote.pressUndo()

console.log('\nMacro Command:')
const command1 = new GarageDoorOpenCommand(new GarageDoor())
const command2 = new LightOnCommand(new LivingRoomLight())
const command3 = new StereoOnWithCDCommand(new Stereo())
remote.setCommand(3, new MacroCommand([command1, command2, command3]), new NoCommand())
remote.pressOnButton(3)

console.log('\nMacro Command Undo:')
remote.pressUndo()