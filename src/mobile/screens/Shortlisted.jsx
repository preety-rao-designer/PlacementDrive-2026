import { Btn, Card, Logo, Pill } from '../../components/ui.jsx'
import { Check } from '../../components/Icons.jsx'
import { COMPANIES, DRIVE } from '../../data/companies.js'

function RefundLine({ children }) {
  return (
    <div className="flex gap-2.5 py-[7px] text-[13px] text-ink-2">
      <span className="text-good flex-none mt-px"><Check size={17} sw={2.4} /></span>
      <span>{children}</span>
    </div>
  )
}

export default function Shortlisted({ nav }) {
  return (
    <div className="px-5 pt-2 pb-6 space-y-6">
      <div>
        <Pill tone="good" dot>Zeta shortlisted you</Pill>
        <h1 className="d1 mt-3.5">You're in for the Bengaluru drive</h1>
        <p className="b1 mt-2.5">{DRIVE.date}, {DRIVE.time} · Masai campus</p>
      </div>

      <Card flush>
        {[['zeta', 'good', 'Shortlisted'], ['razorpay', 'brand', 'Under review']].map(([k, tone, label]) => (
          <div key={k} className="flex items-center gap-3 px-[18px] py-4 border-b border-line last:border-0">
            <Logo company={k} />
            <div className="flex-1 min-w-0">
              <div className="text-[14.5px] font-bold tracking-[-.015em]">{COMPANIES[k].name}</div>
              <div className="text-[12.5px] text-ink-2 mt-px">{COMPANIES[k].role}</div>
            </div>
            <Pill tone={tone}>{label}</Pill>
          </div>
        ))}
      </Card>

      <div className="rounded-lg p-[22px] bg-[linear-gradient(165deg,#FFFFFF,#F7F7FC)] border border-line shadow-s2">
        <div className="cap">Seat deposit</div>
        <div className="text-[44px] font-extrabold tracking-[-.045em] leading-none tabular-nums mt-1.5">₹999</div>
        <div className="t3 mt-1.5 text-ink-2">for the whole day, not per company</div>
        <div className="h-px bg-line my-4" />
        <RefundLine>Refunded within 24 hours of scanning in</RefundLine>
        <RefundLine>Later shortlists cost nothing extra</RefundLine>
      </div>

      <div className="space-y-2.5">
        <Btn block onClick={nav.startPay}>Pay ₹999</Btn>
        <p className="cap text-center">Confirm by {DRIVE.payBy}</p>
      </div>
    </div>
  )
}
