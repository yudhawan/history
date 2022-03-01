import { BrowserRouter,Route,Routes, } from "react-router-dom";
import Header from "../components/header";
import Home from "./home";
import History from "./history";
import Kronologi from "./kronologi";
import Timeline from "./timeline";
import TheKings from "./kings";
import Situs from "./situs";
import Quiz from "./quiz";
export default function Main(){
    return(
        <div className="w-full bg-banner_mobile lg:bg-banner h-screen">
        <BrowserRouter>
        <Header/>
        <div className="mt-20">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/history" element={<History/>} />
                <Route path="/kronologi" element={<Kronologi/>} />
                <Route path="/timeline" element={<Timeline/>} />
                <Route path="/thekings" element={<TheKings/>} />
                <Route path="/situs" element={<Situs/>} />
                <Route path="/Quiz" element={<Quiz/>} />
                {/* <Route path="/history" element={<History/>} /> */}
            </Routes>
        </div>
        </BrowserRouter>
        </div>
    )
}