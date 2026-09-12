import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * Walmart button. Pill-shaped by default. Primary = True Blue fill,
 * the workhorse CTA across the experience.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block = false,
  disabled = false,
  type = 'button',
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: { height: 36, padding: '0 16px', font: 14, gap: 6, icon: 16 },
    md: { height: 48, padding: '0 24px', font: 16, gap: 8, icon: 20 },
    lg: { height: 56, padding: '0 32px', font: 17, gap: 8, icon: 22 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: block ? 'flex' : 'inline-flex',
    width: block ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: 'var(--font-sans)',
    fontSize: s.font,
    fontWeight: 'var(--fw-bold)',
    lineHeight: 1,
    letterSpacing: 'var(--ls-snug)',
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast), color var(--dur-fast)',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  };

  const variants = {
    primary: { background: 'var(--action-primary-bg)', color: 'var(--action-primary-text)' },
    secondary: { background: 'var(--wm-white)', color: 'var(--wm-bentonville-blue)', borderColor: 'var(--wm-gray-900)' },
    spark: { background: 'var(--wm-everyday-blue)', color: 'var(--wm-bentonville-blue)' },
    ghost: { background: 'transparent', color: 'var(--wm-true-blue)' },
    ondark: { background: 'var(--wm-white)', color: 'var(--wm-bentonville-blue)' },
  };

  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  let hoverStyle = {};
  if (hover && !disabled) {
    if (variant === 'primary') hoverStyle = { background: 'var(--action-primary-bg-hover)' };
    else if (variant === 'spark') hoverStyle = { background: 'var(--wm-sky-blue)' };
    else if (variant === 'secondary') hoverStyle = { background: 'var(--wm-gray-50)' };
    else if (variant === 'ghost') hoverStyle = { background: 'var(--wm-blue-50)' };
    else if (variant === 'ondark') hoverStyle = { background: 'var(--wm-gray-100)' };
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...v, ...hoverStyle, ...style }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
