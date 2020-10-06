import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AccountContext } from "../context/AccountContext";
import { UserInfoContext } from "../context/UserInfoContext";

export const SearchForm = () => {
  const FortniteAPI = require("fortnite-api-io");
  const fortniteAPI = new FortniteAPI("d4b0c477-a3bd4895-cf0dd77a-6d169cb7");

  const [searchTerm, setSearchTerm] = useContext(SearchContext);
  const [accountId, setAccountId] = useContext(AccountContext);
  const [userInfo, setUserInfo] = useContext(UserInfoContext);
  const history = useHistory();

  // sets search term state on input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // logs input change
  useEffect(() => {
    console.log(`searchTerm changed to ${searchTerm}`);
  }, [searchTerm]);

  const getAccountId = (username) => {
    return fortniteAPI.getAccountIdByUsername(username)
  }
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const data = await getAccountId(searchTerm);
      const id = await data.account_id
      
      setAccountId(id)
      console.log(id);
      history.push(`/user/${id}`)
    } catch (err) {
      console.log(err);
    }
    
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
      {/* <Link
      to={`/user/:${link}`}
      onClick={handleClick}
      className="btn btn-white"
    >
      Search
    </Link> */}
      <button onClick={handleClick} className="btn btn-white px-5">
        Search
      </button>
    </form>
  );
};
