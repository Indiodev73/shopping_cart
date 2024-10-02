
export function ItemCarrito ({
  price,
  title,
  quantity,
  image,
  agregarAlCarrito,
})
 {
  
  return (
    <>
    <li>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={agregarAlCarrito}>+</button>
      </footer>
    </li>
    
    </>
  )
}
