import React, { useEffect, useState } from 'react'
import axios from "axios"
import {server} from "../index"
import { Container,HStack,Button,RadioGroup,Radio } from '@chakra-ui/react'
import Loader from "./Loader"
import CoinsCard from './CoinsCard'
import ErrorComponent from './ErrorComponent'

const Coins = () => {
  const[coins , setCoins] = useState([])
  const[loading , setLoading] = useState(true)
  const[error , setError] = useState(false)
  const[page , setPage] = useState(1)
  const[currency , setCurrency] = useState("inr")

    const currencySymbol = currency ==="inr" ?"₹" : currency ==="eur" ?"€" : "$" 
    const changePage =(page)=>{
      setPage(page)
      setLoading(true)
    }
    const btn = new Array(132).fill(1)
    useEffect(() => {
      const fetchExchange = async()=>{
       try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)

        setCoins(data)
        setLoading(false)
       } catch (error) {
        setError(true)
        setLoading(false)
       }
      }
      fetchExchange();
    }, [currency,page]);
    

    if(error){
      return <ErrorComponent message= {"Error  while  fetching exchange"}/>
    }

  return (
    <Container  maxW={"container.xl"}>
      {loading 
      ? <Loader/>:<> 
      <RadioGroup value ={currency} onChange={setCurrency} p={'8'}>
        <HStack spacing={'5'}>
          <Radio value={"inr"}>INR</Radio>
          <Radio value={"eur"}>EUR</Radio>
          <Radio value={"usd"}>USD</Radio>
        </HStack>
      </RadioGroup>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {
            coins.map((item) =>{
              return (<CoinsCard 
                name ={item.name} 
                id={item.id}
                symbol={item.symbol}
                img = {item.image} 
                currentPrice = {item.current_price} 
                key = {item.id} 
                currencySymbol={currencySymbol}
                />)
            })
          }
        </HStack>
        <HStack w={"full"} overflowX={"auto"} p ={"8"}>
          {
            btn.map((item , index)=>{
            return (
              <Button 
              key = {index}
              bgColor={"blackAlpha.900"}
              color={"white"}
              onClick={()=>changePage(index+1)}
              >
                {index+1}
              </Button>
            )
            })
              
          }
        </HStack>
       </> }
    </Container>

  )
}



export default Coins