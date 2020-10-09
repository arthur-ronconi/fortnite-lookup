import React, { createContext, useState } from "react";

export const AccountContext = createContext(undefined);

export const AccountProvider = (props) => {
  const [accountId, setAccountId] = useState(
    "502f92b4b11d4f4c9afac6ee7fea57a5"
  );
  return (
    <AccountContext.Provider value={[accountId, setAccountId]}>
      {props.children}
    </AccountContext.Provider>
  );
};
