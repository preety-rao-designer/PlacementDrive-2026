import { useEffect, useState } from 'react'
import { cx } from './ui.jsx'

/**
 * Google Pay style payment takeover.
 * Runs: spinner (1.4s) -> success (2.8s) -> onDone().
 * `fixed` covers the viewport (web); otherwise it fills its positioned parent (phone frame).
 */
export function PayFlow({ open, onDone, fixed, amount = '₹999' }) {
  const [phase, setPhase] = useState('processing')

  useEffect(() => {
    if (!open) return
    setPhase('processing')
    const t1 = setTimeout(() => setPhase('done'), 1400)
    const t2 = setTimeout(() => onDone?.(), 4200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [open, onDone])

  if (!open) return null

  return (
    <div
      className={cx(
        'z-50 flex flex-col items-center justify-center text-center text-white px-8',
        'bg-[linear-gradient(165deg,#5B4BFF,#2E2AE0_55%,#1B18A8)] animate-fade',
        fixed ? 'fixed inset-0' : 'absolute inset-0'
      )}
      role="status"
      aria-live="polite"
    >
      {phase === 'processing' ? (
        <>
          <div className="w-[76px] h-[76px] rounded-full border-4 border-white/20 border-t-white animate-spin" />
          <div className="text-base font-bold tracking-[-.015em] mt-7">Paying {amount}</div>
          <div className="text-[13px] text-[#CFCBFF] mt-2 max-w-[250px]">Hold on, don't close this screen</div>
        </>
      ) : (
        <>
          <div className="relative w-24 h-24 grid place-items-center">
            <div className="absolute inset-0 rounded-full bg-white/[.16] scale-[.4] opacity-0 animate-ring" />
            <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse2" />
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="relative w-[52px] h-[52px]">
              <path d="M20 6 9 17l-5-5" style={{ strokeDasharray: 34, strokeDashoffset: 34, animation: 'draw .4s cubic-bezier(.32,.72,0,1) .28s forwards' }} />
            </svg>
          </div>
          <div className="opacity-0 animate-rise mt-6">
            <div className="text-[13px] font-semibold text-[#CFCBFF]">Paid to Masai School</div>
            <div className="text-[46px] font-extrabold tracking-[-.045em] tabular-nums mt-1.5">{amount}</div>
          </div>
          <div className="opacity-0 animate-rise text-[13px] text-[#CFCBFF] mt-4 max-w-[260px]">
            Seat confirmed for 24 Aug · refund after the drive
          </div>
          <div className="opacity-0 animate-rise absolute bottom-11 text-[11.5px] text-[#B9B4FF]">
            UPI ref · 4820 9917 3364
          </div>
        </>
      )}
    </div>
  )
}
