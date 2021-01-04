import React, {useState, useEffect} from  "react"
import Post  from './Components/Post'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"




const App = () => {

  const [PostList, SetList] = useState({posts: []})
  const [IndividualPost, SetPost] = useState(0)
  const [OpenPost, SetOpenPost] = useState({openPost: false}) 
  const [Loading, SetLoading] = useState({loading: true})

   
    useEffect ( () => {
      const FetchData = async () =>
      {
        SetLoading({loading: true})
        const Data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const IntoJson = await Data.json()
        SetList({posts:IntoJson})
        SetLoading({loading: false})
        
      }
  
      FetchData() 
      }, [] )

  const HandleClick = (event) =>
  {
    SetPost(PostList.posts.find((item) => item.id == event.target.getAttribute("id")))
    SetOpenPost({openPost:true})

  }

  const HandleSearch = (event) =>
  {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((items) => items.filter(item => item.title.includes(event.target.value)))
  .then(resopnseData => SetList({posts: resopnseData}))
  }

  if(!OpenPost.openPost)
  {
  return (
  <>
  <div>
  <h1>Post Archive</h1>
    
    <div className="SearchBar">
      <input type="text" onChange={HandleSearch}></input>
    </div>

     <div>
       <ul className="Posts">
         {PostList.posts.map(item =>
          <li key={item.id} ><p id={item.id} onClick={HandleClick}>{item.title}</p></li>
          )}
       </ul>
     
     </div>
  </div>
</>
  );
  }
  if(OpenPost.openPost)
  {
    return (
      <div>
           <Post id={IndividualPost.id} body={IndividualPost.body} title={IndividualPost.title} user={IndividualPost.userId}/>
      </div>
    );
  }
}

export default App;
