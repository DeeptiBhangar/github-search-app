import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import "./RepositoryPage.scss";
import RepositoryList from "../../components/repository/RepositoryList";
import Loading from "../../components/loading/Loading";
import SearchInput from "../../components/search/SearchInput";
import ErrorMessage from "../../components/error/ErrorMessage";

const GET_REPOSITORIES_LIST = gql`
  query getRepositoryQuery(
    $repoNameString: String!
    $after: String
    $limit: Int!
  ) {
    search(
      query: $repoNameString
      first: $limit
      after: $after
      type: REPOSITORY
    ) {
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
      edges {
        node {
          ... on Repository {
            name
            url
            description
            languages(first: 3) {
              nodes {
                name
              }
            }
            stargazers {
              totalCount
            }
            owner {
              login
            }
            updatedAt
          }
        }
      }
    }
  }
`;

const RepositoryPage = () => {
  const [searchText, setSearchText] = useState("elastic");
  const { loading, error, data, fetchMore } = useQuery(GET_REPOSITORIES_LIST, {
    variables: { repoNameString: searchText, limit: 10 },
  });

  const handleSearch = (str) => {
    setSearchText(str);
    fetchMore({
      variables: {
        repoNameString: str,
        limit: 10,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  const handleMore = () => {
    fetchMore({
      variables: {
        repoNameString: searchText,
        after: data.search.pageInfo.endCursor,
        limit: 10,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          ...fetchMoreResult,
          search: {
            ...fetchMoreResult.search,
            edges: [...prev.search.edges, ...fetchMoreResult.search.edges],
          },
        });
      },
    });
  };

  return (
    <div className="repository-page">
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
      {!loading && <SearchInput onSearch={handleSearch} />}
      {data && (
        <RepositoryList
          list={data.search.edges}
          onLoadMore={handleMore}
          hasNextPage={data.search.pageInfo.hasNextPage}
        />
      )}
    </div>
  );
};

export default RepositoryPage;
