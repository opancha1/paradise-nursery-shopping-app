import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItem } from '../CartSlice'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <main className="cart-page">
      <header className="page-header">
        <h1>Shopping Cart</h1>
        <p>Review and manage your selected plants.</p>
      </header>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <Link className="primary-button" to="/plants">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {items.map(item => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>Item total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button type="button" onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  </div>
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>

          <section className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button
              type="button"
              className="checkout-button"
              onClick={() => window.alert('Coming Soon!')}
            >
              Checkout
            </button>
            <Link className="secondary-button" to="/plants">
              Continue Shopping
            </Link>
          </section>
        </>
      )}
    </main>
  )
}
