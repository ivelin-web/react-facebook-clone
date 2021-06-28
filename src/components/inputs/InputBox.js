import { Avatar, Card } from "@material-ui/core";
import React from "react";
import "./InputBox.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";
import db, { storage } from "../../firebase";
import { useState } from "react";

export default function InputBox() {
    const [{ user }, dispatch] = useStateValue();
    const inputRef = React.createRef(null);
    const fileRef = React.createRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) {
            return;
        }

        db.collection("posts")
            .add({
                message: inputRef.current.value,
                date_posted: firebase.firestore.FieldValue.serverTimestamp(),
                name: user.displayName,
                profile: user.photoURL,
            })
            .then((doc) => {
                if (imageToPost) {
                    const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, "data_url");

                    removeImageFromPost();

                    uploadTask.on(
                        "state_change",
                        null,
                        (error) => console.log(error),
                        () => {
                            storage
                                .ref("posts")
                                .child(doc.id)
                                .getDownloadURL()
                                .then((url) => {
                                    db.collection("posts").doc(doc.id).set(
                                        {
                                            src: url,
                                        },
                                        { merge: true }
                                    );
                                });
                        }
                    );
                }
            });

        inputRef.current.value = null;
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();

        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            console.log(readerEvent.target.result);
            setImageToPost(readerEvent.target.result);
        };
    };

    const removeImageFromPost = () => {
        setImageToPost(null);
    };

    return (
        <Card className="card__input__box p-3 mb-3">
            <div className="d-flex align-items-center gap-2">
                <Avatar src={user.photoURL} alt="Avatar" />
                <form className="flex-grow-1" onSubmit={handleSubmit}>
                    <input ref={inputRef} className="card__input w-100 py-2 px-3" type="text" placeholder={`What's on your mind, ${user.displayName}?`} />
                    <button hidden type="submit">
                        Submit
                    </button>
                </form>
                {imageToPost && (
                    <div className="card__input__image__wrapper d-flex flex-column align-items-center justify-content-center ms-3 text-center" onClick={removeImageFromPost}>
                        <img className="rounded-circle" style={{ display: "block", objectFit: "cover", width: 75, height: 75 }} src={imageToPost} alt="Post Image" />
                        <p>Remove</p>
                    </div>
                )}
            </div>
            <hr style={{ opacity: 0.2 }} />
            <div className="d-flex align-items-center">
                <div className="card__input__box__item d-flex flex-grow-1 align-items-center justify-content-center gap-2 px-3 py-1">
                    <VideocamIcon style={{ color: "#E42645", fontSize: 30 }} />
                    <p className="mb-0">Live Video</p>
                </div>
                <div onClick={() => fileRef.current.click()} className="card__input__box__item d-flex flex-grow-1 align-items-center justify-content-center gap-2 px-3 py-1">
                    <PhotoLibraryIcon style={{ color: "#42B45E", fontSize: 30 }} />
                    <p className="mb-0">Photo/Video</p>
                    <input ref={fileRef} onChange={addImageToPost} type="file" hidden />
                </div>
                <div className="card__input__box__item d-none d-xl-flex flex-grow-1 align-items-center justify-content-center gap-2 px-3 py-1">
                    <InsertEmoticonIcon style={{ color: "#EAB026", fontSize: 30 }} />
                    <p className="mb-0">Feeling/Activity</p>
                </div>
            </div>
        </Card>
    );
}
