import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/errorMessage";
import UserArticles from "./components/UserArticles";

const Index = ({ match, location }) => {
  const slug = match.params.slug;
  const isFavorites = location.pathname.includes("favorites");
  const apiUrl = `/profiles/${slug}`;
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  if (!response) {
    return (
      <React.Fragment>
        {error && <ErrorMessage />}
        {isLoading && <Loading />}
      </React.Fragment>
    );
  }
  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-col-xs-12 col-md-10 offset-md-1">
              <img src={response.profile.image} className="user-img" alt="" />
              <h4>{response.profile.username}</h4>
              <p>{response.profile.bio}</p>
              <a
                className="btn btn-sm btn-outline-secondary action-btn"
                href="/settings"
              >
                <i className="ion-gear-a"></i> Edit Profile Settings
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink
                    to={`/profiles/${response.profile.username}`}
                    exact
                    className="nav-link"
                  >
                    My Posts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/profiles/${response.profile.username}/favorites`}
                    className="nav-link"
                  >
                    Favorited Posts
                  </NavLink>
                </li>
              </ul>
            </div>
            <UserArticles
              username={response.profile.username}
              location={location}
              isFavorites={isFavorites}
              url={match.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
