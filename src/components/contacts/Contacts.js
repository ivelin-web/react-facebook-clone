import React from "react";
import "../contacts/Contacts.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ContactRow from "./ContactRow";
import { Avatar } from "@material-ui/core";

const contacts = [
    {
        id: 1,
        profile: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Christopher",
    },
    {
        id: 2,
        profile: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Line Rolland",
    },
    {
        id: 3,
        profile: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Eduard Franz",
    },
    {
        id: 4,
        profile: "https://randomuser.me/api/portraits/men/22.jpg",
        name: "Johnny Simpson",
    },
    {
        id: 5,
        profile: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwMzc5OTEzOF5BMl5BanBnXkFtZTgwMDc5ODU3MTE@._V1_UX172_CR0,0,172,256_AL_.jpg",
        name: "Dina Meyer",
    },
    {
        id: 6,
        profile: "https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
        name: "Love Grayson",
    },
    {
        id: 7,
        profile: "https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
        name: "Monroe Bond",
    },
];

export default function Contacts() {
    return (
        <div className="contacts__wrapper">
            <div className="contacts__header d-flex align-items-center justify-content-between ms-2 mb-2">
                <h5 className="mb-0">Contacts</h5>
                <div className="d-flex align-items-center gap-2">
                    <div className="contacts__icon rounded-circle p-2 d-flex align-items-center justify-content-center">
                        <VideoCallIcon />
                    </div>
                    <div className="contacts__icon rounded-circle p-2 d-flex align-items-center justify-content-center">
                        <SearchIcon />
                    </div>
                    <div className="contacts__icon rounded-circle p-2 d-flex align-items-center justify-content-center">
                        <MoreHorizIcon />
                    </div>
                </div>
            </div>
            {contacts.map((contact) => {
                return <ContactRow Avatar={Avatar} key={contact.id} {...contact} />;
            })}
        </div>
    );
}
