/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Every token maps to a CSS variable in src/index.css.
      // Swapping to MDS means editing that one block, not this file.
      colors: {
        // rgb(var(--x) / <alpha-value>) lets Tailwind fill in the alpha
        // channel for opacity modifiers (e.g. border-masai-red/30).
        ink:        'rgb(var(--ink) / <alpha-value>)',
        'ink-2':    'rgb(var(--ink-2) / <alpha-value>)',
        'ink-3':    'rgb(var(--ink-3) / <alpha-value>)',
        line:       'rgb(var(--line) / <alpha-value>)',
        'line-2':   'rgb(var(--line-2) / <alpha-value>)',
        surface:    'rgb(var(--surface) / <alpha-value>)',
        'surface-2':'rgb(var(--surface-2) / <alpha-value>)',
        'surface-3':'rgb(var(--surface-3) / <alpha-value>)',
        brand:      'rgb(var(--brand) / <alpha-value>)',
        'brand-2':  'rgb(var(--brand-2) / <alpha-value>)',
        'brand-tint':'rgb(var(--brand-tint) / <alpha-value>)',
        'brand-line':'rgb(var(--brand-line) / <alpha-value>)',
        good:       'rgb(var(--good) / <alpha-value>)',
        'good-tint':'rgb(var(--good-tint) / <alpha-value>)',
        'good-line':'rgb(var(--good-line) / <alpha-value>)',
        warn:       'rgb(var(--warn) / <alpha-value>)',
        'warn-tint':'rgb(var(--warn-tint) / <alpha-value>)',
        stop:       'rgb(var(--stop) / <alpha-value>)',
        'stop-tint':'rgb(var(--stop-tint) / <alpha-value>)',
        'masai-red':'rgb(var(--masai-red) / <alpha-value>)',
        'masai-black':'rgb(var(--masai-black) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xs: '8px', sm: '12px', md: '16px', lg: '20px', xl: '28px',
      },
      boxShadow: {
        s1: '0 1px 2px rgba(11,11,18,.05)',
        s2: '0 2px 10px rgba(11,11,18,.06), 0 1px 2px rgba(11,11,18,.04)',
        s3: '0 16px 44px rgba(11,11,18,.14)',
        btn: '0 2px 8px rgba(46,42,224,.16)',
        device: '0 0 0 10px #14141C, 0 0 0 11px #2A2A38, 0 30px 70px rgba(11,11,18,.35)',
      },
      transitionTimingFunction: {
        e: 'cubic-bezier(.32,.72,0,1)',
      },
      keyframes: {
        fade:  { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'none' } },
        pop:   { from: { opacity: 0, transform: 'scale(.7)' },       to: { opacity: 1, transform: 'scale(1)' } },
        rise:  { from: { opacity: 0, transform: 'translateY(12px)' },to: { opacity: 1, transform: 'none' } },
        ring:  { to: { opacity: 1, transform: 'scale(1)' } },
        pulse2:{ from: { opacity: .7, transform: 'scale(1)' },       to: { opacity: 0, transform: 'scale(1.6)' } },
        draw:  { to: { strokeDashoffset: 0 } },
        blink: { '50%': { opacity: .35 } },
        shimmer:{ to: { backgroundPosition: '-200% 0' } },
      },
      animation: {
        fade:  'fade .28s cubic-bezier(.32,.72,0,1)',
        pop:   'pop .42s cubic-bezier(.32,.72,0,1)',
        rise:  'rise .4s cubic-bezier(.32,.72,0,1) .42s forwards',
        ring:  'ring .45s cubic-bezier(.32,.72,0,1) forwards',
        pulse2:'pulse2 1.1s cubic-bezier(.32,.72,0,1) .3s forwards',
        draw:  'draw .4s cubic-bezier(.32,.72,0,1) .28s forwards',
        blink: 'blink 1.6s ease-in-out infinite',
        shimmer:'shimmer 1.6s linear infinite',
      },
    },
  },
  plugins: [],
}
