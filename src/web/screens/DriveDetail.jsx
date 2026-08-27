import { Btn, Card, Pill, Logo, Kv } from '../../components/ui.jsx'
import { ChevronRight } from '../../components/Icons.jsx'
import { Shell, Split, Rail, Crumb } from '../layout.jsx'
import { COMPANY_LIST, DRIVE } from '../../data/companies.js'

export default function DriveDetail({ nav }) {
  return (
    <Shell>
      <Crumb onClick={() => nav.go('list')}>All drives</Crumb>
      <Split>
        <div>
          <Pill tone="brand" dot>Interest closes {DRIVE.closes}</Pill>
          <h1 className="text-[32px] lg:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08] mt-4">Bengaluru drive</h1>
          <p className="text-[15px] text-ink-2 mt-3">{DRIVE.dateLong} · {DRIVE.venue}</p>

          <div className="flex items-center justify-between mt-7 mb-4">
            <div className="t1">{DRIVE.companies} companies attending</div>
            <span className="cap">Click a company for the full JD</span>
          </div>

          <Card flush>
            {COMPANY_LIST.map((c) => (
              <button
                key={c.key}
                onClick={() => nav.openModal(c.key)}
                className="w-full text-left flex items-center gap-4 px-6 py-5 border-b border-line last:border-0 hover:bg-surface-2 transition-colors"
              >
                <Logo company={c} />
                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold tracking-[-.018em]">{c.name}</div>
                  <div className="text-[13.5px] text-ink-2 mt-0.5">{c.role} · {c.ctc} · {c.openings}</div>
                </div>
                <ChevronRight size={20} className="text-ink-3 flex-none" />
              </button>
            ))}
          </Card>
        </div>

        <Rail>
          <Card className="p-6">
            <div className="t2">Drive details</div>
            <div className="h-px bg-line my-4" />
            <Kv k="Date" v={DRIVE.date} />
            <Kv k="Reporting" v={DRIVE.time} />
            <Kv k="Venue" v={DRIVE.venueShort} />
            <Kv k="Companies" v={DRIVE.companies} />
            <Kv k="Interest closes" v={DRIVE.closes} />
            <div className="h-px bg-line my-4" />
            <Btn block onClick={() => nav.go('signin')}>Mark your interest</Btn>
            <p className="cap text-center mt-3">Free — you only pay if a company shortlists you</p>
          </Card>
        </Rail>
      </Split>
    </Shell>
  )
}
