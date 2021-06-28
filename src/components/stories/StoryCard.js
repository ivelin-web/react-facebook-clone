import React from "react";
import "./StoryCard.css";
import Card from "@material-ui/core/Card";
import { Avatar } from "@material-ui/core";

export default function StoryCard({ name, src, profile }) {
    return (
        <Card className="story__card d-flex align-items-end">
            <img className="story__card__image" src={src} alt="Story Image" />
            <span className="story__card__blur"></span>
            <Avatar className="story__card__profile" alt="Story Profile Image" src={profile} />
            <p className="story__card__name text-white fw-bold px-2">{name}</p>
        </Card>
    );
}
