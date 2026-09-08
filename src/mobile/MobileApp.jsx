import { useState, useCallback } from 'react'
import { usePrototype } from '../components/usePrototype.js'
import { PayFlow } from '../components/PayFlow.jsx'
import { Sheet } from './Sheet.jsx'
import { ChevronLeft } from '../components/Icons.jsx'
import { LEARNER } from '../data/companies.js'
import { cx, Toast } from '../components/ui.jsx'

import Home from './screens/Home.jsx'
import DrivesList from './screens/DrivesList.jsx'
import DriveDetail from './screens/DriveDetail.jsx'
import SignIn from './screens/SignIn.jsx'
import Waitlist from './screens/Waitlist.jsx'
import Waitlisted from './screens/Waitlisted.jsx'
import Resume from './screens/Resume.jsx'
import PickCompanies from './screens/PickCompanies.jsx'
import UnderReview from './screens/UnderReview.jsx'
import Shortlisted from './screens/Shortlisted.jsx'
import Confirmed from './screens/Confirmed.jsx'
import NotSelected from './screens/NotSelected.jsx'
import Cancelled from './screens/Cancelled.jsx'
import CompanyPulled from './screens/CompanyPulled.jsx'
import Opportunities from './screens/Opportunities.jsx'

export const SCREENS = [
  { id: 'home',        label: '1 · Website home',        noBack: true, site: true },
  { id: 'list',        label: '2 · Drives list' },
  { id: 'drive',       label: '3 · Drive detail' },
  { id: 'signin',      label: '4 · Sign in' },
  { id: 'waitlist',    label: '4a · Not eligible' },
  { id: 'waitlisted',  label: "4b · Waitlisted" },
  { id: 'resume',      label: '5 · Resume',              signedIn: true },
  { id: 'pick',        label: '6 · Pick companies',      signedIn: true },
  { id: 'review',      label: '7 · Under review',        signedIn: true },
  { id: 'shortlisted', label: '8 · Shortlisted',         signedIn: true },
  { id: 'pay',         label: '8a · Payment success',    signedIn: true },
  { id: 'confirmed',   label: '9 · Confirmed pass',      signedIn: true },
  { id: 'notselected', label: '10 · Not selected',       signedIn: true },
  { id: 'cancelled',   label: '11 · Company cancelled',  signedIn: true },
  { id: 'copulled',    label: '11a · One company pulled out', signedIn: true },
  { id: 'opps',        label: '12 · My opportunities',   signedIn: true },
]

