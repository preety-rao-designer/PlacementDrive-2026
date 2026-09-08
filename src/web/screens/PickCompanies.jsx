import { Btn, Card, Logo, Checkbox } from '../../components/ui.jsx'
import { ChevronRight } from '../../components/Icons.jsx'
import { Shell, Split, Rail, Crumb } from '../layout.jsx'
import { COMPANY_LIST, COMPANIES, LEARNER } from '../../data/companies.js'

export default function PickCompanies({ nav }) {
  const count = nav.picked.length
  const allSelected = count === COMPANY_LIST.length
  return (
    <Shell>
      <Crumb onClick={() => nav.go('resume')}>Resume</Crumb>
      <h1 className="text-[32px] lg:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08]">
        Who do you want to meet?
      </h1>
      <p className="text-[15px] text-ink-2 mt-3">Pick as many companies as you like.</p>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_372px] gap-8 mt-7">
        <div className="flex items-center justify-between">
          <div className="t1">{COMPANY_LIST.length} companies</div>
          <button
            onClick={() => nav.toggleAllPicked(COMPANY_LIST.map((c) => c.key))}
            className="text-[13.5px] font-bold text-brand"
          >
            {allSelected ? 'Clear All' : 'Select All'}
          </button>
        </div>
      </div>

      <Split className="mt-4">
        <div>
          <Card flush>
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
            <Btn block className="mt-5" disabled={!count} onClick={() => { nav.notify('Application submitted'); nav.go('review') }}>
              {count ? `Apply To ${count} ${count === 1 ? 'Company' : 'Companies'}` : 'Apply To Companies'}
            </Btn>
          </Card>
        </Rail>
      </Split>
    </Shell>
  )
}
