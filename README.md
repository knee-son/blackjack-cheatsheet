# Blackjack Basic Strategy Chart

An interactive basic strategy reference card built with React. Covers all standard decision tables for a 6-deck game where the dealer stands on soft 17.

## Features

- Hard totals, soft totals, and pairs — all in one place
- Color-coded actions for quick reads at a glance
- Tab navigation to switch between table types
- Golden rules summary at the bottom

## Strategy Tables

The chart covers the following decisions:

| Code | Action | When |
|------|--------|------|
| **H** | Hit | Take another card |
| **S** | Stand | Keep your hand |
| **D** | Double | Double down (hit if not allowed) |
| **P** | Split | Split the pair |
| **R** | Surrender | Give up half your bet (hit if not allowed) |

## Game Rules Assumed

- 6 decks
- Dealer stands on soft 17
- Double after split allowed
- Surrender allowed

> Payouts and edge calculations will differ slightly under other rule sets (e.g. dealer hits soft 17, single deck, no surrender). Adjust accordingly.

## Golden Rules

These four hold true in almost every standard game:

1. **Always split Aces and 8s** — no exceptions
2. **Never split 10s or 5s** — you already have a strong hand
3. **Always double on 11 vs dealer 2–9** — press the advantage
4. **Never take insurance** — the house edge is too high

## Getting Started

```bash
npm install
npm run dev
```

Requires React 18+. Uses only Tailwind core utilities and no external component libraries.

## Why Basic Strategy?

Basic strategy is the mathematically optimal way to play every hand based on your cards and the dealer's upcard. Playing it correctly reduces the house edge to around **0.5%** — the lowest of any casino table game. Every deviation from the book increases the edge against you.

## License

MIT
