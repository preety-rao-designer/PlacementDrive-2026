import { Btn, DateChip, Kv } from '../../components/ui.jsx'
import { QrCode } from '../../components/Icons.jsx'
import { Shell } from '../layout.jsx'
import { COMPANIES, DRIVE, LEARNER } from '../../data/companies.js'

/** Horizontal pass: coloured stub with the QR, details on the right. */
export function Ticket({ meeting, updated, footer }) {
  return (
    <div className="bg-white rounded-lg shadow-s2 overflow-hidden grid grid-cols-1 lg:grid-cols-[290px_minmax(0,1fr)]">
      <div className="relative bg-[linear-gradient(160deg,#5B4BFF,#2E2AE0)] text-white p-[30px] text-center border-b-2 border-dashed border-white/35 lg:border-b-0 lg:after:content-[''] lg:after:absolute lg:after:-right-px lg:after:inset-y-0 lg:after:border-l-2 lg:after:border-dashed lg:after:border-white/35">
        <div className="text-[11.5px] font-extrabold tracking-[.1em] uppercase opacity-75">
          Entry pass{updated && ' · updated'}
        </div>
        {!updated && (
          <div className="w-[184px] h-[184px] mx-auto rounded-[14px] p-[11px] bg-white mt-[18px]">
            <QrCode className="w-full h-full block" />
          </div>
        )}
        <div className={'t1 ' + (updated ? 'mt-[26px]' : 'mt-5')}>{LEARNER.name}</div>
        <div className="text-[12.5px] opacity-70 mt-1">{LEARNER.id}</div>
      </div>

      <div className="p-[30px]">
        <div className="flex items-center justify-between">
          <div className="t1">{DRIVE.city}</div>
          <DateChip day={DRIVE.day} month={DRIVE.month} className="w-[62px] h-[66px] rounded-2xl" />
        </div>
        <div className="h-px bg-line my-5" />
        <Kv k="Reporting" v={DRIVE.time} />
        <Kv k="Venue" v={DRIVE.venue} />
        <Kv k="Meeting" v={meeting} />
        {footer && <><div className="h-px bg-line my-5" />{footer}</>}
      </div>
    </div>
  )
}

export default function Confirmed({ nav }) {
  const meeting = nav.picked.length ? nav.picked.map((k) => COMPANIES[k].name).join(' · ') : 'Zeta'
  return (
    <Shell>
      <div className="text-center mb-7">
        <h1 className="text-[25px] lg:text-[30px] font-extrabold tracking-[-.032em]">Seat confirmed</h1>
        <p className="text-[15px] text-ink-2 mt-2.5">Show this pass at the entry gate on 24 August</p>
      </div>

      <div className="bg-surface-2 rounded-lg p-5 lg:p-[34px]">
        <Ticket
          meeting={meeting}
          footer={
            <div className="flex items-center justify-between flex-wrap gap-3.5">
              <div>
                <div className="text-[14.5px] font-bold tracking-[-.012em]">₹999 seat deposit</div>
                <div className="text-[13.5px] text-ink-2 mt-0.5">Refunded automatically once the drive ends.</div>
              </div>
              <div className="flex gap-2.5">
                <Btn size="sm" variant="sec">Add To Calendar</Btn>
                <Btn size="sm" variant="sec">Directions</Btn>
              </div>
            </div>
          }
        />
      </div>

      <div className="flex gap-3 justify-center mt-7">
        <Btn variant="sec" onClick={() => nav.go('opps')}>View My Opportunities</Btn>
        <Btn variant="ghost" onClick={() => nav.go('list')}>Back To Drives</Btn>
      </div>
    </Shell>
  )
}
