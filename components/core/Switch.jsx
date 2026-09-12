import React from 'react';

/** Walmart toggle switch — True-Blue track when on. */
export function Switch({ checked, defaultChecked, onChange, disabled, label, id, style, ...rest }) {
  const reactId = React.useId();
  const swId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = (e) => { if (disabled) return; if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };
  return (
    <label htmlFor={swId} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-sans)', ...style }}>
      <input id={swId} type="checkbox" checked={on} onChange={toggle} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} {...rest} />
      <span style={{
        position: 'relative', width: 48, height: 28, flex: 'none', borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--wm-true-blue)' : 'var(--wm-gray-300)',
        transition: 'background var(--dur-base) var(--ease-standard)',
      }}>
        <span style={{
          position: 'absolute', top: 3, left: on ? 23 : 3, width: 22, height: 22, borderRadius: '50%',
          background: '#fff', boxShadow: 'var(--shadow-sm)',
          transition: 'left var(--dur-base) var(--ease-standard)',
        }} />
      </span>
      {label && <span style={{ fontSize: 15, color: 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
