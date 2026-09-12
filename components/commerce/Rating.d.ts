import * as React from 'react';

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–5, supports halves. */
  value?: number;
  /** Review count shown in blue parentheses. */
  count?: number;
  /** Star size in px. Default 16. */
  size?: number;
  /** Show the numeric value before the count. */
  showValue?: boolean;
}

/** Read-only star rating in Everyday Blue with optional review count. */
export declare function Rating(props: RatingProps): JSX.Element;
