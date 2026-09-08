import { Btn, Card, DateChip } from '../../components/ui.jsx'
import { DRIVE } from '../../data/companies.js'

export default function SignIn({ nav }) {
  return (
    <div className="px-5 pt-3 pb-8 space-y-6">
      <div>
        <h1 className="d2">Sign in to apply</h1>
      </div>

      <Card tint>
        <div className="flex items-center gap-3">
          <DateChip day={DRIVE.day} month={DRIVE.month} tone="mute" className="bg-white" />
          <div className="flex-1">
            <div className="t2">{DRIVE.city}</div>
            <div className="b2 mt-0.5">{DRIVE.companies} companies · Application closes {DRIVE.closes}</div>
          </div>
        </div>
      </Card>

      <Btn block onClick={() => nav.go('resume')}>Continue With Masai Account</Btn>

      <div className="h-px bg-line" />

      <Card>
        <div className="t2">Not a Masai learner?</div>
        <p className="b2 mt-1.5">Future placement drives will open to all learners. Get early access when public registrations launch.</p>
        <Btn variant="sec" block className="mt-4" onClick={() => nav.go('waitlist')}>
          Notify Me About Future Drives
        </Btn>
      </Card>
    </div>
  )
}
