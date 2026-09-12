// Shared demo catalog for the Walmart storefront UI kit.
// Product "images" use clean blue-only placeholder tiles (navy line icon on a
// sky-blue square) — honest stand-ins, since the asset package ships no product
// photography. Swap `img` for real product photos when available.
window.WM_PRODUCTS = [
  { id: 'milk',    brand: 'Great Value', title: 'Whole Vitamin D Milk, 1 Gallon, 128 fl oz', price: 3.12, rating: 4.5, reviews: 1284, img: '../../assets/placeholders/bag.svg', cat: 'Grocery', badge: { label: 'Rollback', variant: 'rollback' }, fulfillment: 'Pickup tomorrow · Free shipping' },
  { id: 'eggs',    brand: 'Great Value', title: 'Large White Eggs, 12 Count Grade A', price: 2.34, rating: 4.5, reviews: 980, img: '../../assets/placeholders/cart.svg', cat: 'Grocery', fulfillment: 'Pickup today' },
  { id: 'bread',   brand: "Nature's Own", title: '100% Whole Wheat Sandwich Bread, 20 oz', price: 2.98, rating: 4, reviews: 412, img: '../../assets/placeholders/bag.svg', cat: 'Grocery', fulfillment: 'Free shipping, arrives in 2 days' },
  { id: 'tv',      brand: 'onn.', title: '50" Class 4K UHD (2160p) LED Roku Smart TV', price: 198.00, was: 248.00, rating: 4.5, reviews: 3940, img: '../../assets/placeholders/grid.svg', cat: 'Electronics', badge: { label: 'Best seller', variant: 'info' }, fulfillment: 'Free shipping, arrives tomorrow', sponsored: true },
  { id: 'towels',  brand: 'Mainstays', title: '7-Piece Bath Towel Set, Quick-Dry Soft Cotton', price: 14.88, was: 22.00, rating: 4, reviews: 612, img: '../../assets/placeholders/home.svg', cat: 'Home', badge: { label: 'Clearance', variant: 'clearance' }, fulfillment: 'Free shipping, arrives in 3 days' },
  { id: 'shampoo', brand: 'Equate', title: 'Daily Moisture Shampoo & Conditioner, 2-Pack', price: 6.44, rating: 4.5, reviews: 2210, img: '../../assets/placeholders/gift.svg', cat: 'Beauty', fulfillment: 'Pickup today' },
  { id: 'blocks',  brand: 'Play Day', title: 'Building Bricks Creative Box, 500 Pieces', price: 12.97, rating: 4.5, reviews: 1530, img: '../../assets/placeholders/gift.svg', cat: 'Toys', badge: { label: 'Rollback', variant: 'rollback' }, fulfillment: 'Free shipping, arrives in 2 days' },
  { id: 'dogfood', brand: 'Ol\u2019 Roy', title: 'Complete Nutrition Dry Dog Food, 50 lb Bag', price: 22.86, rating: 4.5, reviews: 4120, img: '../../assets/placeholders/favorite.svg', cat: 'Pets', fulfillment: 'Free shipping, arrives in 2 days' },
  { id: 'jeans',   brand: 'Wrangler', title: "Men's Relaxed Fit Jeans with Flex", price: 19.98, rating: 4, reviews: 860, img: '../../assets/placeholders/bag.svg', cat: 'Fashion', fulfillment: 'Free shipping, arrives in 3 days' },
  { id: 'oil',     brand: 'SuperTech', title: 'Full Synthetic Motor Oil 5W-30, 5 Quart', price: 17.97, rating: 4.5, reviews: 1990, img: '../../assets/placeholders/settings.svg', cat: 'Auto', fulfillment: 'Pickup today' },
  { id: 'plant',   brand: 'Expert Gardener', title: 'Potting Soil Mix, 1 Cubic Foot', price: 8.97, rating: 4, reviews: 340, img: '../../assets/placeholders/globe.svg', cat: 'Garden', fulfillment: 'Free shipping, arrives in 2 days' },
  { id: 'vitamins',brand: 'Equate', title: 'Daily Multivitamin Tablets, 200 Count', price: 9.88, rating: 4.5, reviews: 5120, img: '../../assets/placeholders/pharmacy.svg', cat: 'Health', badge: { label: 'Rollback', variant: 'rollback' }, fulfillment: 'Pickup today' },
];

window.WM_CATEGORIES = [
  { label: 'Grocery', img: '../../assets/placeholders/cart.svg' },
  { label: 'Electronics', img: '../../assets/placeholders/grid.svg' },
  { label: 'Home', img: '../../assets/placeholders/home.svg' },
  { label: 'Beauty', img: '../../assets/placeholders/gift.svg' },
  { label: 'Toys', img: '../../assets/placeholders/gift.svg' },
  { label: 'Pharmacy', img: '../../assets/placeholders/pharmacy.svg' },
  { label: 'Fashion', img: '../../assets/placeholders/bag.svg' },
  { label: 'Pets', img: '../../assets/placeholders/favorite.svg' },
  { label: 'Auto', img: '../../assets/placeholders/settings.svg' },
  { label: 'Garden', img: '../../assets/placeholders/globe.svg' },
];
