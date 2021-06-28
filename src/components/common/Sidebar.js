import React from "react";
import Icon from "@material-ui/core/Icon";
import SidebarRow from "./SidebarRow";
import GroupIcon from "@material-ui/icons/Group";
import { Avatar } from "@material-ui/core";
import ShopIcon from "@material-ui/icons/Shop";
import TvIcon from "@material-ui/icons/Tv";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../../StateProvider";

export default function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <aside style={{ position: "sticky", left: 0, top: 75 }}>
            <SidebarRow Avatar={Avatar} src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={GroupIcon} title="Friends" />
            <SidebarRow FontIcon={Icon} title="Groups" />
            <SidebarRow Icon={ShopIcon} title="Marketplace" />
            <SidebarRow Icon={TvIcon} title="Watch" />
            <SidebarRow Icon={CalendarTodayIcon} title="Events" />
            <SidebarRow Icon={WatchLaterIcon} title="Memories" />
            <SidebarRow Icon={ExpandMoreIcon} title="See More" />
        </aside>
    );
}
