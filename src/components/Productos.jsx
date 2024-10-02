import '../style/productos.css'
import { useCarrito } from '../hooks/useCarrito'
import { useNavigate } from 'react-router-dom'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function Productos({ productos }) {

  const { carrito, eliminarDelCarrito, agregarAlCarrito } = useCarrito()
  const navigate = useNavigate()

  const chequearProductoEnCarrito = (prod) => {
    return carrito.some((item) => item.id === prod.id)
  }


  return (
    <main className='products'>
      <ul>
        {productos?.length > 0 ? (
          productos?.slice(0, 10).map((prod) => {
            const estaEnElCarrito = chequearProductoEnCarrito(prod)

            return (
              <li key={prod.id}>
                <div>{prod.title}</div>
                <img src={prod.image} alt={prod.title} onDoubleClick={() => navigate(`/detail/${prod.id}`)}/>
                <div>
                  <div>{prod.category}</div>
                  <strong>${prod.price}</strong>
                </div>
                <div>
                  <button style={{ backgroundColor: estaEnElCarrito ? 'red' : '#09f'}} onClick={() => {
                    estaEnElCarrito
                    ? eliminarDelCarrito(prod)
                    : agregarAlCarrito(prod)
                  }}>
                    { estaEnElCarrito ? <RemoveFromCartIcon /> : <AddToCartIcon /> }
                  </button>
                </div>
              </li>
            )
          })
        ) : (
          <p>Sin Respuesta</p>
        )}
      </ul>
    </main>
  )
}
