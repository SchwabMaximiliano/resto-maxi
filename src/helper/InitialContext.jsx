import React, { useState, useContext } from "react";
import axios from "axios";

const initialContext = React.createContext();

export function useInitialContext() {
    return useContext(initialContext);
}

export function Initialcontext({ children }) {

    const [publicKey, setPublicKey] = useState("");

    axios.get("http://localhost:4000/")
        .then((response) => setPublicKey(response.data));

    console.log(publicKey);

    return (
        <initialContext.Provider value={publicKey}>
            {children}
        </initialContext.Provider>
    );
}

