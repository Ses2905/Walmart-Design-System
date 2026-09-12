import React from 'react';

/**
 * Data table — campaign, ad group, and keyword lists. Numeric columns
 * (impressions, clicks, spend) get `data-numeric` so tokens/base.css's
 * `.wm-numeric` rule renders them in Everyday Sans Mono with tabular
 * figures, matching the rest of the system's numeral treatment.
 */
export function Table({ columns = [], rows = [], getRowKey, style, ...rest }) {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  return (
    <div
      style={{
        overflowX: 'auto',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...rest}
    >
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
        <thead>
          <tr style={{ background: 'var(--color-surface-sunken)' }}>
            {columns.map((col) => (
              <th
                key={col.key}
                style={{
                  textAlign: col.align === 'right' ? 'right' : 'left',
                  padding: '12px 16px',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 'var(--fw-bold)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--ls-wide)',
                  color: 'var(--text-secondary)',
                  borderBottom: '1px solid var(--border-subtle)',
                  whiteSpace: 'nowrap',
                }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={getRowKey ? getRowKey(row) : i}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx((h) => (h === i ? null : h))}
              style={{
                background: hoverIdx === i ? 'var(--color-surface-sunken)' : 'transparent',
                borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                transition: 'background var(--dur-fast)',
              }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  data-numeric={col.numeric || undefined}
                  style={{
                    textAlign: col.align === 'right' || col.numeric ? 'right' : 'left',
                    padding: '14px 16px',
                    color: 'var(--text-primary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
