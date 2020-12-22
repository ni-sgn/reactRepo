import {useState, useEffect} from 'react'
import Image from './Image'
import "../../Styles/Styles.css"

function ImageList(props)
{
    return(
        <div className="Gallery">
            {
                props.Images && props.Images.map(
                    image => <Image name={image.name} data={image.data} handleRemove={props.handleRemove}/>
                )
            }
        </div>
    );
}

export default ImageList;
