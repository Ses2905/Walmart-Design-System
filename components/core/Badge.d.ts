import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * - `neutral` grey label (Draft)
   * - `info` blue tint (Under review)
   * - `success` green (Active)
   * - `rollback` Everyday Blue (an optimized/highlight flag)
   * - `clearance` red fill (Rejected)
   * - `brand` Bentonville navy (Sponsored)
   * - `outline` bordered (Ended)
   */
  variant?: 'neutral' | 'info' | 'success' | 'rollback' | 'clearance' | 'brand' | 'outline';
  size?: 'sm' | 'md';
}

/** Small status/label pill for campaign and ad group state. */
export declare function Badge(props: BadgeProps): JSX.Element;
