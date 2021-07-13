import './App.css';
import axios from 'axios';
import React,{useEffect, useState} from 'react';

function App() {
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        const num = random_num();
        axios.get('https://bn-hadith-api.herokuapp.com/hadiths/'+num).then(res => {
          setPost(res.data);
        });
    },[])


    if(!post) return null

  return (
    <div className="App">
      <h1 className="hadith-name">{post.name}</h1>
      <p className="hadith-description"><span>"</span>{post.description}<span>"</span></p>
      <small className="hadith-ref">{post.references}</small>
      <small className="grade">{post.grade}</small>
    </div>
  );
}

function random_num() {
      return Math.floor(Math.random() * 65) + 1
}


export default App;
