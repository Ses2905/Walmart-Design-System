import React from 'react';
import { Icon } from './Icon.jsx';

/** Walmart checkbox — rounded square, True-Blue when checked. */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled, id, style, ...rest }) {
  const reactId = React.useId();
  const cbId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = (e) => { if (disabled) return; if (!isControlled) setInternal(e.target.checked); onChange && onChange(e); };
  return (
    <label htmlFor={cbId} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, fontFamily: 'var(--font-sans)', ...style }}>
      <input id={cbId} type="checkbox" checked={on} onChange={toggle} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} {...rest} />
      <span style={{
        width: 22, height: 22, flex: 'none', borderRadius: 6,
        border: `1.5px solid ${on ? 'var(--wm-true-blue)' : 'var(--border-default)'}`,
        background: on ? 'var(--wm-true-blue)' : 'var(--wm-white)',
        display: 'grid', placeItems: 'center', color: '#fff',
        transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      }}>
        {on && <Icon name="checkmark" size={14} color="#fff" />}
      </span>
      {label && <span style={{ fontSize: 15, color: 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
