import React from "react";

export default function Phonetic(props){
    return (
        <div className="Phonetic">
            <a href={props.phonetic.audio} rel="noreferrer">
                Listen here
            </a>
            <br />
            {props.phonetic.text}
        </div>
    );
}