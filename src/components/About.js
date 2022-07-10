import { Link, useParams } from "react-router-dom";
import React from "react";

const Choices=(props)=>{
    const {word,color,bgCol}=useParams();
    return(
    <div>
        {
            isNaN(word)?
            <p style={
                color?
                {color:color,backgroundColor:bgCol}
                :null
            }>
                The word is: {word}
            </p>
            :
            <p>
                The number is: {word}
            </p>
        }
        <Link to ={'/'}>Return to Welcome Page</Link>
    </div>
    )
}

export default Choices;