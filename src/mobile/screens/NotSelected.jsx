import { Btn, Card, Logo, Pill, DateChip } from '../../components/ui.jsx'
import { TrendUp } from '../../components/Icons.jsx'
import { COMPANIES, NEXT_DRIVE, PREP } from '../../data/companies.js'

export default function NotSelected({ nav }) {
  return (
    <div className="px-5 pt-3 pb-8 space-y-6">
      <div>
        <h1 className="d2">Not shortlisted this time</h1>
        <p className="b1 mt-2.5">No company picked you this time. No money was taken.</p>
      </div>

      <Card flush>
        {['zeta', 'razorpay'].map((k) => (
          <div key={k} className="flex items-center gap-3 px-[18px] py-4 border-b border-line last:border-0">
            <Logo company={k} dim />
            <div className="flex-1 min-w-0">
              <div className="text-[14.5px] font-bold tracking-[-.015em]">{COMPANIES[k].name}</div>
              <div className="text-[12.5px] text-ink-2 mt-px">{COMPANIES[k].role}</div>
            </div>
            <Pill tone="stop">Not selected</Pill>
          </div>
        ))}
      </Card>

      <div className="rounded-md p-[18px] border border-brand-line bg-[linear-gradient(165deg,#fff,#F7F6FF)]">
        <div className="flex items-start gap-3">
          <span className="text-brand flex-none mt-px"><TrendUp size={19} /></span>
          <div className="flex-1">
            <div className="t3">Stand a better chance next drive</div>
            <div className="b2 mt-1">Both roles asked for these. Worth having by {NEXT_DRIVE.closes}.</div>
          </div>
        </div>
        <div className="h-px bg-line my-3.5" />
        <div className="flex flex-col gap-2.5">
          {PREP.map((p) => (
            <div key={p.n} className="flex gap-2.5 items-start">
              <span className="cap w-4 flex-none text-brand font-extrabold mt-px">{p.n}</span>
              <div className="flex-1">
                <div className="text-[13.5px] font-semibold tracking-[-.01em]">{p.title}</div>
                <div className="text-[12.5px] text-ink-2 mt-0.5">{p.why}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="cap mt-4 leading-snug font-medium">What companies asked for — not why you weren't picked.</p>
      </div>

      <div className="h-px bg-line" />

      <div>
        <div className="t2 mb-3">Next drive</div>
        <div className="bg-surface border border-line rounded-lg overflow-hidden shadow-s2">
          <div className="p-[18px] pb-3.5 flex items-start gap-3">
            <DateChip day={NEXT_DRIVE.day} month={NEXT_DRIVE.month} />
            <div className="flex-1">
              <div className="t1">{NEXT_DRIVE.city}</div>
              <div className="b2 mt-[3px]">{NEXT_DRIVE.companies} companies · closes {NEXT_DRIVE.closes}</div>
            </div>
          </div>
          <div className="px-[18px] py-3 bg-surface-2 border-t border-line flex items-center justify-between gap-3">
            <span className="cap">Interest is open</span>
            <Btn size="sm" onClick={() => nav.go('drive')} className="flex-none">View drive</Btn>
          </div>
        </div>
      </div>
    </div>
  )
}
