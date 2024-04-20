import React from 'react';
import { posts } from '../../data/posts';
import "./Main.css"
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <ul className="posts">
        {posts.map(post => {
          return (<li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <div className="post">
                <div className='postContent'>
                  <div className="dateAndCategories">
                    <p className="date">{new Date(post.createdAt).toLocaleDateString()}</p>
                    <ul className="categories">
                      {post.categories.map(category => {return <li key={category}>{category}</li>})}
                    </ul>
                  </div>
                  <h3 className="title">{`APIで取得した${post.title}`}</h3>  
                  <div className='content' dangerouslySetInnerHTML={{__html: post.content}}></div>
                </div>  
              </div> 
            </Link>
           
            
          </li>)
        })}
      </ul>
    </div>
      
  )
}

export default Main