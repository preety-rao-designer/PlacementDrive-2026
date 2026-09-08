import { Logo } from '../../components/ui.jsx'
import { ArrowRight, ChevronDown } from '../../components/Icons.jsx'
import { COMPANY_LIST } from '../../data/companies.js'

const LINKS = ['For Students', 'For Graduates', 'For Professionals', 'Hire From Us']

/** The live Masai site at desktop width, with the drive banner in situ. */
export default function Home({ nav }) {
  return (
    <div className="relative bg-masai-black text-white overflow-hidden min-h-[820px]">
      {/* perspective grid floor */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            'linear-gradient(rgba(226,60,60,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(226,60,60,.10) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
          transform: 'perspective(340px) rotateX(58deg) scale(2.4)',
          transformOrigin: 'center 118%',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(80%_55%_at_50%_12%,rgba(0,0,0,.86),rgba(8,8,10,.6)_55%,rgba(8,8,10,.95))]" />

      <div className="relative z-10 px-[34px] pt-6 pb-[70px]">
        <div className="max-w-[1240px] mx-auto bg-[#141418] border border-white/10 rounded-full py-2.5 pl-6 pr-2.5 flex items-center gap-2">
          <span className="text-[25px] font-extrabold tracking-[-.055em] mr-3.5">
            masai<em className="not-italic text-masai-red">.</em>
          </span>
          <span className="hidden xl:flex bg-white text-masai-black rounded-full px-[18px] py-[11px] text-[14.5px] font-extrabold tracking-[-.02em] items-center gap-1.5 flex-none">
            Our Courses <ChevronDown size={14} sw={3} />
          </span>
          <span className="hidden lg:flex items-center gap-6 mx-auto text-[14.5px] font-bold tracking-[-.015em]">
            {LINKS.map((l) => (
              <a key={l} href="https://www.masaischool.com/" target="_blank" rel="noopener noreferrer" className="opacity-95 hover:opacity-70 whitespace-nowrap">
                {l}
              </a>
            ))}
            <a href="https://www.masaischool.com/" target="_blank" rel="noopener noreferrer" className="relative opacity-95 hover:opacity-70 whitespace-nowrap">
              Masai Live
              <span className="absolute -top-3 -right-4 bg-masai-red text-[8.5px] font-extrabold tracking-[.06em] px-1.5 py-0.5 rounded">NEW</span>
            </a>
          </span>
          <button
            onClick={() => nav.go('signin')}
            className="ml-auto lg:ml-0 bg-masai-red text-white rounded-full px-6 py-3 text-[14.5px] font-extrabold tracking-[-.02em] whitespace-nowrap"
          >
            Login / Sign Up
          </button>
        </div>

        <div className="text-center max-w-[900px] mx-auto px-5 pt-20 lg:pt-[110px]">
          <h1 className="text-[38px] md:text-5xl xl:text-[60px] font-extrabold tracking-[-.042em] leading-[1.06]">
            Your AI Powered Future,<br />Starts at Masai
          </h1>
          <p className="text-lg md:text-2xl font-bold tracking-[-.025em] mt-6 md:mt-8 text-[#F2F2F5]">
            India's Top Job-Ready Certification Platform
          </p>
          <button className="mt-11 bg-masai-red text-white rounded-full px-[34px] py-4 text-[15.5px] font-extrabold inline-flex items-center gap-2.5">
            Explore Now <ArrowRight size={18} sw={2.6} />
          </button>
        </div>

        {/* ===== drive banner slot ===== */}
        <div className="relative max-w-[1240px] mx-auto mt-[70px] rounded-3xl px-6 py-7 md:px-[38px] md:py-[34px] overflow-hidden bg-[linear-gradient(120deg,#241016,#15121C_55%,#0F0F16)] border border-masai-red/[.34] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-8 items-center">
          <div className="absolute -top-[220px] -right-[100px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(226,60,60,.24),transparent_70%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-[11px] font-extrabold tracking-[.1em] uppercase text-[#FF8F8F] bg-masai-red/[.15] border border-masai-red/30 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8F8F]" /> Hiring drive
            </span>
            <h2 className="text-[25px] md:text-[32px] font-extrabold tracking-[-.035em] mt-4 leading-tight">
              24 Aug · Bengaluru · 8 companies hiring
            </h2>
            <p className="text-[15px] text-[#B9B9C6] mt-2.5 max-w-[520px]">
              Meet 8 companies in a single day, on campus. Open to all enrolled Masai learners.
            </p>
            <div className="flex items-center mt-[22px]">
              {COMPANY_LIST.map((c) => (
                <Logo key={c.key} company={c} size="sm" className="-mr-2.5 ring-[3px] ring-[#15121C]" />
              ))}
              <span className="ml-6 text-[13px] font-bold text-[#B9B9C6]">+4 more</span>
            </div>
          </div>
          <button
            onClick={() => nav.go('list')}
            className="relative bg-masai-red text-white rounded-full px-[30px] py-[17px] text-[15px] font-extrabold tracking-[-.018em] inline-flex items-center gap-2.5 whitespace-nowrap justify-self-start"
          >
            See Upcoming Drives <ArrowRight size={17} sw={2.8} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px] max-w-[1240px] mx-auto mt-24">
          {[
            { n: '40,000+', l: 'Active Learners Accelerating Their Careers', art: 'arrow' },
            { n: '10,000+', l: 'Masai Graduates Placed in Top Companies', art: 'faces' },
            { n: '16+', l: 'Institutes of National Importance such as IITs, IIMs, XLRI & BITS', art: 'crests' },
          ].map((s) => (
            <div key={s.n} className="bg-[linear-gradient(160deg,#1B1013,#0D0D10)] border border-masai-red/[.26] rounded-[20px] p-[30px] text-center">
              <div className="text-[38px] font-extrabold text-masai-red tracking-[-.04em]">{s.n}</div>
              <div className="text-[15px] text-[#E7E7EC] mt-2 leading-snug">{s.l}</div>
              {s.art === 'arrow' && (
                <svg width="76" height="66" viewBox="0 0 48 42" fill="none" className="mx-auto mt-[18px]" aria-hidden>
                  <path d="M6 34 18 16l8 9L40 6" stroke="#E23C3C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M29 6h11v11" stroke="#E23C3C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {s.art !== 'arrow' && (
                <div className="flex justify-center mt-5" aria-hidden>
                  {[0, 1, 2, 3].slice(0, s.art === 'crests' ? 3 : 4).map((i) => (
                    <span
                      key={i}
                      className={
                        'w-[46px] h-[46px] rounded-full border-[3px] border-[#0D0D10] -mr-3.5 ' +
                        (s.art === 'crests' ? 'bg-[#2A2A33]' : 'bg-gradient-to-br from-[#5B4BFF] to-[#E23C3C]')
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="max-w-[1240px] mx-auto mt-[26px] text-[12.5px] text-[#6B6B7A]">
          Home page recreated for prototype purposes · reference:{' '}
          <a href="https://www.masaischool.com/" target="_blank" rel="noopener noreferrer" className="text-[#9A9AAA] underline">
            masaischool.com
          </a>
        </p>
      </div>
    </div>
  )
}
