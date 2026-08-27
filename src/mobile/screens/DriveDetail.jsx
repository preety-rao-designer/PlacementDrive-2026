import { Btn, Card, Pill, Logo, MetaChips } from '../../components/ui.jsx'
import { ChevronRight } from '../../components/Icons.jsx'
import { COMPANY_LIST, DRIVE } from '../../data/companies.js'

export default function DriveDetail({ nav }) {
  return (
    <div className="relative min-h-full">
      <div className="px-5 pt-1 pb-24">
        <Pill tone="brand" dot>Application closes {DRIVE.closes}</Pill>
        <h1 className="d1 mt-3">Bengaluru<br />drive</h1>
        <p className="b1 mt-2.5">{DRIVE.date}, {DRIVE.time} · {DRIVE.venue}</p>

        <div className="flex items-center justify-between mt-6 mb-3">
          <div className="t2">{DRIVE.companies} companies attending</div>
          <span className="cap">Tap for full details</span>
        </div>

        <Card flush>
          {COMPANY_LIST.map((c, i) => (
            <button
              key={c.key}
              onClick={() => nav.openSheet(c.key)}
              className="w-full text-left flex items-start gap-3 px-[18px] py-4 border-b border-line last:border-0 active:bg-surface-2 transition-colors"
            >
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
            </button>
          ))}
        </Card>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-5 pt-3.5 pb-6 bg-gradient-to-b from-transparent to-surface to-[24%]">
        <Btn block onClick={() => nav.go('signin')}>Apply now</Btn>
      </div>
    </div>
  )
}
