import React from "react";
import Post from "./Post";
import { useStateValue } from "../../StateProvider";
import db from "../../firebase";
import { useState } from "react";
import { useEffect } from "react";

export default function PostList() {
    const [{ user }, dispatch] = useStateValue();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("date_posted", "desc")
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data(),
                        };
                    })
                );
            });
    }, []);

    return (
        <div>
            {posts.map((post) => {
                return <Post key={post.id} {...post} />;
            })}
        </div>
    );
}
