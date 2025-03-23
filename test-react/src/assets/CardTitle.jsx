// import { useState } from "react";

function CardTitle({title, description}) {
//    const [color, setColor] = useState('pink'); // Initialize color to black
//    function onClick() {
//     setColor("purple");
   
   return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {/* <button style={{backgroundColor: color}} onClick = {onClick}>Click me!</button> */}
        </div>
    );
}

export default CardTitle