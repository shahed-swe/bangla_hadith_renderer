import './App.css';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import Hadith from './Hadith';

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
          <Hadith post={post}/>
      </div>
    );
}


function random_num() {
      return Math.floor(Math.random() * 65) + 1
}


export default App;