export default function MobileApp() {
  const p = usePrototype('home')
  const [sheet, setSheet] = useState(null) // { key, ctx }
  const [paying, setPaying] = useState(false)

  const meta = SCREENS.find((s) => s.id === p.screen) ?? SCREENS[0]
  const openSheet = useCallback((key, ctx = 'browse') => setSheet({ key, ctx }), [])
  const closeSheet = useCallback(() => setSheet(null), [])

  const nav = { ...p, openSheet, startPay: () => setPaying(true) }

  const screens = {
    home: Home, list: DrivesList, drive: DriveDetail, signin: SignIn,
    waitlist: Waitlist, waitlisted: Waitlisted, resume: Resume, pick: PickCompanies,
    review: UnderReview, shortlisted: Shortlisted, confirmed: Confirmed,
    notselected: NotSelected, cancelled: Cancelled, copulled: CompanyPulled, opps: Opportunities,
  }
  const Screen = screens[p.screen] ?? Home

  return (
    <div className="flex flex-col items-center">
      {/* controls */}
      <div className="w-[392px] mb-8">
        <h1 className="text-base font-bold tracking-[-.02em] mb-2.5">Placement drives — high fidelity</h1>
        <div className="flex gap-2">
          <select
            value={p.screen === 'pay' ? 'shortlisted' : p.screen}
            onChange={(e) => {
              if (e.target.value === 'pay') { p.jump('shortlisted'); setPaying(true) }
              else { setPaying(false); p.jump(e.target.value) }
            }}
            className="flex-1 min-w-0 font-sans text-[12.5px] font-semibold px-3 py-2.5 rounded-[10px] border border-line-2 bg-white shadow-s1 cursor-pointer"
            aria-label="Jump to screen"
          >
            {SCREENS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
          <button
            onClick={() => { setPaying(false); setSheet(null); p.reset() }}
            className="font-sans text-[12.5px] font-semibold px-3.5 py-2.5 rounded-[10px] border border-line-2 bg-white shadow-s1 cursor-pointer flex-none"
          >
            Reset
          </button>
        </div>
      </div>

      {p.screen === 'review' && (
        <div className="w-[392px] mb-8 flex gap-2">
          <button
            onClick={() => p.go('shortlisted')}
            className="flex-1 font-sans text-[12.5px] font-semibold px-3.5 py-2.5 rounded-[10px] border border-dashed border-line-2 bg-white shadow-s1 cursor-pointer text-ink-2"
          >
            Simulate: shortlisted →
          </button>
          <button
            onClick={() => p.go('notselected')}
            className="flex-1 font-sans text-[12.5px] font-semibold px-3.5 py-2.5 rounded-[10px] border border-dashed border-line-2 bg-white shadow-s1 cursor-pointer text-ink-2"
          >
            Simulate: not selected →
          </button>
        </div>
      )}

      {/* device */}
      <div className={cx('relative w-[392px] h-[812px] rounded-[44px] overflow-hidden flex flex-col shadow-device', meta.site ? 'bg-masai-black' : 'bg-surface')}>
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-[#14141C] rounded-full z-40" />

        <div className={cx('h-[52px] flex-none flex items-end justify-between px-[30px] pb-1.5 text-sm font-bold tracking-[-.01em] relative z-30', meta.site && 'text-white')}>
          <span>9:41</span>
          <span className="flex items-center gap-1.5">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden><rect y="7" width="3" height="4" rx="1" /><rect x="4.5" y="5" width="3" height="6" rx="1" /><rect x="9" y="2.5" width="3" height="8.5" rx="1" /><rect x="13.5" width="3" height="11" rx="1" /></svg>
            <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor" aria-hidden><path d="M8 9.2 5.6 6.8a3.4 3.4 0 0 1 4.8 0L8 9.2Zm-4-4a6.8 6.8 0 0 1 8 0l1.4-1.5a8.8 8.8 0 0 0-10.8 0L4 5.2Z" /></svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-hidden><rect x=".7" y=".7" width="20" height="10.6" rx="3" stroke="currentColor" strokeOpacity=".4" /><rect x="2.4" y="2.4" width="15.6" height="7.2" rx="1.8" fill="currentColor" /><path d="M22.4 4.2v3.6c1-.4 1.6-1 1.6-1.8s-.6-1.4-1.6-1.8Z" fill="currentColor" fillOpacity=".5" /></svg>
          </span>
        </div>

        {!meta.site && (
          <div className="flex-none flex items-center gap-3 px-5 pt-1.5 pb-3 relative z-30">
            {!meta.noBack && (
              <button onClick={() => p.back('home')} aria-label="Back" className="w-[34px] h-[34px] rounded-full grid place-items-center bg-surface-2 active:bg-surface-3 flex-none">
                <ChevronLeft sw={2.4} />
              </button>
            )}
            <div className="flex-1" />
            {meta.signedIn && (
              <div className="w-[34px] h-[34px] rounded-full grid place-items-center bg-brand-tint text-brand text-[12.5px] font-extrabold flex-none">
                {LEARNER.initials}
              </div>
            )}
          </div>
        )}

        <div key={p.screen} className="flex-1 overflow-y-auto overflow-x-hidden no-bar animate-fade">
          <Screen nav={nav} />
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] rounded-full bg-ink/20 z-40 pointer-events-none" />

        <Toast message={p.toast} />

        <Sheet
          data={sheet}
          onClose={closeSheet}
          picked={p.picked}
          onToggle={(k) => { p.togglePick(k); closeSheet() }}
          onInterest={() => { closeSheet(); p.go('signin') }}
        />

        <PayFlow open={paying} onDone={() => { setPaying(false); p.notify('Payment successful'); p.go('confirmed') }} />
      </div>
    </div>
  )
}
