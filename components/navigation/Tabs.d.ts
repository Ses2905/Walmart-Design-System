import * as React from 'react';

export interface TabItem {
  id: string;
  label: string;
  /** Optional count pill after the label. */
  count?: number;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  /** Controlled active tab id. */
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
}

/** Underline tab bar; active tab is navy with a True-Blue underline. */
export declare function Tabs(props: TabsProps): JSX.Element;
