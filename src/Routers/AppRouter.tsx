import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from "../pages/Landing";
import React from "react";
import PageNotFound from "../pages/PageNotFound";
import EditCards from "../pages/EditCards";
import Review from "../pages/Review";
import TopControls from "../components/TopControls";
import {Container} from "@mui/material";

const AppRouter: React.FC<{}> = () => {
    const [menuDisplayed, setMenuDisplayed] = React.useState<boolean>(false);
    const toggleDisplayMenu = () => {
        setMenuDisplayed(!menuDisplayed);
    }

    return (
        <Router>
            <TopControls
                toggleDisplayMenu={toggleDisplayMenu}
                menuDisplayed={menuDisplayed}
            />
            <Container>
                <Routes>
                    <Route element={<Landing />} path={"/"} />
                    <Route element={<EditCards />} path={"/EditCards"} />
                    <Route element={<Review />} path={"/Review"} />
                    <Route element={<PageNotFound />} path={"*"} />
                </Routes>
            </Container>
        </Router>
    )
}

export default AppRouter;
