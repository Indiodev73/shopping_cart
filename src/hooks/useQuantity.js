import { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export function useQuantity() {
  const { carrito } = useContext(CarritoContext)

  // const quantity = carrito.reduce((acc, curr) => acc + curr.quantity, 0)

  const totalPagar = carrito.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  )

  return {  totalPagar }
}
