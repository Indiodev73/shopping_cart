import '../style/carrito.css'
import { useId } from 'react'
import { useCarrito } from '../hooks/useCarrito'
import { ItemCarrito } from './ItemCarrito'
import { useQuantity } from '../hooks/useQuantity'
import { CartIcon, ClearCartIcon } from './Icons'


export function Carrito() {
   const cartCheckboxId = useId()
  const { carrito, agregarAlCarrito, limpiarCarrito } = useCarrito()
  const { totalPagar } = useQuantity()

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
        { totalPagar !== 0 ? (
          <h4 className='total'>Total: USD $ - {totalPagar}</h4>
        ) : (
          null
        )}
      
      </aside>
   
    </>
  )
}
