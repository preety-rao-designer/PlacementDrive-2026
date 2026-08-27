import { useEffect } from 'react'
import { COMPANIES } from '../data/companies.js'
import { Btn, cx } from '../components/ui.jsx'
import { JdBody, JdHeader } from '../components/JdContent.jsx'
import { X } from '../components/Icons.jsx'

/** Centred modal holding a company JD. Escape closes it. */
export function Modal({ data, onClose, picked, onToggle, onInterest }) {
  useEffect(() => {
    const h = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  const company = data ? COMPANIES[data.key] : null
  const inPick = data?.ctx === 'pick'
  const selected = company ? picked.includes(company.key) : false

  return (
    <>
      <div
        onClick={onClose}
        className={cx(
          'absolute inset-0 bg-ink/55 backdrop-blur-[3px] z-30 transition-opacity duration-200',
          data ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={company ? `${company.name} job description` : undefined}
        className={cx(
          'absolute top-1/2 left-1/2 w-[min(720px,92%)] max-h-[84%] bg-white rounded-xl z-30 flex flex-col overflow-hidden',
          'shadow-[0_30px_80px_rgba(11,11,18,.35)] transition-all duration-200 ease-e',
          data ? 'opacity-100 -translate-x-1/2 -translate-y-1/2 scale-100' : 'opacity-0 pointer-events-none -translate-x-1/2 -translate-y-[46%] scale-[.98]'
        )}
      >
        {company && (
          <>
            <div className="px-8 py-7 border-b border-line">
              <JdHeader
                company={company}
                closeEl={
                  <button onClick={onClose} aria-label="Close" className="w-9 h-9 rounded-full grid place-items-center bg-surface-2 text-ink-3 hover:text-ink hover:bg-surface-3 flex-none">
                    <X size={17} sw={2.6} />
                  </button>
                }
              />
            </div>
            <div className="overflow-y-auto px-8 py-7">
              <JdBody company={company} />
            </div>
            <div className="px-8 py-5 border-t border-line bg-surface-2 flex gap-3 justify-end">
              <Btn variant="sec" onClick={onClose}>Close</Btn>
              {inPick ? (
                <Btn variant={selected ? 'sec' : 'pri'} onClick={() => onToggle(company.key)}>
                  {selected ? 'Remove from selection' : 'Add to my selection'}
                </Btn>
              ) : (
                <Btn onClick={onInterest}>Apply now</Btn>
              )}
            </div>
          </>
        )}
      </div>
    </>
  )
}
