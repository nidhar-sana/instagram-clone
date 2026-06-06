import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate, Navigate} from 'react-router-dom'

function ViewStory() {
    const {id, tot} = useParams();

    // const navigate = useNavigate();
    const [story, setStory] = useState(null);
    useEffect(()=>{
        fetch(`http//localhost:3000/story/${id}`)
        .then(data => data.json())
        .then(data => setStory(data))
        .catch(err => console.log(err))
    },[id])

    if (id > tot || id<=0){
        Navigate('/');
    }
  return (
    <div>{story ?<div className='d-flex justify-content-center align-items-center'>
        <Link to={`http//localhost:5176/story/${Number(id)-1}/${tot}`}><i class="bi bi-arrow-left-circle-fill"></i></Link>
        <img className='vh-100' src="{story.imagestory}" alt="" />
        <Link to={`http//localhost:5176/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle-fill"></i></Link>
    </div> : 
    
    <div>Loading</div>}
    </div>
  )
}

export default ViewStory