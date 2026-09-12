import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Walmart text input. Rounded, generous height, True-Blue focus ring.
 * Supports a leading icon (e.g. search) and error state.
 */
export function Input({ label, hint, error, iconLeft, size = 'md', id, style, containerStyle, ...rest }) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focus, setFocus] = React.useState(false);
  const sizes = { md: { h: 48, font: 16, pad: 16 }, lg: { h: 56, font: 17, pad: 18 } };
  const s = sizes[size] || sizes.md;
  const borderColor = error ? 'var(--wm-error)' : focus ? 'var(--wm-true-blue)' : 'var(--border-default)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-sans)', ...containerStyle }}>
      {label && <label htmlFor={inputId} style={{ fontSize: 14, fontWeight: 'var(--fw-medium)', color: 'var(--text-primary)' }}>{label}</label>}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, height: s.h, padding: `0 ${s.pad}px`,
        background: 'var(--wm-white)', border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
        boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      }}>
        {iconLeft && <Icon name={iconLeft} size={20} color="var(--wm-gray-500)" />}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'inherit', fontSize: s.font, color: 'var(--text-primary)', minWidth: 0, ...style }}
          {...rest}
        />
      </div>
      {error
        ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--wm-error)' }}>{error}</span>
        : hint ? <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>{hint}</span> : null}
    </div>
  );
}
