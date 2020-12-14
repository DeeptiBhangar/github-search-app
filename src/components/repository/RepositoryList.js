import React from "react";
import Button from "../button/Button";
import ErrorMessage from "../error/ErrorMessage";
import RepositoryItem from "./RepositoryItem";
import "./RepositoryList.scss";

const RepositoryList = ({ list, onLoadMore, hasNextPage }) => {
  return (
    <div className="repository-list">
      {list.length === 0 ? (
        <ErrorMessage errorText="No repositories found. Please try again with another search string." />
      ) : (
        <>
          {list.map((repositoryItem, index) => (
            <RepositoryItem key={index} repository={repositoryItem.node} />
          ))}
          {hasNextPage && (
            <div className="load-more-container">
              <Button onClick={onLoadMore} text="Load More" color="secondary" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RepositoryList;
