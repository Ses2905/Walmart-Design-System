import * as React from 'react';
import { IconName } from './Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style.
   * - `primary` True Blue fill (default CTA)
   * - `secondary` white with dark outline
   * - `spark` Everyday Blue (Sparky/AI-assist emphasis)
   * - `ghost` text-only blue
   * - `ondark` white pill for dark backgrounds
   */
  variant?: 'primary' | 'secondary' | 'spark' | 'ghost' | 'ondark';
  /** Height/padding preset. Default `md` (48px). */
  size?: 'sm' | 'md' | 'lg';
  /** Functional icon name rendered before the label. */
  iconLeft?: IconName;
  /** Functional icon name rendered after the label. */
  iconRight?: IconName;
  /** Stretch to full container width. */
  block?: boolean;
}

/**
 * Pill-shaped Walmart button. Primary uses True Blue; `spark` flags a
 * Sparky/AI-assist moment.
 * @startingPoint section="Core" subtitle="Pill buttons in every variant & size" viewport="700x220"
 */
export declare function Button(props: ButtonProps): JSX.Element;
