# Placement Drive 2026

Prototypes for the Drive pillar of Roadmap (Masai). Covers everything before and around a placement drive — drive day itself already exists in LevelUp and is out of scope.

React + Tailwind, built with Vite.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

The switcher at the top toggles between the mobile and web prototypes. Each has a screen picker to jump to any state.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`. Enable it once under **Settings → Pages → Source → GitHub Actions**.

`vite.config.js` sets `base: '/PlacementDrive-2026/'`. If the repo is ever renamed, change that too or the assets 404.

## The model

A **drive** is the event — one day, one venue, several companies. Companies sit inside it.

- Browsing drives and companies is public. No login.
- Marking interest is free, and per company. Sign-in happens at that point.
- One resume covers every company at a drive.
- Masai ops shortlists.
- **₹999 is per drive, not per company.** It unlocks on the first shortlist and covers the whole day however many companies interview you.
- The deposit returns within 24 hours of scanning in.
- After the drive, the learner continues in LevelUp's *My opportunities*.

## Structure

```
src/
  App.jsx                  mobile / web switcher
  index.css                design tokens (the :root block)
  data/companies.js        all content — companies, drive, learner, prep items
  components/
    ui.jsx                 Btn, Card, Pill, Logo, Checkbox, Field, …
    Icons.jsx              icon set + company marks + QR
    JdContent.jsx          JD body, shared by sheet and modal
    PayFlow.jsx            payment takeover
    usePrototype.js        screen routing, back stack, selection, resume state
  mobile/
    MobileApp.jsx          device frame, app bar, screen list
    Sheet.jsx              bottom sheet
    screens/               15 screens, one file each
  web/
    WebApp.jsx             top bar, screen list
    Modal.jsx              JD modal
    layout.jsx             Shell / Split / Rail / Narrow
    screens/               15 screens, one file each
```

Both prototypes share `data/`, `components/` and the state hook. A copy change in `data/companies.js` lands on both.

## Screens

| | |
|---|---|
| 1 | Masai home with the drive banner in situ |
| 2 | Drives list |
| 3 | Drive detail + JD |
| 4 / 4a / 4b | Sign in · Waitlist for non-learners · Waitlisted |
| 5 | Resume |
| 6 | Pick companies |
| 7 | Under review |
| 8 / 8a | Shortlisted · Payment success |
| 9 | Confirmed pass |
| 10 | Not selected |
| 11 / 11a | Company cancelled — refunded · One company pulled out |
| 12 | My opportunities (drive day) |

## Design tokens

Every colour lives as a CSS variable in `src/index.css` and is mapped in `tailwind.config.js`. Swapping to MDS means editing that one `:root` block — no component changes.

Company logos are drawn marks, not real trademarks. `Logo` takes an `<img>` when real assets arrive.

## Still undecided

- **Which selection model is real.** The PDF gates on an Evidence Score of 70. LevelUp lets anyone apply and companies reject later. These prototypes have Masai ops shortlisting. Three different products.
- **Withdrawal after payment** — refund or forfeit?
- **What ops can honestly tell a learner who wasn't shortlisted.** The prep items on screen 10 come from JD requirements, not from a stated reason for rejection. `PREP` in `data/companies.js`.
- **Status vocabulary.** These screens say Under review / Shortlisted / Not selected. LevelUp says Interview Round In Progress / Rejected.
- **Max concurrent interests.** Interest is free, so nothing stops a learner ticking every company.
- **Who owns the waitlist** collected on 4a, and whether anyone will email it.

Not built, from the PDF: Evidence Score, the below-70 path into Learn, JD resume tailoring, T-15 publish rule, no-show forfeit and the 7-day review.
