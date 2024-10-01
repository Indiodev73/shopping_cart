import { Footer } from './components/Footer'
import { Carrito } from './components/Carrito'
import { useFiltro } from './hooks/useFiltro'
import { Productos } from './components/Productos'
import { Encabezado } from './components/Encabezado'
import { useProducto } from './hooks/useProductos'
import { CarritoProvider } from './context/CarritoContext'

function App() {
  const { productos } = useProducto()
  const { filtersProducts } = useFiltro()

  const productoFiltrado = filtersProducts(productos)

  return (
    <CarritoProvider>
      <Encabezado />
      <Carrito />
      <Productos productos={productoFiltrado} />
      <Footer />
    </CarritoProvider>
  )
}

export default App
