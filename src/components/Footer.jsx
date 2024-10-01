import '../style/footer.css'

export function Footer() {
  // const { filters } = useFilters()
 // const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>
        José María Asial Diaz ⚛️ － <span>@indiodev</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {/* { JSON.stringify(filters, null, 2) } */}
      {/* { JSON.stringify(cart, null, 2) } */}
    </footer>
  )
}