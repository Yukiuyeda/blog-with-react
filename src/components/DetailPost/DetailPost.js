import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../../data/posts';
import "./DetailPost.css"

const DetailPost = () => {
    const { id } = useParams();
    // console.log(id);
    const found = posts.find(post => post.id === Number(id));
    // console.log(found)
    return (
        <div>
            <div className="detailContainer">
                <img src={found.thumbnailUrl} />
                <div className="detailArticle">
                    <div className="detailDateAndCategories">
                        <p className="detailDate">{new Date(found.createdAt).toLocaleDateString()}</p>
                        <ul className="detailCategories">
                            {found.categories.map(category => {return <li key={category}>{category}</li>})}
                        </ul>
                    </div>
                    <h3>{`APIで取得した${found.title}`}</h3>
                    <div className='detailContent' dangerouslySetInnerHTML={{__html: found.content}}></div>
                </div>
            </div>
                
        </div>
            
    )
}

export default DetailPost