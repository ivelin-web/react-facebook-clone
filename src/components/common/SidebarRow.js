import React from "react";
import "./SidebarRow.css";

export default function SidebarRow({ Avatar, src, Icon, FontIcon, title }) {
    return (
        <div className="sidebar__row p-2 d-flex align-items-center gap-2">
            {Avatar && <Avatar style={{ width: 35, height: 35 }} src={src} alt="Avatar" />}
            {Icon && <Icon style={{ fontSize: 35, color: "#1877f2" }} />}
            {FontIcon && <FontIcon style={{ fontSize: 35, color: "#1877f2" }}>groups</FontIcon>}
            <p className="mb-0 fw-bold d-none d-md-block" style={{ fontSize: "0.9rem" }}>
                {title}
            </p>
        </div>
    );
}
