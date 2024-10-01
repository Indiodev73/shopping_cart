import { useReducer } from "react"
import { carritoInitialState, cartRreducer } from "../reducer/carritoReducer"

export function useCarritoReducer () {
    const [state, dispatch] = useReducer(cartRreducer, carritoInitialState)

    const agregarAlCarrito = (product) =>
      dispatch({
        type: 'AGREGAR_AL_CARRITO',
        payload: product,
      })
  
    const eliminarDelCarrito = (product) =>
      dispatch({
        type: 'ELIMINAR_DEL_CARRITO',
        payload: product,
      })
  
    const limpiarCarrito = () =>
      dispatch({
        type: 'LIMPIAR_CARRITO',
      })

      return { state, agregarAlCarrito, eliminarDelCarrito, limpiarCarrito }
}