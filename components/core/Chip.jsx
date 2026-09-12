import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Filter / selection chip. Used for facets, applied filters, and quick
 * category pills. Selected = navy fill; removable shows a close affordance.
 */
export function Chip({ children, selected = false, icon, onRemove, onClick, disabled, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const bg = selected ? 'var(--wm-bentonville-blue)' : hover && !disabled ? 'var(--wm-gray-100)' : 'var(--wm-white)';
  const color = selected ? '#fff' : 'var(--text-primary)';
  const border = selected ? 'var(--wm-bentonville-blue)' : 'var(--border-default)';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7, height: 38, padding: '0 16px',
        background: bg, color, border: `1.5px solid ${border}`, borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 'var(--fw-medium)',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, whiteSpace: 'nowrap',
        transition: 'background var(--dur-fast), border-color var(--dur-fast)',
        ...style,
      }}
      {...rest}
    >
      {icon && <Icon name={icon} size={16} />}
      {children}
      {onRemove && (
        <span
          role="button"
          tabIndex={0}
          aria-label="Remove"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              onRemove();
            }
          }}
          style={{ display: 'inline-flex', marginRight: -4 }}
        >
          <Icon name="close" size={14} />
        </span>
      )}
    </button>
  );
}
