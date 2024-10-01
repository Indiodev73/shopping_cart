import { useState } from "react"
import { useEffect } from "react"
import { getAllProducts } from "../services/services"

export function useProducto () {
    const [productos, setProductos] = useState([])

    // const arrancar = async () => {
    //   try {
    //    const hayProducto = await getAllProducts()
    //    setProductos(hayProducto)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  
    // useEffect(() => {
    //  arrancar()
    // }, [])
    
    useEffect(() => {
      getAllProducts().then((res) => {
        setProductos(res)
      })
    }, [])

    return { productos }
}