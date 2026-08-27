import { Btn, Card, Logo, Pill, Mark, Steps } from '../../components/ui.jsx'
import { COMPANIES, DRIVE } from '../../data/companies.js'

export default function UnderReview({ nav }) {
  const rows = nav.picked.length ? nav.picked : ['zeta']
  return (
    <div className="px-5 pt-6 pb-8 space-y-6">
      <div>
        <Mark tone="good" />
        <div className="text-center">
          <h1 className="d2">Application submitted</h1>
          <p className="b1 mt-2.5">Companies will respond by <b className="text-ink">{DRIVE.closes}</b></p>
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
          'Get shortlisted? Pay a refundable ₹999 to confirm your seat',
          'Attend the drive and get your ₹999 back',
        ]} />
      </Card>
    </div>
  )
}
