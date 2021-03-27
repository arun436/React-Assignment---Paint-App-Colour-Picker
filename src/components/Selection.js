import React, { useState } from 'react';


const Selection = (props) => {
    const [backColor, setBackColor] = useState({background: ''});
    const fillcolor = (nextBackground) => {
        setBackColor({background: nextBackground});
    }
    return (
        <div className="fix-box"
             style={backColor}
             onClick={()=>props.applyColor(fillcolor)}>
                 <h2 className="subheading">Selection</h2>
             </div>
    )
}
export default Selection;