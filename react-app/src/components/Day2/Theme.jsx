// Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

import React from 'react'
import SwitchTheme from './SwitchTheme'
 
const userContext=React.createContext()
function Theme() {
  return (
    <div>
      <userContext.Provider value={"white"}>
      <SwitchTheme/>

      </userContext.Provider>
    </div>
  )
}

export default Theme
