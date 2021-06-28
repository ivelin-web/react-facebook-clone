import React from "react";
import Contacts from "../contacts/Contacts";

export default function Widgets() {
    return (
        <aside style={{ position: "sticky", top: 75, right: 0 }}>
            <Contacts />
        </aside>
    );
}
