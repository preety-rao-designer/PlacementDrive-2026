import { Btn, Card, Logo, Pill } from '../../components/ui.jsx'
import { Check } from '../../components/Icons.jsx'
import { Shell, Split, Rail } from '../layout.jsx'
import { COMPANIES, DRIVE } from '../../data/companies.js'

export default function Shortlisted({ nav }) {
  return (
    <Shell>
      <Split>
        <div>
          <Pill tone="good" dot>Zeta shortlisted you</Pill>
          <h1 className="text-[32px] lg:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08] mt-4">
            You're in for the Bengaluru drive
          </h1>
          <p className="text-[15px] text-ink-2 mt-3">24 August, {DRIVE.time} · {DRIVE.venue}</p>

          <Card flush className="mt-7">
            {[['zeta', 'good', 'Shortlisted'], ['razorpay', 'brand', 'Under review']].map(([k, tone, label]) => (
              <div key={k} className="flex items-center gap-4 px-6 py-5 border-b border-line last:border-0">
                <Logo company={k} />
                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold tracking-[-.018em]">{COMPANIES[k].name}</div>
                  <div className="text-[13.5px] text-ink-2 mt-0.5">{COMPANIES[k].role}</div>
                </div>
                <Pill tone={tone}>{label}</Pill>
              </div>
            ))}
          </Card>

          <Card tint className="p-6 mt-[18px]">
            <p className="text-[15px] text-ink-2">
              More companies may still shortlist you before {DRIVE.closes}. Anyone who does joins your day at no extra cost.
            </p>
          </Card>
        </div>

        <Rail>
          <div className="rounded-lg p-7 bg-[linear-gradient(165deg,#FFF,#F7F7FC)] border border-line shadow-s2">
            <div className="cap">Refundable seat deposit</div>
            <div className="text-[52px] font-extrabold tracking-[-.05em] leading-none tabular-nums mt-2">₹999</div>
            <div className="text-[14.5px] font-bold tracking-[-.012em] mt-2 text-ink-2">Blocks your seat for the whole day — not charged per company</div>
            <div className="h-px bg-line my-5" />
            {['Attend the drive — your ₹999 is refunded automatically once it ends', 'No extra charge for more shortlists that day'].map((t) => (
              <div key={t} className="flex gap-3 py-2 text-[13.5px] text-ink-2">
                <span className="text-good flex-none mt-0.5"><Check size={18} sw={2.6} /></span>
                <span>{t}</span>
              </div>
            ))}
            <Btn block className="mt-5" onClick={nav.startPay}>Pay ₹999</Btn>
            <p className="cap text-center mt-3">Confirm by {DRIVE.payBy}</p>
          </div>
        </Rail>
      </Split>
    </Shell>
  )
}
