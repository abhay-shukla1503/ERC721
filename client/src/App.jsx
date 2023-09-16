import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import SafeMint from './components/safemint'
import Wallet from './components/Wallet';
import './App.css'

function App() {
  const [state,setState] = useState({web3:null,contract:null,account:null})

  const saveState = ({web3,contract,account})=>{
    setState({web3:web3,contract:contract,account:account})
  }

    const router = createBrowserRouter([
      {path:'/',element:<Wallet saveState = {saveState}/>},
      {path:'/safe-mint',element:<SafeMint state={state}/>},
    ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App