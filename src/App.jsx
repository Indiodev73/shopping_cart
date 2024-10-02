import { Footer } from './components/Footer'
import { Carrito } from './components/Carrito'
import { Detalle } from './components/Detalle'
import { useFiltro } from './hooks/useFiltro'
import { Productos } from './components/Productos'
import { Encabezado } from './components/Encabezado'
import { useProducto } from './hooks/useProductos'
import { CarritoProvider } from './context/CarritoContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const { productos } = useProducto()
  const { filtersProducts } = useFiltro()

  const productoFiltrado = filtersProducts(productos)

  return (
    <CarritoProvider>
      <BrowserRouter>
        <Encabezado />
        <Carrito />
        <Routes>
          <Route
            path='/'
            element={<Productos productos={productoFiltrado} />}
          />
          <Route
            path='/detail/:productId'
            element={<Detalle productos={productoFiltrado} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App
