import React from "react";
import LanguageNode from "./LanguageNode";
import "./RepositoryItem.scss";

const RepositoryItem = ({ repository }) => {
  return (
    <div className="repository-item">
      <div className="repository-item__header">
        <a
          href={repository.url}
          target="_blank"
          className="repository-item__header__repo-name"
        >
          {repository.name}
        </a>
        <div className="repository-item__header__owner">Owner: {repository.owner.login}</div>
      </div>
      <div className="repository-item__content">
        <p>{repository.description}</p>
      </div>
      <div className="repository-item__footer">
        <LanguageNode languages={repository.languages.nodes} />
        <div className="repository-item__footer__stars-count">
          {repository.stargazers.totalCount} stars
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
