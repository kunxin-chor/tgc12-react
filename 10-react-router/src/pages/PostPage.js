import React, {useState, useEffect} from "react"
import axios from "axios"

export default function PostPage(props) {
    const [activePostId, setActivePostId] = useState(0);
    const [activePost, setActivePost]  = useState({})

    useEffect(()=>{
        
        const fetch = async(postId) => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + postId);
            setActivePost(response.data)
        }
        
        fetch(activePostId);

    }, [activePostId])

    return <React.Fragment>
       <h1>Posts</h1>
       <input type="text" value={activePostId} onChange={(e)=>{
           setActivePostId(e.target.value)
       }}/>
       <ul>
           <li>Post ID: {activePost.id}</li>
           <li>Title: {activePost.title}</li>
       </ul>

    </React.Fragment>

}
