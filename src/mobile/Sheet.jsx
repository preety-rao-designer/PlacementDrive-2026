import { COMPANIES } from '../data/companies.js'
import { Btn, cx } from '../components/ui.jsx'
import { JdBody, JdHeader } from '../components/JdContent.jsx'
import { X } from '../components/Icons.jsx'

/** Bottom sheet holding a company JD. `ctx` decides what the footer button does. */
export function Sheet({ data, onClose, picked, onToggle, onInterest }) {
  const company = data ? COMPANIES[data.key] : null
  const inPick = data?.ctx === 'pick'
  const selected = company ? picked.includes(company.key) : false

  return (
    <>
      <div
        onClick={onClose}
        className={cx(
          'absolute inset-0 bg-ink/50 backdrop-blur-[2px] z-40 transition-opacity duration-[260ms] ease-e',
          data ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />
      <div
        className={cx(
          'absolute inset-x-0 bottom-0 bg-surface rounded-t-xl z-40 max-h-[86%] flex flex-col',
          'shadow-[0_-8px_40px_rgba(11,11,18,.2)] transition-transform duration-[340ms] ease-e',
          data ? 'translate-y-0' : 'translate-y-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-label={company ? `${company.name} job description` : undefined}
      >
        <div className="w-10 h-[5px] rounded-full bg-line-2 mx-auto mt-2.5 flex-none" />
        {company && (
          <>
            <div className="overflow-y-auto no-bar px-5 pt-[18px] pb-2">
              <JdHeader
                company={company}
                closeEl={
                  <button onClick={onClose} aria-label="Close" className="w-[34px] h-[34px] rounded-full grid place-items-center bg-surface-2 flex-none">
                    <X size={16} sw={2.6} />
                  </button>
                }
              />
              <div className="mt-[18px]">
                <JdBody company={company} dense />
              </div>
            </div>
            <div className="px-5 pt-3.5 pb-[26px] border-t border-line flex-none bg-surface">
              {inPick ? (
                <Btn block variant={selected ? 'sec' : 'pri'} onClick={() => onToggle(company.key)}>
                  {selected ? 'Remove from selection' : 'Add to my selection'}
                </Btn>
              ) : (
                <Btn block onClick={onInterest}>Show interest</Btn>
              )}
            </div>
          </>
        )}
      </div>
    </>
  )
}
