import React from 'react'

function Card(props){
    console.log(props)
        return(
        <div>
            <img src={props.image_url}></img>
        </div>
        )
}

export default Card;