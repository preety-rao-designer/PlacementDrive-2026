/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Every token maps to a CSS variable in src/index.css.
      // Swapping to MDS means editing that one block, not this file.
      colors: {
        ink:        'var(--ink)',
        'ink-2':    'var(--ink-2)',
        'ink-3':    'var(--ink-3)',
        line:       'var(--line)',
        'line-2':   'var(--line-2)',
        surface:    'var(--surface)',
        'surface-2':'var(--surface-2)',
        'surface-3':'var(--surface-3)',
        brand:      'var(--brand)',
        'brand-2':  'var(--brand-2)',
        'brand-tint':'var(--brand-tint)',
        'brand-line':'var(--brand-line)',
        good:       'var(--good)',
        'good-tint':'var(--good-tint)',
        'good-line':'var(--good-line)',
        warn:       'var(--warn)',
        'warn-tint':'var(--warn-tint)',
        stop:       'var(--stop)',
        'stop-tint':'var(--stop-tint)',
        'masai-red':'var(--masai-red)',
        'masai-black':'var(--masai-black)',
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
        btn: '0 3px 14px rgba(46,42,224,.3)',
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
