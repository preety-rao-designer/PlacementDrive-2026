import { Marks, Check, Pin, Bag, Rupee, People, Clock } from './Icons.jsx'
import { COMPANIES } from '../data/companies.js'

const cx = (...a) => a.filter(Boolean).join(' ')

/* ---------------- Button ---------------- */
export function Btn({ variant = 'pri', size = 'md', block, className, children, ...rest }) {
  const variants = {
    pri: 'bg-gradient-to-b from-brand-2 to-brand text-white shadow-btn hover:brightness-110',
    sec: 'bg-surface text-ink border border-line-2 shadow-s1 hover:bg-surface-2',
    ghost: 'bg-transparent text-ink-2 border-none font-semibold hover:text-ink',
  }
  const sizes = { md: 'px-5 py-[15px] text-[15px] rounded-[14px]', sm: 'px-4 py-[10px] text-[13.5px] rounded-[11px]' }
  return (
    <button
      className={cx(
        'inline-flex items-center justify-center gap-2 font-bold tracking-[-.01em] font-sans',
        'transition-transform duration-100 ease-e active:scale-[.985]',
        'disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none',
        variants[variant], sizes[size], block && 'w-full flex', className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

/* ---------------- Card ---------------- */
export function Card({ tint, flush, className, children, ...rest }) {
  return (
    <div
      className={cx(
        'rounded-md',
        tint ? 'bg-surface-2' : 'bg-surface border border-line shadow-s1',
        flush ? 'p-0 overflow-hidden' : 'p-[18px]',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

/* ---------------- Pill ---------------- */
export function Pill({ tone = 'mute', dot, className, children }) {
  const tones = {
    brand: 'bg-brand-tint text-brand',
    good: 'bg-good-tint text-good',
    warn: 'bg-warn-tint text-warn',
    stop: 'bg-stop-tint text-stop',
    mute: 'bg-surface-3 text-ink-2',
  }
  return (
    <span className={cx('inline-flex items-center gap-1.5 rounded-full px-2.5 py-[5px] text-[11.5px] font-bold whitespace-nowrap', tones[tone], className)}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}

/* ---------------- Company logo ---------------- */
export function Logo({ company, size = 'md', dim, className }) {
  const c = typeof company === 'string' ? COMPANIES[company] : company
  const Mark = c && Marks[c.key]
  const sizes = { sm: 'w-[30px] h-[30px] rounded-[9px]', md: 'w-11 h-11 rounded-[13px]', lg: 'w-[60px] h-[60px] rounded-[18px]' }
  const padding = { sm: 'p-[6px]', md: 'p-[9px]', lg: 'p-3' }
  return (
    <div
      className={cx(
        'grid place-items-center flex-none',
        sizes[size],
        c?.logo ? cx('bg-white border border-black/10', padding[size]) : cx('bg-gradient-to-br', c?.gradient),
        dim && 'saturate-[.25] opacity-70',
        className
      )}
      aria-label={c?.name}
    >
      {c?.logo ? <img src={c.logo} alt="" className="w-full h-full object-contain" /> : Mark && <Mark />}
    </div>
  )
}

/* ---------------- Key/value row ---------------- */
export function Kv({ k, v }) {
  return (
    <div className="flex justify-between gap-3 py-[9px] text-[13.5px]">
      <span className="text-ink-2 flex-none">{k}</span>
      <span className="font-semibold text-right tracking-[-.01em]">{v}</span>
    </div>
  )
}

/* ---------------- Meta chips ---------------- */
const chipIcons = { ctc: Rupee, loc: Pin, seats: People, mode: Bag, exp: Clock }
export function MetaChips({ company, only }) {
  const items = (only || ['ctc', 'loc', 'seats', 'exp']).map((k) => ({
    k,
    Icon: chipIcons[k],
    label: k === 'seats' ? company.openings : company[k],
  }))
  return (
    <div className="flex flex-wrap gap-1.5 mt-2.5">
      {items.map(({ k, Icon, label }) => (
        <span key={k} className="inline-flex items-center gap-1.5 rounded-lg bg-surface-2 px-2.5 py-[5px] text-[11.5px] font-semibold text-ink-2">
          <Icon size={12} sw={2.4} className="text-ink-3" />
          {label}
        </span>
      ))}
    </div>
  )
}

/* ---------------- Checkbox ---------------- */
export function Checkbox({ checked, onClick, className }) {
  return (
    <span
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onClick(e))}
      className={cx(
        'relative w-6 h-6 rounded-lg border-2 flex-none cursor-pointer transition-all duration-150 ease-e',
        // invisible larger hit area, visible box stays 24px
        'before:content-[""] before:absolute before:-inset-3',
        checked ? 'bg-brand border-brand' : 'border-line-2',
        className
      )}
    >
      {checked && (
        <span className="absolute left-[7.5px] top-[3.5px] w-[5px] h-[10px] border-white border-r-2 border-b-2 rotate-45" />
      )}
    </span>
  )
}

/* ---------------- Date chip ---------------- */
export function DateChip({ day, month, tone = 'brand', className }) {
  const tones = {
    brand: 'bg-brand-tint text-brand border-brand-line',
    mute: 'bg-surface-2 text-ink-2 border-line',
    onDark: 'bg-white/[.16] text-white border-white/[.24]',
  }
  return (
    <div className={cx('w-[52px] h-14 rounded-[14px] border grid place-content-center text-center flex-none', tones[tone], className)}>
      <div className="text-xl font-extrabold tracking-[-.03em] leading-none">{day}</div>
      <div className="text-[10.5px] font-bold uppercase tracking-[.06em] mt-[3px]">{month}</div>
    </div>
  )
}

/* ---------------- Numbered steps ---------------- */
export function Steps({ items }) {
  return (
    <ol className="list-none">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3 py-[7px] text-[13.5px] text-ink-2 items-start">
          <span className="flex-none w-[22px] h-[22px] rounded-full bg-white text-ink text-[11px] font-extrabold grid place-items-center shadow-s1 mt-px">
            {i + 1}
          </span>
          {t}
        </li>
      ))}
    </ol>
  )
}

/* ---------------- Result mark ---------------- */
export function Mark({ tone = 'good', children, className }) {
  const tones = { good: 'bg-good-tint text-good', wait: 'bg-brand-tint text-brand', stop: 'bg-stop-tint text-stop' }
  return (
    <div className={cx('w-[72px] h-[72px] rounded-full grid place-items-center mx-auto mb-[18px] animate-pop', tones[tone], className)}>
      {children || <Check size={30} sw={2.4} />}
    </div>
  )
}

/* ---------------- Notice strip ---------------- */
export function Notice({ tone = 'stop', title, children, icon }) {
  const tones = {
    stop: 'bg-stop-tint border-stop/20 text-stop',
    warn: 'bg-warn-tint border-warn/20 text-warn',
  }
  return (
    <div className={cx('rounded-md border p-4 flex gap-3 items-start', tones[tone])}>
      <span className="flex-none mt-px">{icon}</span>
      <div className="text-ink">
        <div className="t3">{title}</div>
        <div className="b2 mt-[3px]">{children}</div>
      </div>
    </div>
  )
}

/* ---------------- Form field ---------------- */
export function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block mb-[7px] text-[12.5px] font-bold tracking-[-.01em]">{label}</span>
      {children}
    </label>
  )
}

const inputCls =
  'w-full font-sans text-[15px] font-medium text-ink px-[15px] py-[14px] rounded-[13px] border-[1.5px] border-line-2 bg-surface outline-none appearance-none transition placeholder:text-ink-3 placeholder:font-normal focus:border-brand focus:ring-4 focus:ring-brand-tint'

export const Input = (p) => <input className={inputCls} {...p} />
export const Select = ({ children, ...p }) => (
  <select className={cx(inputCls, 'pr-10 bg-[url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%238B8B9C\' stroke-width=\'3\' stroke-linecap=\'round\'%3e%3cpath d=\'m6 9 6 6 6-6\'/%3e%3c/svg%3e")] bg-no-repeat bg-[right_15px_center] bg-[length:14px]')} {...p}>
    {children}
  </select>
)

/* ---------------- Toast / snackbar ---------------- */
/** `fixed` covers the viewport (web); otherwise it fills its positioned parent (phone frame). */
export function Toast({ message, fixed }) {
  if (!message) return null
  return (
    <div
      className={cx(
        'inset-x-0 z-[60] flex justify-center px-5 pointer-events-none',
        fixed ? 'fixed top-10' : 'absolute top-10'
      )}
    >
      <div className="flex items-center gap-2.5 bg-ink text-white text-[13.5px] font-semibold tracking-[-.01em] px-4 py-3 rounded-full shadow-s3 animate-fade">
        <Check size={16} sw={2.6} className="text-good flex-none" />
        {message}
      </div>
    </div>
  )
}

/* ---------------- Skeleton ---------------- */
export const Skel = ({ className }) => (
  <div className={cx('h-3 rounded-md bg-[linear-gradient(90deg,rgb(var(--surface-2)),rgb(var(--surface-3)),rgb(var(--surface-2)))] bg-[length:200%_100%] animate-shimmer', className)} />
)

export { cx }
