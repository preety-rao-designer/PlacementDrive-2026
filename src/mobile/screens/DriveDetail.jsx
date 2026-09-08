import { Btn, Card, Pill, Logo, MetaChips } from '../../components/ui.jsx'
import { ChevronRight, Calendar, Clock, Pin } from '../../components/Icons.jsx'
import { COMPANY_LIST, DRIVE } from '../../data/companies.js'

const driveMeta = [
  [Calendar, DRIVE.date],
  [Clock, DRIVE.time],
  [Pin, DRIVE.venue.split(',')[0]],
]

export default function DriveDetail({ nav }) {
  return (
    <div className="relative min-h-full flex flex-col">
      <div className="flex-1 px-5 pt-1 pb-24">
        <Pill tone="brand" dot>Application closes {DRIVE.closes}</Pill>
        <h1 className="d1 mt-3">Bengaluru drive</h1>
        <div className="flex items-center flex-wrap gap-3 mt-3.5">
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

        <div className="mt-6 mb-3">
          <div className="t2">{DRIVE.companies} companies attending</div>
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

      <div className="sticky inset-x-0 bottom-0 px-5 pt-3.5 pb-6 bg-gradient-to-b from-transparent to-surface to-[24%]">
        <Btn block onClick={() => nav.go('signin')}>Apply Now</Btn>
      </div>
    </div>
  )
}
