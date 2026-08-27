import { Btn, Card, Logo, MetaChips, Checkbox } from '../../components/ui.jsx'
import { ChevronRight } from '../../components/Icons.jsx'
import { COMPANY_LIST } from '../../data/companies.js'

export default function PickCompanies({ nav }) {
  const count = nav.picked.length
  return (
    <div className="relative min-h-full">
      <div className="px-5 pt-2 pb-28 space-y-6">
        <div>
          <h1 className="d2">Who do you want to meet?</h1>
          <p className="b1 mt-2.5">Pick as many companies as you like.</p>
        </div>

        <Card flush>
          {COMPANY_LIST.map((c) => (
            <div
              key={c.key}
              onClick={() => nav.openSheet(c.key, 'pick')}
              className="flex items-start gap-3 px-[18px] py-4 border-b border-line last:border-0 active:bg-surface-2 transition-colors cursor-pointer"
            >
              <Checkbox
                checked={nav.picked.includes(c.key)}
                onClick={(e) => { e.stopPropagation(); nav.togglePick(c.key) }}
                className="mt-3"
              />
              <Logo company={c} className="mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-[14.5px] font-bold tracking-[-.015em]">{c.name}</div>
                    <div className="text-[12.5px] text-ink-2 mt-px">{c.role}</div>
                  </div>
                  <ChevronRight size={17} className="text-ink-3 mt-1 flex-none" />
                </div>
                <MetaChips company={c} />
              </div>
            </div>
          ))}
        </Card>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-5 pt-3.5 pb-6 bg-gradient-to-b from-transparent to-surface to-[24%]">
        <Btn block disabled={!count} onClick={() => nav.go('review')}>
          {count ? `Apply to ${count} companies` : 'Apply to companies'}
        </Btn>
      </div>
    </div>
  )
}
