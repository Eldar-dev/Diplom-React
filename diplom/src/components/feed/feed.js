import React from "react";
import { Link } from "react-router-dom";
import TagList from "../tagList";
import AddToFavorites from "../addToFavorites";

const Feed = ({ articles }) => {
  if (!articles.length)
    return (
      <div className="alert alert-primary" role="alert">
        No articles are here... yet.
      </div>
    );

  return (
    <div>
      {articles.map((article, index) => (
        <div key={index} className="article-preview">
          <div className="article-meta">
            <Link to={`/profiles/${article.author.username}`}>
              <img src={article.author.image} alt="" />
            </Link>
            <div className="info">
              <Link
                to={`/profiles/${article.author.username}`}
                className="author"
              >
                {article.author.username}
              </Link>
              <span className="date">{article.createdAt}</span>
            </div>
            <div className="pull-xs-right">
              <AddToFavorites
                isFavorited={article.favorited}
                favoritesCount={article.favoritesCount}
                articleSlug={article.slug}
              />
            </div>
          </div>
          <Link to={`/articles/${article.slug}`} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
            <TagList tags={article.tagList} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Feed;
