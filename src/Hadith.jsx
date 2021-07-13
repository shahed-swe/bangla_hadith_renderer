import React from 'react';

function Hadith(props){
  return (
    <div>
      <h1 className="hadith-name">{props.post.name}</h1>
      <p className="hadith-description"><span>"</span>{props.post.description}<span>"</span></p>
      <small className="hadith-ref">{props.post.references}</small>
      <small className="grade">{props.post.grade}</small>
    </div>
  )
}

export default Hadith;