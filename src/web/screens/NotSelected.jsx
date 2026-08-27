import { Btn, Card, Logo, Pill } from '../../components/ui.jsx'
import { TrendUp } from '../../components/Icons.jsx'
import { Shell, Split, Rail } from '../layout.jsx'
import { COMPANIES, NEXT_DRIVE, PREP } from '../../data/companies.js'

export default function NotSelected({ nav }) {
  return (
    <Shell>
      <Split>
        <div>
          <h1 className="text-[32px] lg:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08]">
            Not shortlisted this time
          </h1>
          <p className="text-[15px] text-ink-2 mt-3">No company picked you this time. No money was taken.</p>

          <Card flush className="mt-7">
            {['zeta', 'razorpay'].map((k) => (
              <div key={k} className="flex items-center gap-4 px-6 py-5 border-b border-line last:border-0">
                <Logo company={k} dim />
                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold tracking-[-.018em]">{COMPANIES[k].name}</div>
                  <div className="text-[13.5px] text-ink-2 mt-0.5">{COMPANIES[k].role}</div>
                </div>
                <Pill tone="stop">Not selected</Pill>
              </div>
            ))}
          </Card>

          <div className="rounded-md p-6 mt-[18px] border border-brand-line bg-[linear-gradient(165deg,#fff,#F7F6FF)]">
            <div className="flex items-start gap-3">
              <span className="text-brand flex-none mt-0.5"><TrendUp size={22} /></span>
              <div className="flex-1">
                <div className="t2">Stand a better chance next drive</div>
                <div className="b2 mt-1.5">Both roles asked for these. Worth having by {NEXT_DRIVE.closes}.</div>
              </div>
            </div>
            <div className="h-px bg-line my-[18px]" />
            <div className="flex flex-col gap-3.5">
              {PREP.map((p) => (
                <div key={p.n} className="flex gap-3 items-start">
                  <span className="cap w-[18px] flex-none text-brand font-extrabold mt-0.5">{p.n}</span>
                  <div className="flex-1">
                    <div className="text-[14.5px] font-bold tracking-[-.012em]">{p.title}</div>
                    <div className="text-[13.5px] text-ink-2 mt-0.5">{p.why}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="cap mt-5 leading-relaxed">What companies asked for — not why you weren't picked.</p>
          </div>
        </div>

        <Rail>
          <Card tint className="p-6">
            <div className="t2">Build for the next one</div>
            <p className="text-[15px] text-ink-2 mt-2">A learning path covering system design, SQL, and project depth.</p>
            <Btn block className="mt-5">Explore roadmap</Btn>
          </Card>
        </Rail>
      </Split>
    </Shell>
  )
}
