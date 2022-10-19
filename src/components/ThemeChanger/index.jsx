import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import './dark.css'

let ThemeChanger = () => {
    const [isDark, setMode] = useState(false);
    // let isDark = false;

    return (
        <div className="modeDiv">
            <button className="toggleTheme"
                onClick={() => {
                    setMode(!isDark);
                    document.querySelector(`body`).setAttribute("class", (isDark) ? "lite" : "dark")
                }}>
                {(isDark) ? <MdLightMode /> : <MdDarkMode />}

            </button>
        </div>
    )
};

export default ThemeChanger;