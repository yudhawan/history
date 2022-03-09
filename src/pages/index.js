import { BrowserRouter,Route,Routes, } from "react-router-dom";
import Header from "../components/header";
import Home from "./home";
import History from "./history";
import Kronologi from "./kronologi";
import Timeline from "./timeline";
import TheKings from "./kings";
import Situs from "./situs";
import Quiz from "./quiz";
import About from "./about";
export default function Main(){
    return(
        <div className="w-full bg-banner_mobile lg:bg-banner lg:bg-cover h-screen">
        <BrowserRouter>
        <Header/>
        <div className="mt-10">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sejarah" element={<History/>} />
                <Route path="/kronologi" element={<Kronologi/>} />
                <Route path="/linimasa" element={<Timeline/>} />
                <Route path="/raja" element={<TheKings/>} />
                <Route path="/situs" element={<Situs/>} />
                <Route path="/quis" element={<Quiz/>} />
                <Route path="/about" element={<About/>} />
                {/* <Route path="/history" element={<History/>} /> */}
            </Routes>
        </div>
        </BrowserRouter>
        </div>
    )
}