import facebook from "../assets/Imgs/Facebook.webp";
import github from "../assets/Imgs/github.webp";
import linkedin from "../assets/Imgs/LinkedInImg.webp";
import mail from "../assets/Imgs/gmail.webp";
import sidebarStyle from "../style/sidebar.module.css";

import { useState } from "react";

export default function Sidebar() {
    const [sidebar, setSidebar] = useState<boolean>(false);
    
    return(
        <>
            <div onClick={() => setSidebar(!sidebar)} className={`${sidebarStyle.sidebarBtn} fixed top-[20px] left-[3%] rounded-full flex flex-col items-center justify-center w-[50px] h-[50px] gap-y-[3px] cursor-pointer z-10`}>
                <div className={`${sidebar ? `hidden`:null} duration-[0.3s] w-[20px] h-[2px] bg-black`}></div>
                <div className={`${sidebar ? `rotate-[-45deg]`:`rotate-[0deg]`} duration-[0.5s] w-[20px] h-[2px] bg-black`}></div>
                <div className={`${sidebar ? `rotate-[45deg] translate-y-[-5px]`:`rotate-[-0deg]`} duration-[0.5s] w-[20px] h-[2px] bg-black`}></div>
            </div>

            <div className={`${sidebar ? 'z-[5]' : '' } ${sidebarStyle.sidebarContainer} flex fixed w-[100%] h-screen`}>
                <div className={`${sidebar ? sidebarStyle.openBox : sidebarStyle.closeBox} fixed bg-white`}>
                    <ul className={`${!sidebar ? 'hidden' : null} ${sidebarStyle.sidebarTxt} flex flex-col justify-center items-center h-full gap-y-[20px]`}>
                        <li>
                            <a onClick={() => setSidebar(false)} href="#home" className="text-[30px] font-semibold hover:text-[32px] hover:duration-[0.5s]">Home</a>
                        </li>
                        <li>
                            <a onClick={() => setSidebar(false)} href="#skills" className="text-[30px] font-semibold hover:text-[32px] hover:duration-[0.5s]">Skills</a>
                        </li>
                        <li>
                            <a onClick={() => setSidebar(false)} href="#portfolio" className="text-[30px] font-semibold hover:text-[32px] hover:duration-[0.5s]">Portfolio</a>
                        </li>
                        <li>
                            <a onClick={() => setSidebar(false)} href="#Contact" className="text-[30px] font-semibold hover:text-[32px] hover:duration-[0.5s]">Contact</a>
                        </li>
                        <li className="absolute top-[95%] flex gap-x-[20px]">
                        <a href="https://www.facebook.com/profile.php?id=61567582160653" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="Facebook" className="w-[25px] h-[25px] rounded-full" />
                        </a>
                        <a href="https://github.com/Mohammed-Wael-dev" target="_blank" rel="noopener noreferrer">
                         <img src={github} alt="GitHub" className="w-[25px] h-[25px] rounded-full bg-black" />
                        </a>
                        <a href="mailto:mohwael.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img src={mail} alt="Email" className="w-[25px] h-[25px] rounded-full" />
                        </a>
                        <a href="https://www.linkedin.com/in/mohammed-wael-react/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="LinkedIn" className="w-[25px] h-[25px] rounded-full" />
                        </a>
                        </li>
                    </ul>
                </div>
            {sidebar ?
                <div onClick={() => setSidebar(false)} className="bg-transparent w-[100%] h-full"></div>
                : null}
            </div>
        </>
    )
}