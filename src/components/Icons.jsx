// Stroke icons. Size and colour come from the caller.
const base = (p) => ({
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: p.sw ?? 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: p.size ?? 18,
  height: p.size ?? 18,
  'aria-hidden': true,
  ...p,
})

export const ChevronLeft = (p) => <svg {...base(p)}><path d="M15 18l-6-6 6-6" /></svg>
export const ChevronRight = (p) => <svg {...base(p)}><path d="M9 18l6-6-6-6" /></svg>
export const ChevronDown = (p) => <svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>
export const ArrowRight = (p) => <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
export const Check = (p) => <svg {...base(p)}><path d="M20 6 9 17l-5-5" /></svg>
export const X = (p) => <svg {...base(p)}><path d="M18 6 6 18M6 6l12 12" /></svg>
export const Clock = (p) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
export const Calendar = (p) => <svg {...base(p)}><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /></svg>
export const Alert = (p) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16.5h.01" /></svg>
export const Upload = (p) => <svg {...base(p)}><path d="M12 16V4" /><path d="m7 9 5-5 5 5" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg>
export const Pin = (p) => <svg {...base(p)}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.4" /></svg>
export const Bag = (p) => <svg {...base(p)}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
export const Rupee = (p) => <svg {...base(p)}><path d="M6 4h12M6 9h12M15 4c0 5-4 5-4 9l6 7" /></svg>
export const People = (p) => <svg {...base(p)}><path d="M16 20v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="8" r="3.4" /></svg>
export const Lock = (p) => <svg {...base(p)}><rect x="4" y="10" width="16" height="11" rx="2.5" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
export const TrendUp = (p) => <svg {...base(p)}><path d="M4 16.5 10 10l4 4 6-7.5" /><path d="M14.5 6h5.5v5.5" /></svg>
export const Plus = (p) => <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
export const Menu = (p) => <svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
export const Phone = (p) => <svg {...base(p)}><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M11 18.5h2" /></svg>
export const Monitor = (p) => <svg {...base(p)}><rect x="2.5" y="4" width="19" height="14" rx="2.5" /><path d="M8 21h8" /></svg>

// Company marks. Drawn, not real trademarks — see README.
export const Marks = {
  zeta: () => <svg viewBox="0 0 24 24" fill="none" className="w-[54%] h-[54%]" aria-hidden><path d="M5.5 5.5h13L8 18.5h11" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  razorpay: () => <svg viewBox="0 0 24 24" fill="none" className="w-[54%] h-[54%]" aria-hidden><path d="M16.5 3 8 14h5l-2.5 7L19 10h-5l2.5-7Z" fill="#fff" /></svg>,
  groww: () => <svg viewBox="0 0 24 24" fill="none" className="w-[54%] h-[54%]" aria-hidden><path d="M4 16.5 10 10l4 4 6-7.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5 6h5.5v5.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  innovaccer: () => <svg viewBox="0 0 24 24" fill="none" className="w-[54%] h-[54%]" aria-hidden><circle cx="12" cy="12" r="8.4" stroke="#fff" strokeWidth="2.4" /><path d="M12 8v8M8 12h8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" /></svg>,
}

export const QrCode = ({ className = '' }) => (
  <svg viewBox="0 0 25 25" shapeRendering="crispEdges" className={className} aria-hidden>
    <rect width="25" height="25" fill="#fff" />
    <g fill="#0B0B12">
      <path d="M0 0h7v7H0zM18 0h7v7h-7zM0 18h7v7H0z" />
      <path d="M1 1h5v5H1zM19 1h5v5h-5zM1 19h5v5H1z" fill="#fff" />
      <path d="M2 2h3v3H2zM20 2h3v3h-3zM2 20h3v3H2z" />
      <path d="M9 0h1v1H9zM11 0h2v1h-2zM15 0h1v2h-1zM9 2h2v1H9zM12 2h1v2h-1zM9 4h1v1H9zM11 4h1v1h-1zM14 3h2v1h-2zM9 6h3v1H9zM13 5h1v2h-1zM15 6h1v1h-1z" />
      <path d="M0 9h1v1H0zM2 9h2v1H2zM5 9h1v2H5zM0 11h2v1H0zM3 11h1v2H3zM0 13h1v1H0zM2 13h1v1H2zM4 13h2v1H4zM0 15h3v1H0zM4 15h1v1H4zM1 16h1v1H1zM6 12h1v3H6z" />
      <path d="M18 9h1v1h-1zM20 9h2v1h-2zM23 9h2v1h-2zM18 11h2v1h-2zM21 11h1v2h-1zM23 12h2v1h-2zM18 13h1v2h-1zM20 14h2v1h-2zM23 15h2v1h-2zM19 16h2v1h-2zM22 17h1v1h-1zM18 18h1v1h-1zM20 18h1v3h-1zM22 19h2v1h-2zM18 21h2v1h-2zM21 21h1v1h-1zM23 21h1v2h-1zM18 23h1v1h-1zM20 23h3v1h-3z" />
      <path d="M9 8h1v2H9zM11 9h2v1h-2zM14 8h1v1h-1zM16 9h1v1h-1zM9 11h2v1H9zM12 11h1v1h-1zM14 11h2v1h-2zM9 13h1v2H9zM11 13h1v1h-1zM13 13h2v1h-2zM16 13h1v2h-1zM10 15h2v1h-2zM13 15h1v1h-1zM15 15h1v1h-1zM9 17h2v1H9zM12 17h2v1h-2zM15 17h2v1h-2zM9 19h1v1H9zM11 19h1v2h-1zM13 19h2v1h-2zM16 19h1v1h-1zM9 21h2v1H9zM12 21h1v1h-1zM14 21h2v1h-2zM9 23h2v1H9zM12 23h2v1h-2zM15 23h2v1h-2z" />
    </g>
  </svg>
)
