// One source of truth for company content, shared by both prototypes.
export const COMPANIES = {
  zeta: {
    key: 'zeta',
    name: 'Zeta',
    role: 'Backend engineer',
    ctc: '₹12–18 LPA',
    seats: '5',
    openings: '5 openings',
    exp: '0–2 years',
    loc: 'Bengaluru',
    mode: 'Full-time',
    gradient: 'from-[#8B5CF6] to-[#6D28D9]',
    about:
      'Zeta builds core banking and payments infrastructure. You would join the ledger team, working on services that move real money at scale, where correctness and observability matter more than speed of shipping.',
    skills: ['Java', 'Spring Boot', 'SQL', 'System design', 'REST APIs'],
    rounds: ['Aptitude and DSA screen', 'Technical interview', 'Hiring manager round'],
  },
  razorpay: {
    key: 'razorpay',
    name: 'Razorpay',
    role: 'SDE-1',
    ctc: '₹14–20 LPA',
    seats: '3',
    openings: '3 openings',
    exp: '0–1 years',
    loc: 'Bengaluru',
    mode: 'Full-time',
    gradient: 'from-[#3B82F6] to-[#0B4FD1]',
    about:
      'Razorpay is a full-stack payments company. SDE-1s are placed across product teams and typically ship features used by millions of businesses within their first quarter.',
    skills: ['DSA', 'Node.js', 'Golang', 'Databases'],
    rounds: ['Coding test', 'Technical interview', 'Culture round'],
  },
  groww: {
    key: 'groww',
    name: 'Groww',
    role: 'Frontend engineer',
    ctc: '₹10–15 LPA',
    seats: '4',
    openings: '4 openings',
    exp: '0–2 years',
    loc: 'Bengaluru',
    mode: 'Full-time',
    gradient: 'from-[#10C892] to-[#00875F]',
    about:
      'Groww is an investing platform used by retail investors across India. The frontend team owns the trading and portfolio experience, where performance on low-end devices matters as much as visual polish.',
    skills: ['React', 'TypeScript', 'CSS', 'Performance'],
    rounds: ['Machine coding', 'Frontend deep dive', 'Manager round'],
  },
  innovaccer: {
    key: 'innovaccer',
    name: 'Innovaccer',
    role: 'Data analyst',
    ctc: '₹8–12 LPA',
    seats: '6',
    openings: '6 openings',
    exp: '0–2 years',
    loc: 'Pune',
    mode: 'Full-time',
    gradient: 'from-[#F87171] to-[#DC2626]',
    about:
      'Innovaccer works on healthcare data platforms. Analysts turn clinical and claims data into reporting that care teams act on daily.',
    skills: ['SQL', 'Python', 'Excel', 'Dashboards', 'Statistics'],
    rounds: ['SQL and case test', 'Analytics interview', 'Manager round'],
  },
}

export const COMPANY_LIST = Object.values(COMPANIES)

export const DRIVE = {
  city: 'Bengaluru drive',
  day: '24',
  month: 'Aug',
  date: '24 Aug 2026',
  dateLong: '24 August 2026, 9:00 AM',
  time: '9:00 AM',
  venue: 'Masai campus, Bengaluru',
  venueShort: 'Masai campus, BLR',
  companies: 8,
  closes: '22 Aug',
  payBy: '21 Aug, 6:00 PM',
  deposit: '₹999',
}

export const NEXT_DRIVE = {
  city: 'Pune drive',
  day: '29',
  month: 'Aug',
  companies: 5,
  closes: '27 Aug',
  venue: 'Baner, Pune',
}

export const LEARNER = {
  name: 'Preety Rao',
  id: 'MS-40218',
  initials: 'PR',
  resume: 'preety_rao.pdf',
  email: 'preety@email.com',
}

// Prep suggestions on the not-selected screen. Sourced from JD requirements,
// NOT from any stated reason for rejection — see README.
export const PREP = [
  { n: '01', title: 'System design basics', why: 'Asked for by 6 of 8 companies here' },
  { n: '02', title: 'A project with real numbers in it', why: "Your projects don't say what they handled" },
  { n: '03', title: 'SQL joins and indexing', why: 'Comes up in nearly every backend screen' },
]
