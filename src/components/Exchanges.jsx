import React, { useEffect, useState } from 'react'
import axios from "axios"
import {server} from "../index"
import { Container,HStack , Button } from '@chakra-ui/react'
import Loader from "./Loader"
import ExchangeCard from './ExchangeCard'
import ErrorComponent from './ErrorComponent'

const Exchanges = () => {
  const[exchanges , setExchanges] = useState([])
  const[loading , setLoading] = useState(true)
  const[error , setError] = useState(false)
 

    useEffect(() => {
      const fetchExchange = async()=>{
       try {
        const {data} = await axios.get(`${server}/exchanges`)

        setExchanges(data)
        setLoading(false)
       } catch (error) {
        setError(true)
        setLoading(false)
       }
      }
      fetchExchange();
    }, []);
    

    if(error){
      return <ErrorComponent message= {"Error  while  fetching exchange"}/>
    }

  return (
    <Container  maxW={"container.xl"}>
      {loading ? <Loader/>:<> 
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {
            exchanges.map((item) =>{
              return (<ExchangeCard 
                name ={item.name} 
                img = {item.image} 
                rank = {item.trust_score_rank} 
                url = {item.url} 
                key = {item.id} />)
            })
          }
        </HStack>
       
       </> }
    </Container>

  )
}



export default Exchanges