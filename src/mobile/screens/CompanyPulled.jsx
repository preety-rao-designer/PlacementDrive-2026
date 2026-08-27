import { Btn, Card, Logo, Pill, Notice } from '../../components/ui.jsx'
import { Alert } from '../../components/Icons.jsx'
import { COMPANIES } from '../../data/companies.js'
import { Ticket } from './Confirmed.jsx'

export default function CompanyPulled({ nav }) {
  return (
    <div className="pt-2 pb-8">
      <div className="px-5">
        <Notice tone="warn" title="Zeta has pulled out" icon={<Alert size={19} />}>
          Razorpay is still interviewing. Your seat and your ₹999 stay put.
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

      <div className="px-5 mt-5 space-y-4">
        <Card tint>
          <p className="b2">
            Your day just got shorter. Withdraw if you'd rather not attend — full refund, since this wasn't your call.
          </p>
        </Card>
        <Btn variant="sec" block>Withdraw and get ₹999 back</Btn>
        <Btn variant="ghost" block onClick={() => nav.go('confirmed')}>Keep my seat</Btn>
      </div>
    </div>
  )
}
