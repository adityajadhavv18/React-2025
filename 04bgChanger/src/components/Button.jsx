import React from "react";

function Button({color,colorname,setColor}) {
    return(

        <button onClick={() => setColor(color)} className='outline-none px-4 rounded-xl text-white shadow-lg' style={{backgroundColor: color}} >{colorname}</button>
    );
}

export default Button