import * as React from 'react';
import { IconName } from './Icon';

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  selected?: boolean;
  /** Optional leading icon. */
  icon?: IconName;
  /** When provided, renders a close affordance and calls this on click. */
  onRemove?: () => void;
  onClick?: () => void;
}

/** Pill chip for filters/facets; navy fill when selected, optional removable close. */
export declare function Chip(props: ChipProps): JSX.Element;
