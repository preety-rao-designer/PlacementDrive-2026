import { Btn, Card, Logo, Pill, Notice } from '../../components/ui.jsx'
import { Alert } from '../../components/Icons.jsx'
import { COMPANIES } from '../../data/companies.js'
import { Ticket } from './Confirmed.jsx'

export default function CompanyPulled({ nav }) {
  return (
    <div className="relative min-h-full flex flex-col">
      <div className="flex-1 pt-2 pb-32">
        <div className="px-5">
          <h1 className="d2 mb-4">Your pass</h1>
          <Notice tone="warn" title="Zeta has pulled out" icon={<Alert size={19} />}>
            Razorpay is still interviewing you. Your seat and your ₹999 stay as they are.
          </Notice>
        </div>

        <div className="px-5 mt-5">
          <Card flush>
            {[['zeta', true], ['razorpay', false]].map(([k, dim]) => (
              <div key={k} className="flex items-center gap-3 px-[18px] py-4 border-b border-line last:border-0">
                <Logo company={k} dim={dim} />
                <div className="flex-1 min-w-0">
                  <div className={'text-[14.5px] font-bold tracking-[-.015em] ' + (dim ? 'line-through opacity-55' : '')}>
                    {COMPANIES[k].name}
                  </div>
                  <div className="text-[12.5px] text-ink-2 mt-px">{COMPANIES[k].role}</div>
                </div>
                <Pill tone={dim ? 'stop' : 'good'}>{dim ? 'Cancelled' : 'Shortlisted'}</Pill>
              </div>
            ))}
          </Card>
        </div>

        <div className="bg-surface-2 px-5 py-5 mt-5">
          <Ticket meeting="Razorpay" updated />
        </div>

        <div className="px-5 mt-5">
          <Card tint>
            <p className="b2">
              Since Zeta dropped out, your day is shorter now. If you'd rather skip it, you can withdraw for a full refund.
            </p>
          </Card>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 px-5 pt-3.5 pb-6 bg-gradient-to-b from-transparent to-surface to-[24%] space-y-2.5">
        <Btn variant="sec" block>Withdraw And Get ₹999 Back</Btn>
        <Btn variant="ghost" block onClick={() => nav.go('confirmed')}>Keep My Seat</Btn>
      </div>
    </div>
  )
}
