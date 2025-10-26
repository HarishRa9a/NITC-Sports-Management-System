import PublicLayout from "./components/layout/PublicLayout";
import "./index.css";
import Events from "./pages/Events";
import Home from './pages/Home';
import { Leaderboard } from "./pages/Leaderboard";
import { Matches } from "./pages/Matches";
import { Notifications } from "./pages/Notifications";
import { Teams } from "./pages/Teams";
import Login from './pages/auth/Login';
import { Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/public" element={<PublicLayout />} >
                <Route path="leaderboard" element={<Leaderboard />} />
                <Route path="teams" element={<Teams />} />
                <Route path="matches" element={<Matches />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="events" element={<Events />} />
            </Route>
            <Route path="*" element={<div>404:NOT FOUND!!!</div>} />
        </Routes>
    )
}