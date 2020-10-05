import React, { useContext } from "react";
import { Hero } from "../components/Hero";
// import { UserInfoContext } from "../context/UserInfoContext";

export const User = () => {
  // const [userInfo, setUserInfo] = useContext(UserInfoContext)
  // let name = userInfo.name;
  let name = 'name';
  return <div>{<Hero title={name} />}</div>;
};
