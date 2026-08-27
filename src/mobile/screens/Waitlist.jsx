import { useState } from 'react'
import { Btn, Card, Pill, Field, Input, Select, Checkbox } from '../../components/ui.jsx'

export default function Waitlist({ nav }) {
  const [email, setEmail] = useState('')
  const [optIn, setOptIn] = useState(false)
  const valid = /.+@.+\..+/.test(email.trim())

  return (
    <div className="px-5 pt-2.5 pb-8 space-y-6">
      <div>
        <Pill>Not enrolled at Masai</Pill>
        <h1 className="d2 mt-3">Drives aren't open to you yet</h1>
        <p className="b1 mt-2.5">
          Companies here interview enrolled learners only. Leave your email and we'll let you know when drives open to everyone.
        </p>
      </div>

      <div className="space-y-4">
        <Field label="Full name"><Input type="text" placeholder="Preety Rao" /></Field>
        <Field label="Email">
          <Input type="email" placeholder="preety@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field label="What are you looking for?">
          <Select defaultValue="Backend engineering">
            <option>Backend engineering</option>
            <option>Frontend engineering</option>
            <option>Data analytics</option>
            <option>Full-stack</option>
            <option>Still deciding</option>
          </Select>
        </Field>
        <div className="flex gap-3 items-start">
          <Checkbox checked={optIn} onClick={() => setOptIn((v) => !v)} className="mt-0.5" />
          <span className="b2 leading-snug cursor-pointer" onClick={() => setOptIn((v) => !v)}>
            Also tell me about Masai programmes that lead to these drives
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        <Btn block disabled={!valid} onClick={() => nav.go('waitlisted')}>Join the waitlist</Btn>
        <p className="cap text-center">We'll only email about drives. Unsubscribe any time.</p>
      </div>

      <div className="h-px bg-line" />

      <Card tint>
        <div className="t3">You can still look around</div>
        <p className="b2 mt-1.5">Every drive and company is public. No account needed.</p>
        <Btn variant="sec" block className="mt-3.5" onClick={() => nav.go('list')}>Browse drives</Btn>
      </Card>
    </div>
  )
}
