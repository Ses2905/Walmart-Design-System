import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Inner padding (px or CSS value). Default 20. */
  padding?: number | string;
  /** Hover elevation + pointer cursor. */
  interactive?: boolean;
  /** Resting card shadow. */
  elevated?: boolean;
}

/** White, softly-rounded surface container for content modules. */
export declare function Card(props: CardProps): JSX.Element;
