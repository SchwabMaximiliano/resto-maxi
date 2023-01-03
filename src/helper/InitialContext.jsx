import React, { useState, useContext } from "react";
import axios from "axios";

const initialContext = React.createContext();

export function useInitialContext() {
    return useContext(initialContext);
}

export function Initialcontext({ children }) {

    const [publicKey, setPublicKey] = useState("");
    var base = process.env.DB_HOST || "http://localhost:4000";

    useEffect(() => {
        axios
            .get(`${base}/api/user/publicKey`)
            .then((response) => setPublicKey(response.data));
    }, []);

    console.log(publicKey);

    return (
        <initialContext.Provider value={publicKey}>
            {children}
        </initialContext.Provider>
    );
}

