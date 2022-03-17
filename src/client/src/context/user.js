import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export default function User({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const fetchUserProfile = () => {
    fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`)
      .then((res) => res.json())
      .then(setUser);
  };
  const onAuthTokenRecieve = (token) => {
    setToken(token);
  };

  const handleAuth = () => {
    chrome.identity.getAuthToken({ interactive: true }, onAuthTokenRecieve);
  };

  useEffect(() => {
    chrome.identity.getAuthToken({ interactive: false }, onAuthTokenRecieve);
  }, []);

  useEffect(() => {
    if (token) fetchUserProfile();
  }, [token]);
  return (
    <UserContext.Provider
      value={{ token, setToken, user, setUser, fetchUserProfile, handleAuth }}
    >
      {children}
    </UserContext.Provider>
  );
}
