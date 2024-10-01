import { useContext } from 'react'
import { FiltroContext } from '../context/filtroContext'

export function useFiltro() {
  const { filters, setFilters } = useContext(FiltroContext)

  if ( filters === undefined ) {
    throw new Error('useFiltro debe usarse dentro de un FiltroProvider')
  }

  const filtersProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filtersProducts, filters, setFilters }
}
