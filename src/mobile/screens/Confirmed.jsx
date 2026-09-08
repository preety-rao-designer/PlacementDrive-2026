import { Btn, Card, DateChip, Kv } from '../../components/ui.jsx'
import { QrCode, Check } from '../../components/Icons.jsx'
import { COMPANIES, DRIVE, LEARNER } from '../../data/companies.js'

/** Ticket-style pass. Notches are drawn with the tinted band behind showing through. */
export function Ticket({ meeting, updated }) {
  return (
    <div className="bg-surface rounded-lg shadow-s2 overflow-hidden relative">
      <div className="bg-[linear-gradient(150deg,#5B4BFF,#2E2AE0)] text-white px-5 py-4 flex items-center justify-between">
        <div>
          <div className="text-[11px] font-bold tracking-[.08em] uppercase opacity-70">
            Entry pass{updated && ' · updated'}
          </div>
          <div className="text-[17px] font-extrabold tracking-[-.02em] mt-[3px]">{DRIVE.city}</div>
        </div>
        <DateChip day={DRIVE.day} month={DRIVE.month} tone="onDark" />
      </div>

      {!updated && (
        <div className="px-5 pt-6 pb-5 text-center">
          <div className="w-[172px] h-[172px] mx-auto rounded-[14px] p-2.5 bg-white ring-1 ring-line">
            <QrCode className="w-full h-full block" />
          </div>
          <div className="t1 mt-[18px]">{LEARNER.name}</div>
          <div className="cap mt-[3px]">{LEARNER.id}</div>
        </div>
      )}
      {updated && (
        <div className="px-5 pt-[18px] pb-5 text-center">
          <div className="t1">{LEARNER.name}</div>
          <div className="cap mt-[3px]">{LEARNER.id}</div>
        </div>
      )}

      <div className="relative h-6">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface-2" />
        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface-2" />
        <div className="absolute left-4 right-4 top-1/2 border-t-2 border-dashed border-line-2" />
      </div>

      <div className="px-5 pt-1 pb-5">
        <Kv k="Reporting" v={DRIVE.time} />
        <Kv k="Venue" v={DRIVE.venueShort} />
        <Kv k="Meeting" v={meeting} />
      </div>
    </div>
  )
}

export default function Confirmed({ nav }) {
  const meeting = nav.picked.length
    ? nav.picked.map((k) => COMPANIES[k].name).join(' · ')
    : 'Zeta'

  return (
    <div className="relative min-h-full flex flex-col">
      <div className="flex-1 pt-2 pb-32">
        <div className="text-center mb-[18px] px-5">
          <h1 className="d2">Seat confirmed</h1>
          <p className="b1 mt-2">Show this at the entry gate</p>
        </div>

        <div className="bg-surface-2 px-5 py-5">
          <Ticket meeting={meeting} />
        </div>

        <div className="px-5 mt-5 space-y-4">
          <div className="flex gap-2.5">
            <Btn variant="sec" size="sm" className="flex-1">Add To Calendar</Btn>
            <Btn variant="sec" size="sm" className="flex-1">Directions</Btn>
          </div>

          <Card tint>
            <div className="flex items-start gap-2.5">
              <span className="text-good flex-none mt-px"><Check size={18} sw={2.4} /></span>
              <div>
                <div className="t3">₹999 seat deposit</div>
                <div className="b2 mt-[3px]">Refunded automatically once the drive ends.</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 px-5 pt-3.5 pb-6 bg-gradient-to-b from-transparent to-surface to-[24%] space-y-2.5">
        <Btn variant="sec" block onClick={() => nav.go('opps')}>View My Opportunities</Btn>
        <Btn variant="ghost" block onClick={() => nav.go('list')}>Back To Drives</Btn>
      </div>
    </div>
  )
}
