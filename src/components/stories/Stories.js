import React from "react";
import StoryCard from "./StoryCard";

const stories = [
    {
        id: 1,
        name: "Rodrigo Hawkins",
        src: "./assets/images/story-img-1.jpg",
        profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=74daec1914d1d105202bca8a310a6a71",
    },
    {
        id: 2,
        name: "Monroe Bond",
        src: "./assets/images/story-img-2.jpg",
        profile: "https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
    },
    {
        id: 3,
        name: "ClÃ¨M",
        src: "./assets/images/story-img-3.jpg",
        profile: "https://uifaces.co/our-content/donated/N8kxcjRw.jpg",
    },
    {
        id: 4,
        name: "Natali Craig",
        src: "./assets/images/story-img-4.jpg",
        profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
    },
    {
        id: 5,
        name: "Joshua Wilson",
        src: "./assets/images/story-img-5.jpg",
        profile: "https://randomuser.me/api/portraits/men/42.jpg",
    },
];

export default function Stories() {
    return (
        <section className="d-flex gap-2 py-2 mb-3">
            {stories.map((story) => {
                return <StoryCard key={story.id} {...story} />;
            })}
        </section>
    );
}
