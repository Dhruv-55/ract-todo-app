
import { useState } from "react";
export default function Counter() {
    const [color, setColor] = useState("#000000");
    const updateBgColor = (value) => {
        document.body.style.background = value;
    }
    return (
        <>
            <h1>Color</h1>
            <input type="color" onChange={(e) => updateBgColor(e.target.value)} />
            {/* <p>Color selected:{color}</p> */}
        </>
    )
}