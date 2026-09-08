import { Btn, Card, Mark, Steps } from '../../components/ui.jsx'
import { LEARNER } from '../../data/companies.js'

export default function Waitlisted({ nav }) {
  return (
    <div className="relative min-h-full flex flex-col">
      <div className="flex-1 px-5 pt-8 pb-32 space-y-6">
        <Mark tone="good" />
        <div className="text-center">
          <h1 className="d2">You're on the list</h1>
          <p className="b1 mt-2.5">
            We'll email <b className="text-ink">{LEARNER.email}</b> the moment drives open beyond Masai learners.
          </p>
        </div>

        <Card tint>
          <div className="t3 mb-1">While you wait</div>
          <Steps items={[
            "Browse who's hiring at upcoming drives",
            'See what roles ask for before you apply',
            'Look at programmes that get you in the room',
          ]} />
        </Card>
      </div>

      <div className="sticky inset-x-0 bottom-0 px-5 pt-3.5 pb-6 bg-gradient-to-b from-transparent to-surface to-[24%] space-y-2.5">
        <Btn block onClick={() => nav.go('list')}>Browse Upcoming Drives</Btn>
        <Btn variant="sec" block>Explore Masai Programmes</Btn>
      </div>
    </div>
  )
}
