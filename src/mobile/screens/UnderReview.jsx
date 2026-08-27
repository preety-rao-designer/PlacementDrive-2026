import { Btn, Card, Logo, Pill, Mark, Steps } from '../../components/ui.jsx'
import { COMPANIES, DRIVE } from '../../data/companies.js'

export default function UnderReview({ nav }) {
  const rows = nav.picked.length ? nav.picked : ['zeta']
  return (
    <div className="px-5 pt-6 pb-8 space-y-6">
      <div>
        <Mark tone="good" />
        <div className="text-center">
          <h1 className="d2">Interest submitted</h1>
          <p className="b1 mt-2.5">Companies decide by <b className="text-ink">{DRIVE.closes}</b></p>
        </div>
      </div>

      <Card flush>
        {rows.map((k) => {
          const c = COMPANIES[k]
          return (
            <div key={k} className="flex items-center gap-3 px-[18px] py-4 border-b border-line last:border-0">
              <Logo company={c} />
              <div className="flex-1 min-w-0">
                <div className="text-[14.5px] font-bold tracking-[-.015em]">{c.name}</div>
                <div className="text-[12.5px] text-ink-2 mt-px">{c.role}</div>
              </div>
              <Pill tone="brand">Under review</Pill>
            </div>
          )
        })}
      </Card>

      <Btn variant="sec" block onClick={() => nav.go('pick')}>Add more companies</Btn>

      <Card tint>
        <div className="t3 mb-1">What happens next</div>
        <Steps items={[
          'Companies review your resume',
          'Shortlisted by anyone? Pay ₹999 once',
          'Attend the drive, get it back',
        ]} />
      </Card>

      <div className="space-y-1">
        <Btn variant="ghost" block onClick={() => nav.go('shortlisted')}>Simulate: a company shortlists you →</Btn>
        <Btn variant="ghost" block onClick={() => nav.go('notselected')}>Simulate: nobody shortlists you →</Btn>
      </div>
    </div>
  )
}
