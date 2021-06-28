import { Avatar, Card } from "@material-ui/core";
import React from "react";
import "./Post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

export default function Post({ profile, name, message, src, date_posted }) {
    const date = new Date(date_posted?.toDate()).toDateString();

    return (
        <Card className="post__wrapper mb-4">
            <div className="post__header p-3">
                <div className="d-flex align-items-center gap-2 mb-1">
                    <Avatar src={profile} alt="Avatar" />
                    <div>
                        <p className="mb-0">{name}</p>
                        <p className="mb-0 post__timestamp">{date}</p>
                    </div>
                    <div className="post__icon ms-auto rounded-circle" style={{ padding: "0.4rem" }}>
                        <MoreHorizIcon />
                    </div>
                </div>
                <p className="mb-0 py-1">{message}</p>
            </div>
            {src && (
                <div className="post__content mb-3">
                    <img style={{ objectFit: "contain", display: "block", width: "100%" }} src={src} alt="Post Image" />
                </div>
            )}
            <div className="px-3">
                <hr className="my-0" style={{ opacity: 0.2 }} />
            </div>
            <div className="post__footer d-flex justify-content-between px-3 py-1">
                <div className="post__footer__item p-2 flex-grow-1 d-flex align-items-center justify-content-center gap-2">
                    <ThumbUpAltOutlinedIcon />
                    <p className="mb-0">Like</p>
                </div>
                <div className="post__footer__item p-2 flex-grow-1 d-flex align-items-center justify-content-center gap-2">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p className="mb-0">Comment</p>
                </div>
                <div className="post__footer__item p-2 flex-grow-1 d-flex align-items-center justify-content-center gap-2">
                    <ShareOutlinedIcon />
                    <p className="mb-0">Share</p>
                </div>
            </div>
        </Card>
    );
}
