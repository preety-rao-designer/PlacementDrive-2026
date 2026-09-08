import { Card, Logo, Pill, MetaChips, Kv } from '../../components/ui.jsx'
import { Pin, Clock, Check } from '../../components/Icons.jsx'
import { Shell, Split, Rail } from '../layout.jsx'
import { COMPANIES } from '../../data/companies.js'

function OppCard({ company, status, tone, room }) {
  const c = COMPANIES[company]
  return (
    <div className="border border-line rounded-md overflow-hidden shadow-s1 bg-white">
      <div className="px-6 py-[22px]">
        <div className="flex items-start gap-4">
          <Logo company={c} />
          <div className="flex-1 min-w-0">
            <div className="t2">{c.name}</div>
            <div className="b2 mt-1">{c.role}</div>
          </div>
          <Pill tone={tone}>{status}</Pill>
        </div>
        <MetaChips company={c} only={['exp', 'ctc', 'loc']} />
      </div>
      <div className="px-6 py-3.5 border-t border-line text-[13.5px] font-semibold flex items-center gap-2.5 bg-surface-2 text-ink-2">
        {room ? <Pin size={15} sw={2.4} /> : <Clock size={15} sw={2.4} />}
        {room || 'Room not assigned yet'}
      </div>
    </div>
  )
}

export default function Opportunities() {
  return (
    <Shell>
      <h1 className="d2">My opportunities</h1>
      <div className="relative overflow-hidden rounded-md px-[22px] py-[18px] mt-5 bg-[linear-gradient(150deg,#5B4BFF,#2E2AE0)] text-white flex items-center gap-3.5">
        <span className="absolute w-36 h-36 rounded-full bg-white/10 -top-16 -right-8 pointer-events-none" aria-hidden />
        <span className="absolute w-24 h-24 rounded-full bg-white/10 -bottom-12 right-24 pointer-events-none" aria-hidden />
        <span className="relative w-[9px] h-[9px] rounded-full bg-[#6EE7B7] flex-none shadow-[0_0_0_5px_rgba(110,231,183,.35)] animate-blink" />
        <div className="relative flex-1">
          <div className="text-base font-bold tracking-[-.018em]">Bengaluru drive is live</div>
          <div className="text-[13.5px] text-[#CFCBFF] mt-0.5">Masai campus · Checked in at 9:04 AM</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_372px] gap-8 mt-5">
        <div className="flex items-center justify-between">
          <div className="t1">2 companies today</div>
          <Pill>Updated live</Pill>
        </div>
      </div>

      <Split className="mt-5">
        <div className="space-y-[18px]">
          <OppCard company="zeta" status="Interview round" tone="good" room="Room 204 · 2nd floor · report by 10:30 AM" />
          <OppCard company="razorpay" status="Assignment round" tone="brand" />

          <p className="cap">Updates as companies move you through</p>
        </div>

        <Rail>
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <span className="text-good flex-none mt-0.5"><Check size={22} sw={2.4} /></span>
              <div>
                <div className="t2">₹999 refund initiated</div>
                <div className="b2 mt-1">You checked in at Masai campus. Refund will be credited within 2–4 working days.</div>
              </div>
            </div>
            <div className="h-px bg-line my-5" />
            <Kv k="Drive" v="Bengaluru · 24 Aug" />
            <Kv k="Scanned in" v="9:04 AM" />
            <Kv k="Companies" v="2" />
          </Card>
        </Rail>
      </Split>
    </Shell>
  )
}
