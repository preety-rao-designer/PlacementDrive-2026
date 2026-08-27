import { useState } from 'react'
import { Btn, Card, Pill, Field, Input, Select, Checkbox } from '../../components/ui.jsx'
import { Shell, Split, Rail } from '../layout.jsx'

export default function Waitlist({ nav }) {
  const [email, setEmail] = useState('')
  const [optIn, setOptIn] = useState(false)
  const valid = /.+@.+\..+/.test(email.trim())

  return (
    <Shell>
      <Split>
        <div>
          <Pill>Not enrolled at Masai</Pill>
          <h1 className="text-[32px] lg:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08] mt-4">
            Drives aren't open to you yet
          </h1>
          <p className="text-[15px] text-ink-2 mt-3 max-w-[520px]">
            Companies here interview enrolled learners only. Leave your email and we'll let you know when drives open to everyone.
          </p>

          <Card className="p-6 mt-7 max-w-[520px]">
            <div className="space-y-[18px]">
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
                <span className="b2 leading-relaxed cursor-pointer" onClick={() => setOptIn((v) => !v)}>
                  Also tell me about Masai programmes that lead to these drives
                </span>
              </div>
            </div>
            <div className="h-px bg-line my-6" />
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="cap">We'll only email about drives. Unsubscribe any time.</span>
              <Btn disabled={!valid} onClick={() => nav.go('waitlisted')}>Join the waitlist</Btn>
            </div>
          </Card>
        </div>

        <Rail>
          <Card tint className="p-6">
            <div className="t2">You can still look around</div>
            <p className="text-[15px] text-ink-2 mt-2">Every drive and company is public. No account needed to browse.</p>
            <Btn variant="sec" block className="mt-5" onClick={() => nav.go('list')}>Browse drives</Btn>
          </Card>
        </Rail>
      </Split>
    </Shell>
  )
}
