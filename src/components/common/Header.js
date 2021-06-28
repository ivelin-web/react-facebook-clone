import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useStateValue } from "../../StateProvider";

export default function Header({ onLogout }) {
    const [{ user }, dispatch] = useStateValue();

    return (
        <header className="d-flex align-items-center justify-content-sm-between px-3 py-1">
            <div className="d-flex align-items-center gap-2">
                <img className="rounded-circle" style={{ width: 40, height: 40, objectFit: "contain", cursor: "pointer" }} src="./assets/images/facebook.svg" alt="Logo" />
                <div className="p-2 d-flex align-items-center header__search__wrapper">
                    <SearchIcon style={{ color: "#808080" }} />
                    <input className="header__search ms-2 p-0 d-none d-xl-flex align-items-center" type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <nav className="d-flex align-items-center gap-2 ms-auto ms-md-0" style={{ color: "#808080" }}>
                <div className="header__icon active">
                    <HomeIcon style={{ fontSize: "1.8rem" }} />
                </div>
                <div className="header__icon">
                    <OndemandVideoOutlinedIcon style={{ fontSize: 28 }} />
                </div>
                <div className="header__icon">
                    <StorefrontOutlinedIcon style={{ fontSize: 28 }} />
                </div>
                <div className="header__icon">
                    <GroupAddOutlinedIcon style={{ fontSize: 28 }} />
                </div>
                <div className="header__icon">
                    <SportsEsportsOutlinedIcon style={{ fontSize: 28 }} />
                </div>
            </nav>

            <div className="d-flex align-items-center gap-2">
                <div onClick={onLogout} className="header__avatar__wrapper d-none d-xl-flex align-items-center gap-2 p-2 py-1 pe-3">
                    <Avatar alt="Avatar" src={user.photoURL} className="header__avatar" />
                    <p className="mb-0 fw-bold">{user.displayName.split(" ")[0]}</p>
                </div>
                <div className="d-none d-md-flex gap-2">
                    <Avatar className="header__avatar__icon">
                        <AddIcon style={{ color: "#222" }} />
                    </Avatar>
                    <Avatar className="header__avatar__icon">
                        <ForumIcon style={{ color: "#222" }} />
                    </Avatar>
                    <Avatar className="header__avatar__icon">
                        <NotificationsIcon style={{ color: "#222" }} />
                    </Avatar>
                    <Avatar className="header__avatar__icon">
                        <ArrowDropDownIcon style={{ color: "#222" }} />
                    </Avatar>
                </div>
            </div>
        </header>
    );
}
