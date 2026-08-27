import { Btn, Card, Logo, Checkbox } from '../../components/ui.jsx'
import { ChevronRight } from '../../components/Icons.jsx'
import { Shell, Split, Rail, Crumb } from '../layout.jsx'
import { COMPANY_LIST, COMPANIES, LEARNER } from '../../data/companies.js'

export default function PickCompanies({ nav }) {
  const count = nav.picked.length
  return (
    <Shell>
      <Crumb onClick={() => nav.go('resume')}>Resume</Crumb>
      <Split>
        <div>
          <h1 className="text-[32px] lg:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08]">
            Who do you want to meet?
          </h1>
          <p className="text-[15px] text-ink-2 mt-3">Pick as many companies as you like.</p>

          <Card flush className="mt-7">
            {COMPANY_LIST.map((c) => (
              <div
                key={c.key}
                onClick={() => nav.openModal(c.key, 'pick')}
                className="flex items-center gap-4 px-6 py-5 border-b border-line last:border-0 hover:bg-surface-2 transition-colors cursor-pointer"
              >
                <Checkbox
                  checked={nav.picked.includes(c.key)}
                  onClick={(e) => { e.stopPropagation(); nav.togglePick(c.key) }}
                />
                <Logo company={c} />
                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold tracking-[-.018em]">{c.name}</div>
                  <div className="text-[13.5px] text-ink-2 mt-0.5">{c.role} · {c.ctc}</div>
                </div>
                <ChevronRight size={20} className="text-ink-3 flex-none" />
              </div>
            ))}
          </Card>
        </div>

        <Rail>
          <Card className="p-6">
            <div className="t2">Your selection</div>
            <div className="h-px bg-line my-4" />
            <div className={'text-[13.5px] ' + (count ? 'text-ink font-semibold' : 'text-ink-2')}>
              {count ? nav.picked.map((k) => COMPANIES[k].name).join(', ') : 'Nothing selected yet'}
            </div>
            <div className="h-px bg-line my-4" />
            <div className="text-[13.5px] text-ink-2">
              Resume · <b className="text-ink">{LEARNER.resume}</b>
            </div>
            <Btn block className="mt-5" disabled={!count} onClick={() => nav.go('review')}>
              {count ? `Apply to ${count} companies` : 'Apply to companies'}
            </Btn>
            <p className="cap text-center mt-3">You only pay if a company shortlists you</p>
          </Card>
        </Rail>
      </Split>
    </Shell>
  )
}
