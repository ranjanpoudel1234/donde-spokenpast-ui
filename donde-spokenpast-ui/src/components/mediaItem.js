import React from "react"
import ReactPlayer from "react-player"

const mediaItem = (props) => {
    return(
        <li>
            <a href={props.url}>
                <ReactPlayer url={props.url} playing light/>
                <div>{props.title}</div>
            </a>
        </li>
    )
}

export default mediaItem;