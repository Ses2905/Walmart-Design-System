import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * - `neutral` grey label
   * - `info` blue tint
   * - `success` green (in stock / savings)
   * - `rollback` Everyday Blue (the classic Walmart price flag)
   * - `clearance` red fill
   * - `brand` Bentonville navy
   * - `outline` bordered
   */
  variant?: 'neutral' | 'info' | 'success' | 'rollback' | 'clearance' | 'brand' | 'outline';
  size?: 'sm' | 'md';
}

/** Small status/label pill (delivery promise, stock, Rollback, Clearance). */
export declare function Badge(props: BadgeProps): JSX.Element;
