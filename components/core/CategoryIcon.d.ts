import * as React from 'react';

/** Names of every category (two-tone merchandising) icon. */
export type CategoryIconName =
  | 'auto' | 'auto-care' | 'baby' | 'bakery' | 'basket' | 'beauty' | 'books'
  | 'camping-outdoors' | 'cell-phones' | 'clothing' | 'delivery-van' | 'drinkware'
  | 'electronics' | 'featured-brand' | 'garden-center' | 'gifts' | 'greeting-cards'
  | 'grocery' | 'hardware' | 'home-decor' | 'home-improvement' | 'household-essentials'
  | 'money-services' | 'movies-tv' | 'music' | 'office-school' | 'personal-care'
  | 'pets' | 'photo-center' | 'protection-plans' | 'registry' | 'salon-services'
  | 'scan-and-go' | 'seasonal' | 'shop' | 'store-locator' | 'toys' | 'video-games';

export interface CategoryIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Which category icon to render. */
  name: CategoryIconName;
  /** Square size in px. Default 40. */
  size?: number;
  /** Use the art-directed dark-background colorway. Default false. */
  reverse?: boolean;
  /** Accessible label. When omitted the icon is decorative (aria-hidden). */
  label?: string;
}

/**
 * Walmart category icon — two-tone merchandising illustration for category
 * tiles and browsing (not an inline UI glyph like Icon).
 */
export declare function CategoryIcon(props: CategoryIconProps): JSX.Element;
