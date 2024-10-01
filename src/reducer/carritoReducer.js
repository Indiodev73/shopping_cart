export const carritoInitialState =
  JSON.parse(window.localStorage.getItem('carrito')) || []

  export const CARRITO_ACTION_TYPES = {
    AGREGAR_AL_CARRITO: 'AGREGAR_AL_CARRITO',
    ELIMINAR_DEL_CARRITO: 'ELIMINAR_DEL_CARRITO',
    LIMPIAR_CARRITO: 'LIMPIAR_CARRITO',
  }

  export const actualizarLocalStorage = (state) => {
    window.localStorage.setItem('carrito', JSON.stringify(state))
  }

  export const cartRreducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CARRITO_ACTION_TYPES.AGREGAR_AL_CARRITO: {
      const { id } = actionPayload

      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        // una forma usando structureClone
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        actualizarLocalStorage(newState)
        return newState
      }
      ////////// guardando en el localStorage //////////

      //return [
      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1,
        },
      ]

      actualizarLocalStorage(newState)
      return newState
      ////////// guardando en el localStorage //////////
    }
    case CARRITO_ACTION_TYPES.ELIMINAR_DEL_CARRITO: {
      const { id } = actionPayload
      // return state.filter((item) => item.id !== id)
      ////////// guardando en el localStorage //////////
      const newState = state.filter((item) => item.id !== id)
      actualizarLocalStorage(newState)
      return newState
      ////////// guardando en el localStorage //////////
    }
    case CARRITO_ACTION_TYPES.LIMPIAR_CARRITO: {
       ////////// guardando en el localStorage //////////
       actualizarLocalStorage(carritoInitialState)
       ////////// guardando en el localStorage //////////

      return carritoInitialState
    }
  }

  return state
}