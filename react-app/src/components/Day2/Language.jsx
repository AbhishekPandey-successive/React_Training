// Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.


import React from 'react'
import  SwitchLangauge  from './SwitchLanguage'
const userContext=React.createContext()


function Language() {
  return (
    <div>
      <userContext.Provider value={"English"}>
         <SwitchLangauge/>
      </userContext.Provider>
    </div>
  )
}

export default Language
