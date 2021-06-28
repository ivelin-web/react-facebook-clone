import React from "react";

export default function ContactRow({ Avatar, profile, name }) {
    return (
        <div className="contacts__profile__wrapper d-flex align-items-center gap-3 p-2">
            <Avatar className="contacts__avatar" alt="Avatar" src={profile} />
            <p style={{ fontWeight: "500" }} className="mb-0">
                {name}
            </p>
        </div>
    );
}
