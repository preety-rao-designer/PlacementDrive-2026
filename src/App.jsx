import { useState } from 'react'
import MobileApp from './mobile/MobileApp.jsx'
import WebApp from './web/WebApp.jsx'
import { Phone, Monitor } from './components/Icons.jsx'
import { cx } from './components/ui.jsx'

export default function App() {
  const [view, setView] = useState('mobile')

  return (
    <div
      className={cx(
        'min-h-screen px-4 pt-6 pb-14',
        view === 'mobile'
          ? 'bg-[radial-gradient(900px_500px_at_20%_-10%,#E9E7FF,transparent_60%),radial-gradient(700px_500px_at_90%_10%,#E4F5EF,transparent_55%),#E3E3EC]'
          : 'bg-[#DEDEE8]'
      )}
    >
      <div className={cx('mx-auto mb-6 flex justify-center', view === 'mobile' ? 'w-[392px]' : 'max-w-[1440px]')}>
        <div className="inline-flex gap-1 p-1 rounded-[14px] bg-white/70 backdrop-blur border border-line-2 shadow-s1">
          {[
            { id: 'mobile', label: 'Mobile', Icon: Phone },
            { id: 'web', label: 'Web', Icon: Monitor },
          ].map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setView(id)}
              aria-pressed={view === id}
              className={cx(
                'flex items-center gap-2 px-4 py-2 rounded-[10px] text-[13px] font-bold tracking-[-.01em] transition',
                view === id ? 'bg-brand text-white shadow-btn' : 'text-ink-2 hover:text-ink'
              )}
            >
              <Icon size={15} sw={2.2} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {view === 'mobile' ? <MobileApp /> : <WebApp />}
    </div>
  )
}
