import { Logo, Steps, cx } from './ui.jsx'

/** The body of a JD, shared by the mobile bottom sheet and the web modal. */
export function JdBody({ company, dense }) {
  const stats = [
    ['Package', company.ctc],
    ['Openings', company.seats],
    ['Experience', company.exp],
    ['Location', company.loc],
  ]
  return (
    <>
      <div className={cx('grid gap-px bg-line rounded-md overflow-hidden border border-line', dense ? 'grid-cols-2' : 'grid-cols-4')}>
        {stats.map(([lb, vl]) => (
          <div key={lb} className="bg-surface px-3.5 py-3">
            <div className="text-[11px] text-ink-3 font-semibold">{lb}</div>
            <div className="text-[14.5px] font-bold tracking-[-.015em] mt-0.5">{vl}</div>
          </div>
        ))}
      </div>

      <section className="mt-6">
        <h3 className="t2">About the role</h3>
        <p className="b1 mt-2 leading-relaxed">{company.about}</p>
      </section>

      <section className="mt-6">
        <h3 className="t2">What they're looking for</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {company.skills.map((s) => (
            <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface-2 text-ink-2 border border-line">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-6 mb-3">
        <h3 className="t2">Rounds on the day</h3>
        <div className="mt-2">
          <Steps items={company.rounds} />
        </div>
      </section>
    </>
  )
}

export function JdHeader({ company, size = 'lg', onClose, closeEl }) {
  return (
    <div className="flex items-start gap-3">
      <Logo company={company} size={size} />
      <div className="flex-1 min-w-0">
        <div className="t1">{company.name}</div>
        <div className="b2 mt-0.5">{company.role}</div>
      </div>
      {closeEl}
    </div>
  )
}
