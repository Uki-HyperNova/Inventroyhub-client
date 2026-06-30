import { getProducts } from "@/services/product"
import { Product } from "@/types/product"
import { useEffect, useState } from "react"

// const  data = [
  
//   {
//     "id": 68,
//     "header": "Service Level Agreements",
//     "type": "Legal",
//     "status": "Done",
//     "target": "26",
//     "limit": "29",
//     "reviewer": "Assign reviewer"
//   }
// ]
const [data,setData] = useState<Product[]>([])

const productdata = async () =>{

  try{
    const  response = await getProducts()
    setData(response.products)
  } catch (error){
    console.error("Error ")
  }
}

useEffect(()=>{
  productdata()
},[])






export default data
