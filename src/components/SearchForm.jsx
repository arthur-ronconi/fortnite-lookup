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

  // gets account id by username, sets accountId state
  const handleClick = (e) => {
    e.preventDefault();
    const getAccountId = () => {
      fortniteAPI
        .getAccountIdByUsername(searchTerm)
        .then((res) => {
          setAccountId(res.account_id);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAccountId();
  };

  useEffect(() => {
    console.log(`got id ${accountId}`);
    fortniteAPI
      .getGlobalPlayerStats(accountId)
      .then((res) => {
        setUserInfo(res);
      }).then(()=>{
        // history.push(`/user/${accountId}`)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [accountId]);

  return (
    <form>
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
      <button onClick={handleClick} className="btn btn-lg btn-secondary">
        Search
      </button>
    </form>
  );
};
