import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../CartSlice'
import { plants } from '../data/plants'

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const categories = [...new Set(plants.map(plant => plant.category))]
  const isInCart = id => cartItems.some(item => item.id === id)

  return (
    <main className="plants-page">
      <header className="page-header">
        <h1>Our Plants</h1>
        <p>Find the perfect houseplants for your home.</p>
      </header>

      {categories.map(category => (
        <section className="category-section" key={category}>
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <article className="plant-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="plant-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <strong>${plant.price.toFixed(2)}</strong>
                    <button
                      type="button"
                      disabled={isInCart(plant.id)}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  )
}
