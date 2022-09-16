import { createContext, useState } from "react";

const userContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "" });

  const addUserName = (name) => {
    setUser({ name: name });
  };

  const addUserPhone = (phone) => {
    setUser({ ...user, phone: phone });
  };

  return (
    <userContext.Provider value={{ user, addUserName, addUserPhone }}>
      {children}
    </userContext.Provider>
  );
}

export default userContext;
