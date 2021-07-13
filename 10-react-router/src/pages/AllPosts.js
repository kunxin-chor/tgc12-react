import React, {useState, useEffect} from "react";
import axios from 'axios'

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetch = async() => {
            let response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
            setPosts(response.data)
        }

        fetch();
    }, [])

    return <React.Fragment>
        { posts.map(p => <div>
            <ul>
                <li>ID: {p.id}</li>
                <li>TItle: {p.title}</li>T
            </ul>

        </div>
            )}
    </React.Fragment>

}