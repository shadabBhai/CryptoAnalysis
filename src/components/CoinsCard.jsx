import React from 'react'
import {VStack,Image,Text,Heading} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const ExchangeCard = ({name , img , currentPrice ,id ,symbol , currencySymbol="₹"}) => {
  return (
    <Link to ={`/coins/${id}`} >
    <VStack 
      w={"52"} 
      shadow={"lg"} 
      p={"8"} 
      borderRadius={"lg"} 
      transition={" all  0.3s"} 
      m={"4"}
      css={{"&:hover":{
          transform:"scale(1.1)",
      }
    }}
      >
      <Image 
      src= {img}  
      w={'10'} 
      h={'10'} 
      objectFit ={'contain'} 
      alt ={'exchange'} 
      />
    <Heading size ={"md"} noOfLines={1} >{symbol}</Heading>
    <Text noOfLines={1}>{name}</Text>
    <Text noOfLines={1}>{currentPrice ? `${currencySymbol} ${currentPrice }`:"NA"}</Text>
    </VStack>

   </Link>
  )
}

export default ExchangeCard



  