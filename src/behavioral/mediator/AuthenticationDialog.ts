import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Component } from "./Component";
import { Mediator } from "./Mediator";

export class AuthenticationDialog implements Mediator {
    private title?: string
    private loginOrRegisterChkBx?: Checkbox
    private okBtn?: Button
    private cancelBtn?: Button

    constructor() {
        
    }

    notify(sender: Component, event: string) {
        if(sender === this.loginOrRegisterChkBx && event === 'check'){
            if(this.loginOrRegisterChkBx.checked){
                this.title = 'Log in'
            } else {
                this.title = 'Register'
            }
        }

        if(sender === this.okBtn && event === 'click'){
            if(this.loginOrRegisterChkBx?.checked){
                // Try to find a user using login credentials.
                let found: any
                if (!found){
                    // Show an error message above the login
                    // field.
                }
            }
            else {
                // create user
            }
        }
    }
}