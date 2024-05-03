import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { posts } from '../../data/posts';
import styles from "./DetailPost.module.css";

const DetailPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
      );
      const data = await res.json();
      setPosts(data.posts);
      setIsLoading(false);
    };

    fetcher();
  }, []);

  const { id } = useParams();
  console.log(id);
  const post = posts.find((post) => post.id === Number(id));
  // console.log(post);

  //記事が見つからなかったとき
  if (!isLoading && !post) {
    return <div>記事が見つかりません</div>;
  }

  return (
    <div>
      {isLoading ? (
        <div>読み込み中…</div>
      ) : (
        <div className={styles.container}>
          <img src={post.thumbnailUrl} />
          <div className={styles.article}>
            <div className={styles.dateAndCategories}>
              <p className={styles.date}>
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <ul className={styles.categories}>
                {post.categories.map((category) => {
                  return <li key={category}>{category}</li>;
                })}
              </ul>
            </div>
            <h3 className={styles.title}>{`APIで取得した${post.title}`}</h3>
            <div
              className="detailContent"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPost;
