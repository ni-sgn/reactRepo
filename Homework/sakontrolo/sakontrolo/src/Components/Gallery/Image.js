import {useState, useEffect} from 'react'

function Image(props)
{
    return (
        <div className="ImageWrapper">
            <div>
                <img src={props.data} alt={props.name} width="360" height="420"/>
            </div>
            <div>
                <p>FileName: <i>{props.name}</i></p>
                <input type="button" value="Remove"  onClick={() => props.handleRemove(props.name)}/>
            </div>
        </div>
        
    );
}

export default Image;