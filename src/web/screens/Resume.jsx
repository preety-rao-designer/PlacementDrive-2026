import { Btn, Card } from '../../components/ui.jsx'
import { Upload } from '../../components/Icons.jsx'
import { Shell, Split, Rail, Crumb } from '../layout.jsx'
import { LEARNER } from '../../data/companies.js'

export default function Resume({ nav }) {
  return (
    <Shell>
      <Crumb onClick={() => nav.go('drive')}>Bengaluru drive</Crumb>
      <h1 className="text-[32px] lg:text-[44px] font-extrabold tracking-[-.04em] leading-[1.08]">Add your resume</h1>
      <p className="text-[15px] text-ink-2 mt-3">
        This one resume goes to every company you apply to.
      </p>

      <Split className="mt-7">
        <div>
          {nav.hasResume ? (
            <div className="flex items-center gap-4 border border-brand-line bg-brand-tint rounded-md px-5 py-[18px]">
              <div className="w-11 h-[54px] rounded-[9px] bg-white grid place-items-center text-stop text-[10px] font-extrabold flex-none shadow-s1">PDF</div>
              <div className="flex-1 min-w-0">
                <div className="text-[14.5px] font-bold tracking-[-.012em]">{LEARNER.resume}</div>
                <div className="cap mt-0.5">248 KB · saved to your profile</div>
              </div>
              <button onClick={() => nav.setHasResume(false)} className="text-[13.5px] font-semibold text-brand px-3 py-2">
                Replace
              </button>
            </div>
          ) : (
            <button
              onClick={() => nav.setHasResume(true)}
              className="w-full border-2 border-dashed border-line-2 rounded-md px-6 py-[52px] text-center bg-surface-2 transition hover:border-brand hover:bg-brand-tint"
            >
              <div className="w-[60px] h-[60px] rounded-[18px] bg-white shadow-s1 grid place-items-center mx-auto mb-4 text-brand">
                <Upload size={26} sw={2} />
              </div>
              <div className="text-base font-bold tracking-[-.018em]">Drop your resume here, or click to browse</div>
              <div className="text-[13.5px] text-ink-2 mt-1.5">PDF or DOCX · up to 5 MB</div>
            </button>
          )}
        </div>

        <Rail>
          <Card className="p-6">
            <div className="t2">Your resume</div>
            <div className="h-px bg-line my-4" />
            <div className={'text-[13.5px] ' + (nav.hasResume ? 'text-ink font-semibold' : 'text-ink-2')}>
              {nav.hasResume ? LEARNER.resume : 'No resume uploaded yet'}
            </div>
            <Btn block className="mt-5" disabled={!nav.hasResume} onClick={() => { nav.notify('Resume saved'); nav.go('pick') }}>Save And Continue</Btn>
          </Card>
        </Rail>
      </Split>
    </Shell>
  )
}
