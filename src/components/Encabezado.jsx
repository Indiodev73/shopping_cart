import { Link } from 'react-router-dom'
import { Filtros } from './Filtros'

export function Encabezado() {
  return (
    <header>
      <Link to='/' className='link-style'>
        <h1>Carrito de Compras 🛒</h1>
      </Link>
      <Filtros />
    </header>
  )
}
