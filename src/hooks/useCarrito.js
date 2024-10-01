import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export function useCarrito () {
    const { carrito, eliminarDelCarrito, agregarAlCarrito, limpiarCarrito } = useContext(CarritoContext)

    if ( carrito === undefined ) {
        throw new Error('UseCarrito se debe usar dentro del CarritoProvider')
    }

    return { carrito, eliminarDelCarrito, agregarAlCarrito, limpiarCarrito }
}