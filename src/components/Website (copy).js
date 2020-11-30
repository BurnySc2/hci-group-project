import React, { Component } from "react"

const NodeCouchDb = require("node-couchdb")

// node-couchdb instance with default options
const couch = new NodeCouchDb()

export default class Website extends Component {
    constructor(props) {
        super(props)
        console.log("Asd")

        couch.createDatabase("hcii").then(
            () => {
                console.log("created db")
            },
            (err) => {
                // database already exists
            }
        )
    }

    add_entry() {
        couch
            .insert("hcii", {
                // _id: "1",
                field: ["sample", "data", true],
            })
            .then(
                ({ data, headers, status }) => {
                    console.log(status)
                    if (status === 201) {
                        // Success, created value
                    }
                },
                (err) => {}
            )
    }

    render() {
        return (
            <div>
                <div>hello world</div>

                <button onClick={this.add_entry}>Click me</button>
            </div>
        )
    }
}
