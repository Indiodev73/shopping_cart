import { useState } from 'react'
import { createContext } from 'react'

export const FiltroContext = createContext()

export function FiltroProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  return (
    <FiltroContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltroContext.Provider>
  )
}
