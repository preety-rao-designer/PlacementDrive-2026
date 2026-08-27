import { Btn, Logo, DateChip, Pill, cx } from '../../components/ui.jsx'
import { COMPANY_LIST, DRIVE, NEXT_DRIVE } from '../../data/companies.js'

function DriveCard({ drive, logos, primary, onView }) {
  return (
    <div className="bg-surface border border-line rounded-lg overflow-hidden shadow-s2">
      <div className="p-[18px] pb-3.5">
        <div className="flex items-start gap-3">
          <DateChip day={drive.day} month={drive.month} tone={primary ? 'brand' : 'mute'} />
          <div className="flex-1">
            <div className="t1">{drive.city}</div>
            <div className="b2 mt-[3px]">9:00 AM · {drive.venue}</div>
            <div className="flex items-center mt-3">
              {logos.map((c) => (
                <Logo key={c.key} company={c} size="sm" className="-mr-2 ring-[2.5px] ring-white" />
              ))}
              <span className="cap ml-[18px]">+{drive.companies - logos.length} more</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[18px] py-3 bg-surface-2 border-t border-line flex items-center justify-between gap-3">
        <span className="cap">Application closes {drive.closes}</span>
        <Btn size="sm" variant={primary ? 'pri' : 'sec'} onClick={onView} className="flex-none whitespace-nowrap">
          View drive
        </Btn>
      </div>
    </div>
  )
}

export default function DrivesList({ nav }) {
  return (
    <div className="px-5 pt-1 pb-8">
      <div className="d1">Upcoming<br />drives</div>
      <p className="b1 mt-2.5">Explore the companies visiting for placements.</p>

      <div className="mt-6 space-y-4">
        <DriveCard
          drive={{ ...DRIVE, venue: 'Masai campus' }}
          logos={COMPANY_LIST}
          primary
          onView={() => nav.go('drive')}
        />
        <DriveCard
          drive={NEXT_DRIVE}
          logos={COMPANY_LIST.slice(2)}
          onView={() => nav.go('drive')}
        />
      </div>
    </div>
  )
}
