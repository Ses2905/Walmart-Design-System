import * as React from 'react';

export interface TableColumn<T = Record<string, unknown>> {
  key: string;
  label: string;
  /** Right-align the column. Implied by `numeric`. */
  align?: 'left' | 'right';
  /** Render in Everyday Sans Mono with tabular figures and right-align. */
  numeric?: boolean;
  /** Custom cell renderer, e.g. a status Badge. Defaults to `row[key]`. */
  render?: (row: T) => React.ReactNode;
}

export interface TableProps<T = Record<string, unknown>>
  extends React.HTMLAttributes<HTMLDivElement> {
  columns: TableColumn<T>[];
  rows: T[];
  /** Stable row key; defaults to array index. */
  getRowKey?: (row: T) => string | number;
}

/** Data table with sunken header, row hover, and tabular numeric columns. */
export declare function Table<T = Record<string, unknown>>(props: TableProps<T>): JSX.Element;
