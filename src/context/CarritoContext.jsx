// import { useState } from 'react'
import { createContext } from 'react'
import { useCarritoReducer } from '../hooks/useCarritoReducer'

export const CarritoContext = createContext()

export function CarritoProvider({ children }) {
  const { state, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito } = useCarritoReducer()
  // const [carrito, setCarrito] = useState([])

  // const agregarAlCarrito = (producto) => {
  //   const hayProductoEnElCarritoIndex = carrito.findIndex(
  //     (item) => item.id === producto.id
  //   )

  //   if (hayProductoEnElCarritoIndex >= 0) {
  //     const nuevoCarrito = structuredClone(carrito)
  //     nuevoCarrito[hayProductoEnElCarritoIndex].quantity += 1
  //     return setCarrito(nuevoCarrito)
  //   }

  //   setCarrito((prevState) => [...prevState, { ...producto, quantity: 1 }])
  // }

  // const removerDelCarrito = producto => {
  //   setCarrito((prevState) => prevState.filter((item) => item.id !== producto.id))
  // }

  // const limpiarCarrito = () => {
  //   setCarrito([])
  // }

  return (
    <CarritoContext.Provider
      value={{
        carrito: state,
        agregarAlCarrito,
        eliminarDelCarrito,
        limpiarCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  )
}
