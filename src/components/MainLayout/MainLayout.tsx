import React from 'react'
import './mainLayout.scss'


export interface MainLayoutProps {}
 
// Why i write React.FC? bacause it's help me with typing props children
// but i have alternative. In INTERFACE writing children: React.ReactNode
// (props: INTERFACE) 

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <div className="container">{ children }</div>
}

export default MainLayout
