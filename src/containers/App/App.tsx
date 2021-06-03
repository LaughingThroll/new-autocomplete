import React from 'react'
import { MainLayout } from '../../components'
import { Field } from './../../components/common'


export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <MainLayout>
      <Field onChange={() => {}} icon />
    </MainLayout>
  )
}

export default App;
