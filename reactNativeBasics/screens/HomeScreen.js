import React from 'react';
import { useEffect, useState } from "react"

import { View, Text } from 'react-native';
import api from "../http/ApiService"

const HomeScreen = ()=>{
  const [products,setProducts] = useState([])
  useEffect(()=>{
      (
          async()=>{
              const result = await api.getAll('products')
              setProducts(result)
              console.log("products", products)
          }
      )()
  },[])
  return (
      <View>
          <Text>This will be home page soon</Text>

      </View>
  )
}

export default HomeScreen;
