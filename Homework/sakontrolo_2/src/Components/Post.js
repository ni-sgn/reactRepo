import '../Styles/Styles.css'
import React, {useState, useEffect} from "react"

const Post = (props) =>
{
    const [CommentList, SetComments] = useState({comments: []})

    useEffect(
        () =>
        {
            const FetchComments = async () =>
            {
                const Data = await  fetch('https://jsonplaceholder.typicode.com/posts/'+props.id+'/comments')
                const IntoJson = await Data.json()
                SetComments({comments:IntoJson})
            }
            FetchComments()
        }, []
        )
    
        const HandleClick = (e) =>
        {
            e.preventDefault()
            window.location.reload()
        }
    return(
        <>
        <div className="Post">
             <h2 className="Back" onClick={HandleClick}>GoBack</h2>
             <h2 className="Title">{props.title}</h2>
            <div className="Body">
             <p>{props.body}</p>
            </div>
            <div className="Footer">
             <p>{props.userid}</p>
            </div>
        </div>
        <div className="Comments">
            <h2>Comments</h2>
            <ul>
        {
            CommentList.comments.map((item) => 
            
                <li key={item.id}>{item.body}</li>
            )
        }
        </ul>
        </div>
        </>
    );
}

export default Post;