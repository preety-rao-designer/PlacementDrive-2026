import { Btn, Card, Logo, Pill, cx } from '../../components/ui.jsx'
import { Check, Alert, Calendar, Clock, Pin } from '../../components/Icons.jsx'
import { COMPANIES, DRIVE } from '../../data/companies.js'

const driveMeta = [
  [Calendar, DRIVE.date],
  [Clock, DRIVE.time],
  [Pin, 'Masai campus'],
]

function RefundLine({ tone = 'good', children }) {
  const Icon = tone === 'good' ? Check : Alert
  return (
    <div className="flex gap-2.5 py-[7px] text-[13px] text-ink-2">
      <span className={cx('flex-none mt-px', tone === 'good' ? 'text-good' : 'text-warn')}><Icon size={17} sw={2.4} /></span>
      <span>{children}</span>
    </div>
  )
}

export default function Shortlisted({ nav }) {
  return (
    <div className="relative min-h-full flex flex-col">
      <div className="flex-1 px-5 pt-2 pb-28 space-y-6">
        <div>
          <Pill tone="good" dot>Zeta shortlisted you</Pill>
          <h1 className="d1 tracking-[-.01em] mt-3.5">You're in for the Bengaluru drive</h1>
          <div className="flex items-center flex-wrap gap-3 mt-3">
            {driveMeta.map(([Icon, label], i) => (
              <span key={i} className="flex items-center gap-3">
                {i > 0 && <span className="w-px h-3.5 bg-line-2" aria-hidden />}
                <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink-2">
                  <Icon size={14} sw={2.2} className="text-ink-3" />
                  {label}
                </span>
              </span>
            ))}
          </div>
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
          <div className="cap">Fully refundable deposit</div>
          <div className="text-[44px] font-extrabold tracking-[-.045em] leading-none tabular-nums mt-1.5">₹999</div>
          <div className="t3 mt-1.5 text-ink-2">Holds your seat for all interviews on drive day</div>
          <div className="h-px bg-line my-4" />
          <RefundLine>Attend the drive and get a full ₹999 refund within 24–48 hours.</RefundLine>
          <RefundLine tone="warn">Amount is non-refundable if you do not attend.</RefundLine>
          <RefundLine>Covers unlimited company shortlists with no extra fee.</RefundLine>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 px-5 pt-3.5 pb-6 bg-gradient-to-b from-transparent to-surface to-[24%]">
        <Btn block onClick={nav.startPay}>Pay ₹999</Btn>
        <p className="cap text-center mt-2">Confirm by {DRIVE.payBy}</p>
      </div>
    </div>
  )
}
