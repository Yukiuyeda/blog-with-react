import React from 'react';
import { posts } from '../../data/posts';
import "./Main.css"

const Main = () => {
  return (
    <div>
      <ul className="posts">
        {posts.map(post => {
          return (<li key={post.id}>
            <div className="post">
              <div className='postContent'>
                <div className="dateAndCategories">
                  <p className="date">{new Date(post.createdAt).toLocaleDateString()}</p>
                  <ul className="categories">
                    {post.categories.map(category => {return <li>{category}</li>})}
                  </ul>
                </div>
                <h3 className="title">{`APIで取得した${post.title}`}</h3>  
                <div className='content' dangerouslySetInnerHTML={{__html: post.content}}></div>
              </div>
              
            </div>
            
          </li>)
        })}
      </ul>
    </div>
      
  )
}

export default Main