import { Btn, Card, Mark, Steps } from '../../components/ui.jsx'
import { Narrow } from '../layout.jsx'
import { LEARNER } from '../../data/companies.js'

export default function Waitlisted({ nav }) {
  return (
    <Narrow className="text-center pt-12 space-y-7">
      <Mark tone="good" className="w-20 h-20" />
      <div>
        <h1 className="text-[25px] lg:text-[30px] font-extrabold tracking-[-.032em]">You're on the list</h1>
        <p className="text-[15px] text-ink-2 mt-3">
          We'll email <b className="text-ink">{LEARNER.email}</b> the moment drives open beyond Masai learners.
        </p>
      </div>

      <Card tint className="p-6 text-left">
        <div className="t2">While you wait</div>
        <div className="mt-2.5">
          <Steps items={[
            "Browse who's hiring at upcoming drives",
            'See what roles ask for before you apply',
            'Look at programmes that get you in the room',
          ]} />
        </div>
      </Card>

      <div className="flex gap-3 justify-center">
        <Btn onClick={() => nav.go('list')}>Browse Upcoming Drives</Btn>
        <Btn variant="sec">Explore Masai Programmes</Btn>
      </div>
    </Narrow>
  )
}
