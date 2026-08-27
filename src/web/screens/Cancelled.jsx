import { Btn, Card, Logo, Pill, Notice, DateChip } from '../../components/ui.jsx'
import { Alert } from '../../components/Icons.jsx'
import { Shell, Split, Rail } from '../layout.jsx'
import { COMPANIES, NEXT_DRIVE } from '../../data/companies.js'

function Timeline({ items }) {
  return (
    <ol className="list-none relative pl-7">
      <span className="absolute left-[9px] top-2.5 bottom-3.5 w-0.5 bg-line" aria-hidden />
      {items.map(({ state, title, sub }) => (
        <li key={title} className="relative py-[7px] pb-4 text-sm text-ink-2">
          <span
            className={
              'absolute -left-6 top-[13px] w-2.5 h-2.5 rounded-full ring-[3px] ring-white ' +
              (state === 'done' ? 'bg-good' : state === 'now' ? 'bg-brand shadow-[0_0_0_6px_var(--brand-tint)]' : 'bg-line-2')
            }
          />
          <b className="block text-ink font-bold text-[14.5px] mb-0.5">{title}</b>
          {sub}
        </li>
      ))}
    </ol>
  )
}

export default function Cancelled({ nav }) {
  return (
    <Shell>
      <Split>
        <div>
          <Notice tone="stop" title="Zeta has cancelled" icon={<Alert size={21} />}>
            They've pulled out of the 24 Aug drive.
          </Notice>

          <h1 className="text-[32px] lg:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08] mt-7">
            Your ₹999 is on its way back
          </h1>
          <p className="text-[15px] text-ink-2 mt-3">
            Zeta was your only shortlist here, so there's nothing left to attend. Refunded automatically.
          </p>

          <Card flush className="mt-7">
            <div className="flex items-center gap-4 px-6 py-5">
              <Logo company="zeta" dim />
              <div className="flex-1 min-w-0">
                <div className="text-base font-bold tracking-[-.018em] line-through opacity-55">{COMPANIES.zeta.name}</div>
                <div className="text-[13.5px] text-ink-2 mt-0.5">{COMPANIES.zeta.role}</div>
              </div>
              <Pill tone="stop">Cancelled</Pill>
            </div>
          </Card>

          <div className="mt-8">
            <div className="t2 mb-4">Still open to you</div>
            <div className="bg-surface border border-line rounded-lg overflow-hidden shadow-s2 max-w-[440px]">
              <div className="p-6 flex items-start gap-4">
                <DateChip day={NEXT_DRIVE.day} month={NEXT_DRIVE.month} className="w-[62px] h-[66px] rounded-2xl" />
                <div className="flex-1">
                  <div className="t1">{NEXT_DRIVE.city}</div>
                  <div className="b2 mt-1">{NEXT_DRIVE.companies} companies · Application closes {NEXT_DRIVE.closes}</div>
                </div>
              </div>
              <div className="px-6 py-4 bg-surface-2 border-t border-line flex items-center justify-between gap-3.5">
                <span className="cap">Application is open</span>
                <Btn size="sm" onClick={() => nav.go('drive')} className="flex-none">View drive</Btn>
              </div>
            </div>
          </div>
        </div>

        <Rail>
          <div className="rounded-lg p-7 bg-[linear-gradient(165deg,#FFF,#F4FBF8)] border border-good/20">
            <div className="cap">Refund</div>
            <div className="text-[44px] font-extrabold tracking-[-.045em] tabular-nums text-good mt-2">₹999</div>
            <div className="h-px bg-line my-5" />
            <Timeline items={[
              { state: 'done', title: 'Refund started', sub: 'Today, 4:12 PM' },
              { state: 'now', title: 'With your bank', sub: '2–4 working days' },
              { state: '', title: 'Back in your account', sub: 'To the card ending 4417' },
            ]} />
            <div className="cap">Reference · RF-8820 4471</div>
          </div>
        </Rail>
      </Split>
    </Shell>
  )
}
