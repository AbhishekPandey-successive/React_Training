// 1.create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."


// 1.create two components: a parent component that acts as a provider and a child component that consumes the context.
// Create a context to manage a user's authentication status (logged in or out).
// Implement a login button in the child component that, when clicked, updates the authentication status in the context to "logged in."
// Display a message in the child component based on the user's authentication status. If the user is logged in, show "Welcome, [username]!" Otherwise, display "Please log in."


import React, { useState, createContext } from "react";

const AuthContext = createContext();
const Prefcontext = createContext();

const Parent = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState("Light");

  const toggletheme = () => {
    setTheme((prevtheme) => (prevtheme === "Light" ? "Dark" : "Light"));
  };

  const login = (username) => {
    setIsLoggedIn(username ? true : false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      <Prefcontext.Provider value={{ theme, toggletheme }}>
        {children}
      </Prefcontext.Provider>
    </AuthContext.Provider>
  );
};

export default Parent;
export { AuthContext, Prefcontext };



