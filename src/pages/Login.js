import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

export default function Login() {
    const [{ user }, dispatch] = useStateValue();

    const handleLogin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container py-5 text-center d-flex flex-column justify-content-center align-items-center">
            <img className="rounded-circle my-5" src="./assets/images/facebook.svg" alt="Facebook Logo" style={{ width: 150, height: 150, objectFit: "contain" }} />
            <Button onClick={handleLogin} style={{ background: "#1976D2", paddingTop: "0.8rem", paddingBottom: "0.8rem", borderRadius: "1.6rem" }} variant="contained" color="primary">
                Login With Google
            </Button>
        </div>
    );
}
