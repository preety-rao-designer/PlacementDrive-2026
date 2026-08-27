import { useState, useCallback } from 'react'
import { usePrototype } from '../components/usePrototype.js'
import { PayFlow } from '../components/PayFlow.jsx'
import { Modal } from './Modal.jsx'
import { LEARNER } from '../data/companies.js'
import { cx } from '../components/ui.jsx'

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
  { id: 'home',        label: '1 · Masai home (banner in situ)', bare: true },
  { id: 'list',        label: '2 · Drives list' },
  { id: 'drive',       label: '3 · Drive detail' },
  { id: 'signin',      label: '4 · Sign in' },
  { id: 'waitlist',    label: '4a · Not eligible — waitlist' },
  { id: 'waitlisted',  label: '4b · Waitlisted' },
  { id: 'resume',      label: '5 · Resume', signedIn: true },
  { id: 'pick',        label: '6 · Pick companies', signedIn: true },
  { id: 'review',      label: '7 · Under review', signedIn: true },
  { id: 'shortlisted', label: '8 · Shortlisted', signedIn: true },
  { id: 'pay',         label: '8a · Payment success', signedIn: true },
  { id: 'confirmed',   label: '9 · Confirmed pass', signedIn: true },
  { id: 'notselected', label: '10 · Not selected', signedIn: true },
  { id: 'cancelled',   label: '11 · Company cancelled', signedIn: true },
  { id: 'copulled',    label: '11a · One company pulled out', signedIn: true },
  { id: 'opps',        label: '12 · My opportunities', signedIn: true },
]

export default function WebApp() {
  const p = usePrototype('home')
  const [modal, setModal] = useState(null)
  const [paying, setPaying] = useState(false)

  const meta = SCREENS.find((s) => s.id === p.screen) ?? SCREENS[0]
  const openModal = useCallback((key, ctx = 'browse') => setModal({ key, ctx }), [])
  const closeModal = useCallback(() => setModal(null), [])
  const nav = { ...p, openModal, startPay: () => setPaying(true) }

  const screens = {
    home: Home, list: DrivesList, drive: DriveDetail, signin: SignIn,
    waitlist: Waitlist, waitlisted: Waitlisted, resume: Resume, pick: PickCompanies,
    review: UnderReview, shortlisted: Shortlisted, confirmed: Confirmed,
    notselected: NotSelected, cancelled: Cancelled, copulled: CompanyPulled, opps: Opportunities,
  }
  const Screen = screens[p.screen] ?? Home

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center gap-4 flex-wrap mb-3.5">
        <h1 className="text-base font-extrabold tracking-[-.02em]">Placement drives — web, high fidelity</h1>
        <div className="flex gap-2.5 items-center">
          <select
            value={p.screen === 'pay' ? 'shortlisted' : p.screen}
            onChange={(e) => {
              if (e.target.value === 'pay') { p.jump('shortlisted'); setPaying(true) }
              else { setPaying(false); p.jump(e.target.value) }
            }}
            className="font-sans text-[13px] font-semibold px-3 py-2.5 rounded-[10px] border border-line-2 bg-white shadow-s1 cursor-pointer"
            aria-label="Jump to screen"
          >
            {SCREENS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
          <button
            onClick={() => { setPaying(false); setModal(null); p.reset() }}
            className="font-sans text-[13px] font-semibold px-3.5 py-2.5 rounded-[10px] border border-line-2 bg-white shadow-s1 cursor-pointer"
          >
            Reset
          </button>
        </div>
        <a
          href="https://www.masaischool.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-[12.5px] font-bold text-brand bg-white border border-line-2 px-3.5 py-2 rounded-[10px] shadow-s1 hover:bg-surface-2"
        >
          Open masaischool.com ↗
        </a>
      </div>

      <div className="relative bg-surface rounded-2xl overflow-hidden shadow-s3 min-h-[820px]">
        {!meta.bare && (
          <div className="h-[72px] bg-white/[.86] backdrop-blur-md border-b border-line flex items-center gap-8 px-[34px] sticky top-0 z-20">
            <button onClick={() => p.jump('home')} className="text-[21px] font-extrabold tracking-[-.05em]">
              masai<em className="not-italic text-masai-red">.</em>
            </button>
            <nav className="hidden md:flex gap-6 text-sm font-semibold text-ink-2">
              <button onClick={() => p.jump('home')} className="py-1.5 border-b-2 border-transparent hover:text-ink">Home</button>
              <button onClick={() => p.jump('list')} className="py-1.5 border-b-2 border-brand text-ink">Placement drives</button>
              <span className="py-1.5">Programmes</span>
              <span className="py-1.5">Success stories</span>
            </nav>
            <div className="ml-auto flex items-center gap-3.5">
              <span className="text-[13.5px] font-semibold text-ink-2">
                {meta.signedIn ? LEARNER.name : 'Not signed in'}
              </span>
              {meta.signedIn && (
                <div className="w-[38px] h-[38px] rounded-full bg-brand-tint text-brand grid place-items-center text-[13px] font-extrabold">
                  {LEARNER.initials}
                </div>
              )}
            </div>
          </div>
        )}

        <div key={p.screen} className={cx('animate-fade', !meta.bare && 'px-[34px] py-11 pb-[72px]')}>
          <Screen nav={nav} />
        </div>

        <Modal
          data={modal}
          onClose={closeModal}
          picked={p.picked}
          onToggle={(k) => { p.togglePick(k); closeModal() }}
          onInterest={() => { closeModal(); p.go('signin') }}
        />
      </div>

      <PayFlow fixed open={paying} onDone={() => { setPaying(false); p.go('confirmed') }} />
    </div>
  )
}
