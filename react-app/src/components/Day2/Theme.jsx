import React from 'react'

export const theme=React.createContext()

function Theme() {
  return (
    <div>
      <theme.Provider value={"light"}>
       <switchTheme/>
        
      </theme.Provider>
    </div>
  )
}

export default Theme
