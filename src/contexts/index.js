import { createContext } from 'react'
export const ThemeContext = createContext({
  colors: {
    success: '#2ecc71',
    primary: '#3498db',
    warning: '#f39c12',
    danger: '#e74c3c'
  }
})
