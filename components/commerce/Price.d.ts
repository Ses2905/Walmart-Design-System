import * as React from 'react';

export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current price, e.g. 12.98. */
  value: number;
  /** Strikethrough "was" price; renders comparison + auto savings. */
  was?: number;
  /** Override the computed savings amount. */
  savings?: number;
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center';
}

/**
 * Supermarket-style price: raised dollar sign + cents, black dollars,
 * optional strikethrough "was" and green savings line.
 */
export declare function Price(props: PriceProps): JSX.Element;
