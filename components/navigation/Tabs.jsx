import React from 'react';

/**
 * Underline tab bar. Active tab is navy text with a True-Blue underline —
 * Walmart's standard pattern for switching content panes.
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, style, ...rest }) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = isControlled ? value : internal;
  const select = (id) => { if (!isControlled) setInternal(id); onChange && onChange(id); };
  return (
    <div role="tablist" style={{ display: 'flex', gap: 28, borderBottom: '1px solid var(--border-subtle)', fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            onClick={() => select(t.id)}
            style={{
              position: 'relative', appearance: 'none', background: 'none', border: 'none', cursor: 'pointer',
              padding: '14px 0', fontFamily: 'inherit', fontSize: 'var(--text-md)',
              fontWeight: on ? 'var(--fw-bold)' : 'var(--fw-medium)',
              color: on ? 'var(--wm-bentonville-blue)' : 'var(--text-secondary)',
              borderBottom: `3px solid ${on ? 'var(--wm-true-blue)' : 'transparent'}`,
              marginBottom: -1, transition: 'color var(--dur-fast), border-color var(--dur-fast)',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}
          >
            {t.label}
            {t.count != null && (
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-bold)', color: on ? 'var(--wm-true-blue)' : 'var(--text-tertiary)', background: on ? 'var(--wm-blue-50)' : 'var(--wm-gray-100)', borderRadius: 'var(--radius-pill)', padding: '1px 8px' }}>{t.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
