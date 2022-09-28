import React from "react"
import { Component } from "./Component"

export const checkbox = () => <input type="checkbox"></input>

export class Checkbox extends Component {
    checked?: boolean

    check(){
        this.dialog.notify(this, 'check')
    }
}