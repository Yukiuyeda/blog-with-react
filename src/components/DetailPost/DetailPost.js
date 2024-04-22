import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../../data/posts';
import styles from "./DetailPost.module.css"

const DetailPost = () => {
    const { id } = useParams();
    const found = posts.find(post => post.id === Number(id));
    // console.log(found);
    return (
        <div>
            <div className={styles.container}>
                <img src={found.thumbnailUrl} />
                <div className={styles.article}>
                    <div className={styles.dateAndCategories}>
                        <p className={styles.date}>{new Date(found.createdAt).toLocaleDateString()}</p>
                        <ul className={styles.categories}>
                            {found.categories.map(category => {return <li key={category}>{category}</li>})}
                        </ul>
                    </div>
                    <h3 className={styles.title}>{`APIで取得した${found.title}`}</h3>
                    <div className='detailContent' dangerouslySetInnerHTML={{__html: found.content}}></div>
                </div>
            </div>
                
        </div>
            
    )
}

export default DetailPost