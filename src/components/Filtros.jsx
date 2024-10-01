import '../style/filtros.css'
import { useId } from 'react'
import { useFiltro } from '../hooks/useFiltro'

export function Filtros() {
  const { filters, setFilters } = useFiltro()

  const filtoPorCategoriaId = useId()
  const filtroMinPrecioId = useId()

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={filtroMinPrecioId}>Precio a partir de: </label>
        <input
          type='range'
          id={filtroMinPrecioId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={filtoPorCategoriaId}>Categoría</label>
        <select id={filtoPorCategoriaId} onChange={handleChangeCategory}>
          <option value='all'>todas</option>
          <option value="men's clothing">ropa de hombre</option>
          <option value="women's clothing">ropa de mujer</option>
          <option value='electronics'>electrónica</option>
          <option value='jewelery'>joyas</option>
        </select>
      </div>
    </section>
  )
}
