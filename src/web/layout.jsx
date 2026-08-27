import { ChevronLeft } from '../components/Icons.jsx'
import { cx } from '../components/ui.jsx'

/** Max-width container used by most pages. */
export const Shell = ({ className, children }) => (
  <div className={cx('max-w-[1140px] mx-auto', className)}>{children}</div>
)

/** Narrow single-column container for forms and confirmations. */
export const Narrow = ({ className, children }) => (
  <div className={cx('max-w-[600px] mx-auto', className)}>{children}</div>
)

/** Content + sticky rail. Collapses to one column under 1024px. */
export const Split = ({ children }) => (
  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_372px] gap-8 items-start">{children}</div>
)

export const Rail = ({ children }) => (
  <div className="lg:sticky lg:top-[104px]">{children}</div>
)

export const Crumb = ({ onClick, children }) => (
  <button onClick={onClick} className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-ink-2 hover:text-ink mb-5">
    <ChevronLeft size={16} sw={2.4} />
    {children}
  </button>
)
