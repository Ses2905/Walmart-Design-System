Data table for campaign, ad group, and keyword lists. Sunken header row, row hover, and numeric columns rendered in tabular Everyday Sans Mono via `data-numeric`.

```jsx
<Table
  columns={[
    { key: 'name', label: 'Campaign' },
    { key: 'status', label: 'Status', render: (row) => <Badge variant={row.statusVariant}>{row.status}</Badge> },
    { key: 'budget', label: 'Daily budget', numeric: true },
    { key: 'impressions', label: 'Impressions', numeric: true },
    { key: 'ctr', label: 'CTR', numeric: true },
  ]}
  rows={[
    { name: 'Back to School', status: 'Active', statusVariant: 'success', budget: '$450', impressions: '128,402', ctr: '2.4%' },
    { name: 'Home Refresh', status: 'Under review', statusVariant: 'info', budget: '$200', impressions: '54,110', ctr: '1.8%' },
  ]}
  getRowKey={(row) => row.name}
/>
```
