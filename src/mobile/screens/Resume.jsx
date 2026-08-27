import { Btn, Card } from '../../components/ui.jsx'
import { Upload } from '../../components/Icons.jsx'
import { LEARNER } from '../../data/companies.js'

export default function Resume({ nav }) {
  return (
    <div className="relative min-h-full">
      <div className="px-5 pt-3 pb-24 space-y-6">
        <div>
          <h1 className="d2">Add your resume</h1>
          <p className="b1 mt-2.5">This one resume goes to every company you apply to.</p>
        </div>

        {nav.hasResume ? (
          <div className="flex items-center gap-3 border border-brand-line bg-brand-tint rounded-md px-4 py-3.5">
            <div className="w-10 h-12 rounded-lg bg-white grid place-items-center text-stop text-[9px] font-extrabold flex-none shadow-s1">PDF</div>
            <div className="flex-1 min-w-0">
              <div className="t3">{LEARNER.resume}</div>
              <div className="cap mt-0.5">248 KB · saved to your profile</div>
            </div>
            <button onClick={() => nav.setHasResume(false)} className="text-[13px] font-semibold text-brand px-1 py-1.5">
              Replace
            </button>
          </div>
        ) : (
          <button
            onClick={() => nav.setHasResume(true)}
            className="w-full border-2 border-dashed border-line-2 rounded-md p-[30px] text-center bg-surface-2 transition hover:border-brand hover:bg-brand-tint"
          >
            <div className="w-[52px] h-[52px] rounded-2xl bg-surface shadow-s1 grid place-items-center mx-auto mb-3.5 text-brand">
              <Upload size={24} sw={2} />
            </div>
            <div className="t2">Upload your resume</div>
            <div className="b2 mt-1.5">PDF or DOCX · up to 5 MB</div>
            <span className="inline-block mt-4 text-[13.5px] font-bold px-4 py-2.5 rounded-[11px] bg-surface border border-line-2 shadow-s1">
              Choose file
            </span>
          </button>
        )}
      </div>

      <div className="sticky inset-x-0 bottom-0 px-5 pt-3.5 pb-6 bg-gradient-to-b from-transparent to-surface to-[24%]">
        <Btn block disabled={!nav.hasResume} onClick={() => nav.go('pick')}>Save and continue</Btn>
      </div>
    </div>
  )
}
