import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../../data/posts';

const DetailPost = () => {
    const {id} = useParams();
    console.log(id);
    const idPost = posts.find(post => post.id === id);
    return (
        <div>

        </div>
    )
}

export default DetailPost