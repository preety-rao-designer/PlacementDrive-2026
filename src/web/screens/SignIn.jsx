import { Btn, Card, DateChip } from '../../components/ui.jsx'
import { Narrow } from '../layout.jsx'
import { DRIVE } from '../../data/companies.js'

export default function SignIn({ nav }) {
  return (
    <Narrow className="pt-6 space-y-7">
      <div className="text-center">
        <h1 className="text-[25px] lg:text-[30px] font-extrabold tracking-[-.032em]">Sign in to continue</h1>
        <p className="text-[15px] text-ink-2 mt-3">To apply to the Bengaluru drive</p>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <DateChip day={DRIVE.day} month={DRIVE.month} className="w-[62px] h-[66px] rounded-2xl" />
          <div className="flex-1">
            <div className="t2">{DRIVE.city}</div>
            <div className="b2 mt-0.5">{DRIVE.companies} companies · Application closes {DRIVE.closes}</div>
          </div>
        </div>
        <div className="h-px bg-line my-6" />
        <Btn block onClick={() => nav.go('resume')}>Continue with Masai account</Btn>
        <p className="cap text-center mt-3.5">Takes you straight back to this drive</p>
      </Card>

      <Card tint className="p-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className="t2">Not a Masai learner?</div>
            <div className="b2 mt-1">Open to enrolled learners for now.</div>
          </div>
          <Btn size="sm" variant="sec" onClick={() => nav.go('waitlist')}>Notify me</Btn>
        </div>
      </Card>
    </Narrow>
  )
}
