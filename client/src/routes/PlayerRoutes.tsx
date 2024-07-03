import PlayerHome from "@app/pages/Player/PlayerHome";
import PlayerInfo from "@app/pages/Player/PlayerInfo";
import { Route, Routes } from "react-router-dom"

const PlayerRoutes = () => {
    return (
        <Routes>
            <Route path='/' Component={PlayerHome}></Route>
            <Route path="/user/:userId" Component={PlayerInfo}></Route>
            {/* logged in player can see other players stats. handle in node to store data of other players */}
        </Routes>
    )
}

export default PlayerRoutes;