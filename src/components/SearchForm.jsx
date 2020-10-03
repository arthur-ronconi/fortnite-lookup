import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AccountContext } from "../context/AccountContext";

export const SearchForm = (props) => {
  const FortniteAPI = require("fortnite-api-io");
  const fortniteAPI = new FortniteAPI("d4b0c477-a3bd4895-cf0dd77a-6d169cb7");

  const [searchTerm, setSearchTerm] = useContext(SearchContext);
  const [accountId, setAccountId] = useContext(AccountContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const handleClick = (e) => {
    e.preventDefault()
    fortniteAPI
      .getAccountIdByUsername(searchTerm)
      .then((res) => {
        setAccountId(res.account_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let link;

  useEffect(() => {
    link = accountId;
    console.log(accountId);
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
      <Link
        to={`/user/${link}`}
        onClick={handleClick}
        className="btn btn-lg btn-white"
      >
        Search
      </Link>
      {/* <button onClick={handleClick} className="btn btn-lg btn-secondary">
        Search
      </button> */}
    </form>
  );
};
