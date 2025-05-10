import Header from "./Components/header"
import LandingSection from "./Components/landingSection"
import Sidebar from "./Components/sidebar"
export default function MainBody() {

    return(
        <div className="select-none min-h-screen bg-[#0b0c1b]">
            <Sidebar/>
            <Header/>
            <LandingSection/>
        </div>
        )
}