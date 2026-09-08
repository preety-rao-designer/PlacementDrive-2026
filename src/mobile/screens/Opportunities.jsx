import { Card, Logo, Pill, MetaChips } from '../../components/ui.jsx'
import { Pin, Clock, Check } from '../../components/Icons.jsx'
import { COMPANIES } from '../../data/companies.js'

function OppCard({ company, status, tone, room }) {
  return (
    <div className="border border-line rounded-md overflow-hidden shadow-s1 bg-surface">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <Logo company={company} />
          <div className="flex-1 min-w-0">
            <div className="t3">{COMPANIES[company].name}</div>
            <div className="b2 mt-0.5">{COMPANIES[company].role}</div>
          </div>
          <Pill tone={tone}>{status}</Pill>
        </div>
        <MetaChips company={COMPANIES[company]} only={['exp', 'ctc', 'loc']} />
      </div>
      <div className="px-4 py-2.5 border-t border-line text-[12.5px] font-semibold flex items-center gap-2 bg-surface-2 text-ink-2">
        {room ? <Pin size={14} sw={2.4} /> : <Clock size={14} sw={2.4} />}
        {room || 'Room not assigned yet'}
      </div>
    </div>
  )
}

export default function Opportunities() {
  return (
    <div className="px-5 pt-1.5 pb-8 space-y-4">
      <h1 className="d2">My opportunities</h1>
      <div className="relative overflow-hidden rounded-md px-4 py-3.5 bg-[linear-gradient(150deg,#5B4BFF,#2E2AE0)] text-white flex items-center gap-3">
        <span className="absolute w-24 h-24 rounded-full bg-white/10 -top-10 -right-6 pointer-events-none" aria-hidden />
        <span className="absolute w-16 h-16 rounded-full bg-white/10 -bottom-8 right-14 pointer-events-none" aria-hidden />
        <span className="relative w-2 h-2 rounded-full bg-[#6EE7B7] flex-none shadow-[0_0_0_4px_rgba(110,231,183,.35)] animate-blink" />
        <div className="relative flex-1">
          <div className="text-sm font-bold tracking-[-.015em]">Bengaluru drive is live</div>
          <div className="text-xs text-[#CFCBFF] mt-0.5">Masai campus · Checked in at 9:04 AM</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="t2">2 companies today</div>
        <Pill>Updated live</Pill>
      </div>

      <OppCard company="zeta" status="Interview round" tone="good" room="Room 204 · 2nd floor · report by 10:30 AM" />
      <OppCard company="razorpay" status="Assignment round" tone="brand" />

      <Card tint>
        <div className="flex items-start gap-2.5">
          <span className="text-good flex-none mt-px"><Check size={18} sw={2.4} /></span>
          <div>
            <div className="t3">₹999 refund initiated</div>
            <div className="b2 mt-[3px]">You checked in at Masai campus. Refund will be credited within 2–4 working days.</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
