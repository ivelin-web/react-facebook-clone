import React, { Suspense } from "react";
import "./App.css";
import "./components/common/Header.css";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Widgets from "./components/common/Widgets";
import { useStateValue } from "./StateProvider";
import Login from "./pages/Login";
import { actionTypes } from "./reducer";

const Home = React.lazy(() => import("./pages/Home"));

function App() {
    const [{ user }, dispatch] = useStateValue();

    const handleLogout = () => {
        dispatch({
            type: actionTypes.SET_USER,
            user: null,
        });
    };

    if (!user) {
        return <Login />;
    }

    return (
        <>
            <Header onLogout={handleLogout} />
            <div className="px-2 py-3">
                <main className="d-flex gap-0 gap-sm-4 gap-md-5 justify-content-between">
                    <div className="d-none d-sm-block sidebar__wrapper flex-grow-0 flex-lg-grow-1">
                        <Sidebar />
                    </div>
                    <div className="main__content__wrapper flex-grow-1 ms-auto me-auto ms-lg-0 me-lg-0">
                        <Suspense fallback="">
                            <Home />
                        </Suspense>
                    </div>
                    <div className="widgets__wrapper flex-grow-0 flex-lg-grow-1 d-none d-lg-block">
                        <Widgets />
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
