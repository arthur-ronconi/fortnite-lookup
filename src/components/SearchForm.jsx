import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AccountContext } from "../context/AccountContext";
import { UserInfoContext } from "../context/UserInfoContext";
import { api } from "../utils/api";

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useContext(SearchContext);
  const [accountId, setAccountId] = useContext(AccountContext);
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getAccountId = (username) => {
    return api().getAccountIdByUsername(username);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await getAccountId(searchTerm);
      const id = await data.account_id;

      setAccountId(id);
      console.log(id);
      history.push(`/user/${id}`);
    } catch (err) {
      console.log(err);
      history.push("/error");
    }
    setLoading(!loading);
  };

  return (
    <form className="search-form">
      <div className="form-group pt-4">
        <label htmlFor="searchForm" className="form-label">
          Search Username
        </label>
        <input
          type="text"
          className="form-control"
          name="searchForm"
          placeholder="Username"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick} className="btn btn-white px-5">
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div>Search</div>
        )}
      </button>
    </form>
  );
};
