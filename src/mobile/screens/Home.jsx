import { Logo, Skel } from '../../components/ui.jsx'
import { ArrowRight, ChevronDown } from '../../components/Icons.jsx'
import { COMPANY_LIST } from '../../data/companies.js'

/** The live Masai marketing site, with the drive banner sitting where it would really go. */
export default function Home({ nav }) {
  return (
    <div className="relative bg-masai-black text-white min-h-full overflow-hidden pb-8">
      {/* red grid wash behind the hero */}
      <div
        className="absolute inset-x-0 top-0 h-[340px] opacity-50 [mask-image:linear-gradient(#000,transparent)]"
        style={{
          backgroundImage:
            'linear-gradient(115deg,rgba(226,60,60,.16) 1px,transparent 1px),linear-gradient(65deg,rgba(226,60,60,.13) 1px,transparent 1px)',
          backgroundSize: '64px 100%, 64px 100%',
        }}
      />

      <div className="relative">
        <div className="mx-3.5 mt-2.5 bg-[#141418] border border-white/10 rounded-full py-2.5 pl-4 pr-2.5 flex items-center gap-3">
          <span className="flex flex-col gap-1 flex-none" aria-hidden>
            <i className="block w-5 h-0.5 bg-white rounded" />
            <i className="block w-5 h-0.5 bg-white rounded" />
            <i className="block w-5 h-0.5 bg-white rounded" />
          </span>
          <span className="flex-1 text-[23px] font-extrabold tracking-[-.05em]">
            masai<em className="not-italic text-masai-red">.</em>
          </span>
          <span className="bg-white text-masai-black rounded-full px-3.5 py-2.5 text-[13px] font-extrabold tracking-[-.02em] flex items-center gap-1.5 flex-none">
            Our Courses <ChevronDown size={13} sw={3} />
          </span>
        </div>

        <div className="text-center px-5 pt-12">
          <h1 className="text-[31px] font-extrabold tracking-[-.035em] leading-[1.14]">
            Your AI Powered<br />Future, Starts at<br />Masai
          </h1>
          <div className="text-[15.5px] font-bold tracking-[-.02em] mt-6 leading-snug">
            India's Top Job-Ready<br />Certification Platform
          </div>
          <svg viewBox="0 0 180 14" fill="none" className="w-[180px] h-3.5 mx-auto mt-1.5" aria-hidden>
            <path d="M4 9c34-7 78-8 118-4 20 2 38 4 54 6" stroke="#F2C94C" strokeWidth="4" strokeLinecap="round" />
            <path d="M14 11c40-5 82-6 120-3" stroke="#F2C94C" strokeWidth="2.4" strokeLinecap="round" opacity=".75" />
          </svg>
        </div>

        {/* ===== drive banner slot ===== */}
        <div className="relative mx-4 mt-[30px] rounded-[20px] p-[18px] overflow-hidden bg-[linear-gradient(150deg,#221016,#14121B_60%,#0F0F16)] border border-masai-red/30">
          <div className="absolute -top-[90px] -right-[60px] w-[190px] h-[190px] rounded-full bg-[radial-gradient(circle,rgba(226,60,60,.28),transparent_70%)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 text-[10.5px] font-extrabold tracking-[.09em] uppercase text-[#FF8A8A] bg-masai-red/[.16] border border-masai-red/30 px-2.5 py-[5px] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A8A]" /> Hiring drive
            </span>
            <h2 className="text-[21px] font-extrabold tracking-[-.03em] mt-3 leading-tight">24 Aug · Bengaluru</h2>
            <p className="text-[13px] text-[#B9B9C6] mt-[7px]">
              Meet 8 companies in a single day. Open to all enrolled learners.
            </p>
            <div className="flex items-center mt-4">
              {COMPANY_LIST.map((c) => (
                <Logo key={c.key} company={c} size="sm" className="-mr-2.5 ring-[2.5px] ring-[#14121B]" />
              ))}
              <span className="ml-[19px] text-xs font-bold text-[#B9B9C6]">+4 more</span>
            </div>
            <button
              onClick={() => nav.go('list')}
              className="w-full mt-4 bg-white text-masai-black rounded-full py-3.5 text-[14.5px] font-extrabold tracking-[-.015em] flex items-center justify-center gap-2"
            >
              See upcoming drives <ArrowRight size={16} sw={2.8} />
            </button>
          </div>
        </div>

        <div className="mt-8 px-4 space-y-3.5">
          <div className="bg-[linear-gradient(150deg,#191013,#0E0E11)] border border-masai-red/[.28] rounded-[18px] p-[18px] flex items-center gap-4">
            <svg width="54" height="54" viewBox="0 0 48 48" fill="none" className="flex-none" aria-hidden>
              <path d="M6 36 18 20l8 8L38 10" stroke="#E23C3C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 10h12v12" stroke="#E23C3C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <div className="text-2xl font-extrabold text-masai-red tracking-[-.03em]">40,000+</div>
              <div className="text-[13px] text-[#E7E7EC] mt-0.5 leading-snug">Active Learners Accelerating Their Careers</div>
            </div>
          </div>
          <div className="bg-[linear-gradient(150deg,#191013,#0E0E11)] border border-masai-red/[.28] rounded-[18px] p-[18px] flex items-center gap-4">
            <span className="flex flex-none" aria-hidden>
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className="w-[34px] h-[34px] rounded-full border-2 border-[#0E0E11] -mr-[11px] bg-gradient-to-br from-[#5B4BFF] to-[#E23C3C]" />
              ))}
            </span>
            <div className="pl-2">
              <div className="text-2xl font-extrabold text-masai-red tracking-[-.03em]">10,000+</div>
              <div className="text-[13px] text-[#E7E7EC] mt-0.5 leading-snug">Masai Graduates Placed in Top Companies</div>
            </div>
          </div>
        </div>

        <div className="mt-7 bg-white px-4 pt-3.5 pb-6">
          <button className="w-full bg-masai-red text-white rounded-full py-3.5 text-[15px] font-extrabold flex items-center justify-center gap-2.5">
            Start Learning <ArrowRight size={18} sw={2.6} />
          </button>
        </div>
      </div>
    </div>
  )
}
