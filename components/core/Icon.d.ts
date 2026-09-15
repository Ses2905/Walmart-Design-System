import * as React from 'react';

/** Names of every solid-fill functional icon (variant="solid", the default). */
export type IconName =
  | 'add-to-cart' | 'bag' | 'cart' | 'chat' | 'checkmark' | 'clock' | 'close'
  | 'coupon' | 'credit-card' | 'download' | 'edit' | 'fast-shipping' | 'favorite'
  | 'filter' | 'gift' | 'globe' | 'grid' | 'help' | 'home' | 'lists' | 'location'
  | 'lock' | 'mail' | 'minus' | 'money' | 'more' | 'notification' | 'pharmacy'
  | 'photo' | 'pick-up' | 'plus' | 'rating' | 'receipt' | 'reorder' | 'return'
  | 'search' | 'settings' | 'share' | 'shipping' | 'sign-in';

/**
 * Names of every line-style outline icon (variant="outline"). A separate name
 * space from IconName — several concepts (bell, cart, clock, heart, lock,
 * search…) exist in both styles under different names.
 */
export type IconOutlineName =
  | 'accessibility' | 'account' | 'adjust' | 'apparel-outline' | 'arrow-left'
  | 'arrow-right' | 'audio' | 'bag-outline' | 'bike' | 'cafe' | 'calendar'
  | 'camera-outline' | 'cart-outline' | 'categories' | 'chat-outline' | 'checklist'
  | 'clock-outline' | 'credit-card-outline' | 'current-location' | 'customer-service'
  | 'delivery' | 'document' | 'dollar' | 'download-outline' | 'ev-charging' | 'exit'
  | 'family' | 'favorite-outline' | 'featured' | 'fire-safety' | 'gift-outline'
  | 'grid-outline' | 'home-outline' | 'home-security' | 'id-badge' | 'info'
  | 'lock-outline' | 'log-out' | 'map' | 'member' | 'mobile' | 'no-parking'
  | 'no-pets' | 'no-smoking' | 'notification-outline' | 'package' | 'parking'
  | 'phone' | 'protection-plan' | 'qr-code' | 'receipt-outline' | 'refresh'
  | 'restroom' | 'restroom-men' | 'restroom-women' | 'return-outline' | 'savings'
  | 'search-outline' | 'security-camera' | 'storefront' | 'thumbs-down' | 'thumbs-up'
  | 'to-go' | 'tracking' | 'truck' | 'upload-outline' | 'verified' | 'wallet';

export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  /** Which icon to render, from the active variant's name space. */
  name: IconName | IconOutlineName;
  /** Square size in px. Default 24. */
  size?: number;
  /** Explicit color; defaults to inherited currentColor. */
  color?: string;
  /** Accessible label. When omitted the icon is decorative (aria-hidden). */
  label?: string;
  /** Icon style/name space to draw `name` from. Default 'solid'. */
  variant?: 'solid' | 'outline';
}

/**
 * Walmart functional icon — single-weight icons on a shared square grid
 * that inherit color and scale crisply. `variant="solid"` (default) is the
 * original filled-glyph set; `variant="outline"` is the line-style set.
 */
export declare function Icon(props: IconProps): JSX.Element;
