import React from 'react'
import './GlobalStyles.scss'

interface GlobalStylesPropsInterface {
  children: React.ReactElement
}

const GlobalStyles: React.FC<GlobalStylesPropsInterface> = ({children}) => {
  return children
}

export default GlobalStyles