import React, { createContext, useState } from 'react';

export const UserInfoContext = createContext(undefined)

export const UserInfoProvider = (props) => {
    const [userInfo, setUserInfo] = useState()
    return (
        <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
            {props.children}
        </UserInfoContext.Provider>
    )
}