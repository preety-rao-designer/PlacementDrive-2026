import { Btn, Card, Logo, Pill, Mark, Steps } from '../../components/ui.jsx'
import { Shell, Split, Rail } from '../layout.jsx'
import { COMPANIES, DRIVE } from '../../data/companies.js'

export default function UnderReview({ nav }) {
  const rows = nav.picked.length ? nav.picked : ['zeta', 'razorpay']
  return (
    <Shell>
      <Split>
        <div>
          <div className="flex items-center gap-4">
            <Mark tone="good" className="w-20 h-20 mx-0 mb-0" />
            <div>
              <h1 className="text-[25px] lg:text-[30px] font-extrabold tracking-[-.032em]">Application submitted</h1>
              <p className="text-[15px] text-ink-2 mt-1.5">
                Companies will respond by <b className="text-ink">{DRIVE.closes}</b>
              </p>
            </div>
          </div>

          <Card flush className="mt-7">
            {rows.map((k) => (
              <div key={k} className="flex items-center gap-4 px-6 py-5 border-b border-line last:border-0">
                <Logo company={k} />
                <div className="flex-1 min-w-0">
                  <div className="text-base font-bold tracking-[-.018em]">{COMPANIES[k].name}</div>
                  <div className="text-[13.5px] text-ink-2 mt-0.5">{COMPANIES[k].role}</div>
                </div>
                <Pill tone="brand">Under review</Pill>
              </div>
            ))}
          </Card>

          <Btn variant="sec" className="mt-6" onClick={() => nav.go('pick')}>Add more companies</Btn>
        </div>

        <Rail>
          <div className="space-y-[18px]">
            <Card tint className="p-6">
              <div className="t2">What happens next</div>
              <div className="mt-3">
                <Steps items={[
                  'Companies review your resume',
                  'Get shortlisted? Pay a refundable ₹999 to confirm your seat',
                  'Attend the drive and get your ₹999 back',
                ]} />
              </div>
            </Card>
            <Btn variant="ghost" block onClick={() => nav.go('shortlisted')}>Simulate: a company shortlists you →</Btn>
            <Btn variant="ghost" block onClick={() => nav.go('notselected')}>Simulate: nobody shortlists you →</Btn>
          </div>
        </Rail>
      </Split>
    </Shell>
  )
}
