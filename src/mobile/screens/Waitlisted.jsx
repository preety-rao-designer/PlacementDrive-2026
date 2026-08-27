import { Btn, Card, Mark, Steps } from '../../components/ui.jsx'
import { LEARNER } from '../../data/companies.js'

export default function Waitlisted({ nav }) {
  return (
    <div className="px-5 pt-8 pb-8 space-y-6">
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

      <div className="space-y-2.5">
        <Btn block onClick={() => nav.go('list')}>Browse upcoming drives</Btn>
        <Btn variant="sec" block>Explore Masai programmes</Btn>
      </div>
    </div>
  )
}
