import React from "react";
import InputBox from "../components/inputs/InputBox";
import PostList from "../components/posts/PostList";
import Stories from "../components/stories/Stories";

export default function Home() {
    return (
        <>
            <Stories />
            <InputBox />
            <PostList />
        </>
    );
}
