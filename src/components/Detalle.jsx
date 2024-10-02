import '../style/detalle.css'
import { useParams } from 'react-router-dom'

export function Detalle({ productos }) {
  const { productId } = useParams()
  // console.log({productId})
  const cambiarANumberId = Number(productId)
  // console.log({cambiarANumberId})

  const obtenerProductoPorId = productos.find(
    (item) => item.id === cambiarANumberId
  )

  return (
    <div className='detalle'>
      <h3>Detalles del Producto</h3>
      <h4>{obtenerProductoPorId.category}</h4>
      <h4>{obtenerProductoPorId.title}</h4>
      <img src={obtenerProductoPorId.image} alt={obtenerProductoPorId.title} />
      <h5>{obtenerProductoPorId.description}</h5>
      <h3>
        Precio: $ {obtenerProductoPorId.price} - Rate: ⭐
        {obtenerProductoPorId.rating.rate} - Cantidad:{' '}
        {obtenerProductoPorId.rating.count}
      </h3>
      <h4></h4>
    </div>
  )
}
