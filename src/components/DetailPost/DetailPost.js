import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../../data/posts';
import styles from "./DetailPost.module.css"

const DetailPost = () => {
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id));
    // console.log(post);

    //記事が見つからなかったとき(postがundefinedのとき)
    if (!post) {
        return <div>記事が見つかりません</div>
    };

    return (
        <div>
            <div className={styles.container}>
                <img src={post.thumbnailUrl} />
                <div className={styles.article}>
                    <div className={styles.dateAndCategories}>
                        <p className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</p>
                        <ul className={styles.categories}>
                            {post.categories.map(category => {return <li key={category}>{category}</li>})}
                        </ul>
                    </div>
                    <h3 className={styles.title}>{`APIで取得した${post.title}`}</h3>
                    <div className='detailContent' dangerouslySetInnerHTML={{__html: post.content}}></div>
                </div>
            </div>
                
        </div>
            
    )
}

export default DetailPost