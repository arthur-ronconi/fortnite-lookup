import React, { createContext, useState } from 'react';

export const AccountContext = createContext()

export const AccountProvider = (props) => {
    const [accountId, setAccountId] = useState()
    return (
        <AccountContext.Provider value={[accountId, setAccountId]}>
            {props.children}
        </AccountContext.Provider>
    )
}