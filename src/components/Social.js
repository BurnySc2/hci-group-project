import React, { Component } from "react"

export default class Social extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        // TODO
        // Links: Liste von gruppen, in denen man ist (button gruppe erstellen)
        // Rechts: Liste von Kontakten (Freunden) (button kontakt hinzufuegen)
        // Was passiert wenn man auf gruppe klickt? neues fenster oeffnet sich?
        // Was passiert wenn man auf ein freund klickt?
        return (
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div>Gruppen</div>
                    <div>Kontakte</div>
                </div>
                <div>Gruppe erstellen</div>
                <div>gruppen namen</div>
            </div>
        )
    }
}
