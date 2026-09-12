import * as React from 'react';

export interface ProductCardBadge {
  label: string;
  variant?: 'rollback' | 'clearance' | 'success' | 'info' | 'brand' | 'neutral';
}

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Product image URL (contained in a square well). */
  image?: string;
  /** Product title (clamped to 2 lines). */
  title: string;
  /** Optional bold brand prefix. */
  brand?: string;
  /** Current price. */
  price: number;
  /** Strikethrough "was" price. */
  was?: number;
  /** Star rating 0–5. */
  rating?: number;
  /** Review count. */
  reviews?: number;
  /** Price flag, e.g. { label: 'Rollback', variant: 'rollback' }. */
  badge?: ProductCardBadge;
  /** Fulfillment line. Defaults to a free-shipping promise. */
  fulfillment?: string;
  /** Show the "Sponsored" eyebrow. */
  sponsored?: boolean;
  /** Add-to-cart handler. */
  onAdd?: () => void;
}

/**
 * Walmart product tile — square image, price-first hierarchy, rating,
 * fulfillment promise, save-to-list heart, and pill Add button.
 * @startingPoint section="Commerce" subtitle="The core product merchandising tile" viewport="280x460"
 */
export declare function ProductCard(props: ProductCardProps): JSX.Element;
