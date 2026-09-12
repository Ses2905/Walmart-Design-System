import * as React from 'react';

/** Names of every functional icon shipped with the Walmart design system. */
export type IconName =
  | 'add-to-cart' | 'bag' | 'cart' | 'chat' | 'checkmark' | 'clock' | 'close'
  | 'coupon' | 'credit-card' | 'download' | 'edit' | 'fast-shipping' | 'favorite'
  | 'filter' | 'gift' | 'globe' | 'grid' | 'help' | 'home' | 'lists' | 'location'
  | 'lock' | 'mail' | 'minus' | 'money' | 'more' | 'notification' | 'pharmacy'
  | 'photo' | 'pick-up' | 'plus' | 'rating' | 'receipt' | 'reorder' | 'return'
  | 'search' | 'settings' | 'share' | 'shipping' | 'sign-in';

export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  /** Which functional icon to render. */
  name: IconName;
  /** Square size in px. Default 24. */
  size?: number;
  /** Explicit color; defaults to inherited currentColor. */
  color?: string;
  /** Accessible label. When omitted the icon is decorative (aria-hidden). */
  label?: string;
}

/**
 * Walmart functional icon — solid-fill, single-weight icons on a shared
 * square grid that inherit color and scale crisply.
 */
export declare function Icon(props: IconProps): JSX.Element;
