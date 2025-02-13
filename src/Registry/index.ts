import { Registry } from "./Registry";
import { UserRepository } from "./UserRepository";
import { Client } from "./Client";

Registry.getInstance().provide('userRepository', new UserRepository());

const client = new Client()
client.execute()