import { Btn, Logo, DateChip, Pill } from '../../components/ui.jsx'
import { Shell } from '../layout.jsx'
import { COMPANY_LIST, DRIVE, NEXT_DRIVE } from '../../data/companies.js'

function DriveCard({ drive, logos, primary, onView }) {
  return (
    <div className="bg-surface border border-line rounded-lg overflow-hidden shadow-s2 transition hover:shadow-s3 hover:-translate-y-0.5">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <DateChip day={drive.day} month={drive.month} tone={primary ? 'brand' : 'mute'} className="w-[62px] h-[66px] rounded-2xl" />
          <div className="flex-1">
            <div className="t1">{drive.city}</div>
            <div className="b2 mt-1">9:00 AM · {drive.venue}</div>
            <div className="flex items-center mt-4">
              {logos.map((c) => <Logo key={c.key} company={c} size="sm" className="-mr-2.5 ring-[3px] ring-white" />)}
              <span className="ml-[22px] text-[12.5px] font-bold text-ink-3">+{drive.companies - logos.length} more</span>
            </div>
          </div>
          <Pill>{drive.companies} companies</Pill>
        </div>
      </div>
      <div className="px-6 py-4 bg-surface-2 border-t border-line flex items-center justify-between gap-3.5">
        <span className="cap">Application closes {drive.closes}</span>
        <Btn size="sm" variant={primary ? 'pri' : 'sec'} onClick={onView} className="flex-none whitespace-nowrap">View Drive</Btn>
      </div>
    </div>
  )
}

export default function DrivesList({ nav }) {
  return (
    <Shell>
      <h1 className="text-[32px] lg:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08]">Upcoming drives</h1>
      <p className="text-[15px] text-ink-2 mt-3">Explore the companies visiting for placements.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px] mt-7">
        <DriveCard drive={{ ...DRIVE, venue: 'Masai campus, Bengaluru' }} logos={COMPANY_LIST} primary onView={() => nav.go('drive')} />
        <DriveCard drive={NEXT_DRIVE} logos={COMPANY_LIST.slice(2)} onView={() => nav.go('drive')} />
      </div>
    </Shell>
  )
}
