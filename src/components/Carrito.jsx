import '../style/carrito.css'
import { useId } from 'react'
import { useCarrito } from '../hooks/useCarrito'
import { ItemCarrito } from './ItemCarrito'
import { CartIcon, ClearCartIcon } from './Icons'

export function Carrito() {
  const cartCheckboxId = useId()
  const { carrito, agregarAlCarrito, limpiarCarrito } = useCarrito()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {carrito?.map((prod) => (
            <ItemCarrito
              key={prod.id}
              agregarAlCarrito={() => agregarAlCarrito(prod)}
              {...prod}
            />
          ))}
        </ul>
        <button onClick={limpiarCarrito}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
