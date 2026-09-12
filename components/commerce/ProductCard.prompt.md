The core Walmart merchandising tile: square image well, price-first hierarchy, rating, fulfillment promise, and a pill Add button.

```jsx
<ProductCard
  image="/p.jpg" brand="Great Value" title="Whole Milk, 1 Gallon"
  price={3.12} rating={4.5} reviews={1284}
  badge={{ label: 'Rollback', variant: 'rollback' }}
  onAdd={() => {}}
/>
```

Composes Price, Rating, Badge, Icon. Props: `image`, `title`, `brand`, `price`, `was`, `rating`, `reviews`, `badge`, `fulfillment`, `sponsored`, `onAdd`. Heart toggles save-to-list locally.
