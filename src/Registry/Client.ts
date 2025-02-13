import { inject } from "./Registry";
import { UserRepository } from "./UserRepository";

export class Client {
    @inject('userRepository')
    private userRepository?: UserRepository;

    constructor() { }

    execute() {
        this.userRepository?.myMethod()
    }
}
