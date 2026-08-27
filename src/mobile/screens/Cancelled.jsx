import { Btn, Card, Logo, Pill, Notice, DateChip } from '../../components/ui.jsx'
import { Alert } from '../../components/Icons.jsx'
import { COMPANIES, NEXT_DRIVE } from '../../data/companies.js'

function Timeline({ items }) {
  return (
    <ol className="list-none relative pl-[26px]">
      <span className="absolute left-2 top-2 bottom-3 w-0.5 bg-line" aria-hidden />
      {items.map(({ state, title, sub }) => (
        <li key={title} className="relative py-1.5 pb-3.5 text-[13.5px] text-ink-2">
          <span
            className={
              'absolute -left-[22px] top-[11px] w-2.5 h-2.5 rounded-full ring-[3px] ring-white ' +
              (state === 'done' ? 'bg-good' : state === 'now' ? 'bg-brand ring-offset-0 shadow-[0_0_0_6px_var(--brand-tint)]' : 'bg-line-2')
            }
          />
          <b className="block text-ink font-bold text-sm mb-0.5">{title}</b>
          {sub}
        </li>
      ))}
    </ol>
  )
}

export default function Cancelled({ nav }) {
  return (
    <div className="px-5 pt-2.5 pb-8 space-y-6">
      <Notice tone="stop" title="Zeta has cancelled" icon={<Alert size={19} />}>
        They've pulled out of the 24 Aug drive.
      </Notice>

      <div>
        <h1 className="d2">Your ₹999 is on its way back</h1>
        <p className="b1 mt-2.5">
          Zeta was your only shortlist here, so there's nothing left to attend. Refunded automatically.
        </p>
      </div>

      <div className="rounded-lg p-5 bg-[linear-gradient(165deg,#FFF,#F4FBF8)] border border-good/20">
        <div className="cap">Refund</div>
        <div className="text-[34px] font-extrabold tracking-[-.04em] tabular-nums text-good mt-1.5">₹999</div>
        <div className="h-px bg-line my-3.5" />
        <Timeline items={[
          { state: 'done', title: 'Refund started', sub: 'Today, 4:12 PM' },
          { state: 'now', title: 'With your bank', sub: '2–4 working days' },
          { state: '', title: 'Back in your account', sub: 'To the card ending 4417' },
        ]} />
        <div className="cap">Reference · RF-8820 4471</div>
      </div>

      <Card flush>
        <div className="flex items-center gap-3 px-[18px] py-4">
          <Logo company="zeta" dim />
          <div className="flex-1 min-w-0">
            <div className="text-[14.5px] font-bold tracking-[-.015em] line-through opacity-55">{COMPANIES.zeta.name}</div>
            <div className="text-[12.5px] text-ink-2 mt-px">{COMPANIES.zeta.role}</div>
          </div>
          <Pill tone="stop">Cancelled</Pill>
        </div>
      </Card>

      <div className="h-px bg-line" />

      <div>
        <div className="t2 mb-3">Still open to you</div>
        <div className="bg-surface border border-line rounded-lg overflow-hidden shadow-s2">
          <div className="p-[18px] pb-3.5 flex items-start gap-3">
            <DateChip day={NEXT_DRIVE.day} month={NEXT_DRIVE.month} />
            <div className="flex-1">
              <div className="t1">{NEXT_DRIVE.city}</div>
              <div className="b2 mt-[3px]">{NEXT_DRIVE.companies} companies · Application closes {NEXT_DRIVE.closes}</div>
            </div>
          </div>
          <div className="px-[18px] py-3 bg-surface-2 border-t border-line flex items-center justify-between gap-3">
            <span className="cap">Application is open</span>
            <Btn size="sm" onClick={() => nav.go('drive')} className="flex-none">View drive</Btn>
          </div>
        </div>
      </div>

      <Btn variant="ghost" block onClick={() => nav.go('list')}>Back to drives</Btn>
    </div>
  )
}
