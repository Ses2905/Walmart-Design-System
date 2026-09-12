import * as React from 'react';
import { IconName } from './Icon';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label above the control. */
  label?: string;
  /** Helper text below the control. */
  hint?: string;
  /** Error message; turns the field red and replaces the hint. */
  error?: string;
  /** Leading functional icon (e.g. `search`, `mail`). */
  iconLeft?: IconName;
  size?: 'md' | 'lg';
  /** Style override for the outer wrapper. */
  containerStyle?: React.CSSProperties;
}

/** Rounded text input with optional label, leading icon, hint, and error state. */
export declare function Input(props: InputProps): JSX.Element;
