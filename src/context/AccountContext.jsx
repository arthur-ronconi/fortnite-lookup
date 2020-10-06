import React, { createContext, useState } from 'react';

export const AccountContext = createContext(undefined)

export const AccountProvider = (props) => {
    const [accountId, setAccountId] = useState('4735ce9132924caf8a5b17789b40f79c')
    return (
        <AccountContext.Provider value={[accountId, setAccountId]}>
            {props.children}
        </AccountContext.Provider>
    )
}