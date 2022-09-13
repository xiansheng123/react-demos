import React from 'react';

export const PageContext = React.createContext({
    token:"token1",
    name:"ok",
    login:(token,name)=>{}
});
