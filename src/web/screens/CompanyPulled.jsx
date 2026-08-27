import { Btn, Card, Logo, Pill, Notice } from '../../components/ui.jsx'
import { Alert } from '../../components/Icons.jsx'
import { Shell, Split, Rail } from '../layout.jsx'
import { COMPANIES } from '../../data/companies.js'
import { Ticket } from './Confirmed.jsx'

export default function CompanyPulled({ nav }) {
  return (
    <Shell>
      <Split>
        <div>
          <Notice tone="warn" title="Zeta has pulled out" icon={<Alert size={21} />}>
            Razorpay is still interviewing. Your seat and your ₹999 stay put.
          </Notice>

          <Card flush className="mt-7">
            {[['zeta', true], ['razorpay', false]].map(([k, dim]) => (
              <div key={k} className="flex items-center gap-4 px-6 py-5 border-b border-line last:border-0">
                <Logo company={k} dim={dim} />
                <div className="flex-1 min-w-0">
                  <div className={'text-base font-bold tracking-[-.018em] ' + (dim ? 'line-through opacity-55' : '')}>
                    {COMPANIES[k].name}
                  </div>
                  <div className="text-[13.5px] text-ink-2 mt-0.5">{COMPANIES[k].role}</div>
                </div>
                <Pill tone={dim ? 'stop' : 'good'}>{dim ? 'Cancelled' : 'Shortlisted'}</Pill>
              </div>
            ))}
          </Card>

          <div className="bg-surface-2 rounded-lg p-5 lg:p-8 mt-7">
            <Ticket meeting="Razorpay" updated />
          </div>
        </div>

        <Rail>
          <Card className="p-6">
            <div className="t2">Your day just got shorter</div>
            <p className="text-[15px] text-ink-2 mt-2.5">
              Withdraw if you'd rather not attend — full refund, since this wasn't your call.
            </p>
            <div className="h-px bg-line my-5" />
            <Btn variant="sec" block>Withdraw and get ₹999 back</Btn>
            <Btn variant="ghost" block className="mt-2.5" onClick={() => nav.go('confirmed')}>Keep my seat</Btn>
          </Card>
        </Rail>
      </Split>
    </Shell>
  )
}
