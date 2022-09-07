import React,{useState,useContext,useEffect} from "react";
import axios from 'axios' 

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
  
    const [coins, setCoins] = useState([])
 
   useEffect(() => {
    axios.get(url).then((response) => {
        setCoins(response.data)  })   
   }, [url])

   return <AppContext.Provider value={{coins,setCoins}}>
      {children}
   </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
  export { AppContext, AppProvider }
  