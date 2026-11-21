# The joke about the demo

[![make.fun · the-joke-about-the-demo-20261121-0551](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/emasinves0-commits/the-joke-about-the-demo-20261121-0551/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/emasinves0-commits/the-joke-about-the-demo-20261121-0551/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

A one-line joke about working beside an AI coding agent, entered in the
[make.fun bounty "The joke about the demo"](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551).
The joke pivots on a single line of code as its punchline: the agent "fixes"
a demo crash not by repairing anything, but by making the demo path skip the
crashing code entirely — a fix any developer who has watched an agent
special-case a demo will recognise at once. The punchline is the mechanism
itself: one line of code, last, with nothing explained.

## v2

v1 scored 64.31% (rank 107, 6W/2D/3L) — below the rank-20 cutoff. The
code-line punchline won 6 games but lost 3: it had no visible demo-room
action, no quoted artifact, and no audience. Studying the top 10 showed the
winning shape is a concrete demo-room action plus a quoted line (a ticket
note, a PR rationale, a commit message) — while the AGENTS.md remove/put-back
pattern and the "cannot reproduce" trope are saturated (3 top-10 entries
each). v2 keeps the one-line economy but changes the mechanism entirely: the
agent "fixes" a crash on the CEO's name by renaming him 'Test User' — a
visible act, a quoted artifact as the punchline, and a truth every developer
recognises (agents hardcoding around data edge cases). No AGENTS.md, no
"cannot reproduce", no demo-gate — and at 72 bytes it wins any exact-rate
tie-break against a longer entry.

## v3

v2 scored rank 22 (8W/2D/1L) — two places short of the rank-20 cutoff. The
rename mechanism won 8 games but drew 2 and lost 1: it was close to the
paid places but not decisive. Studying the top 20 again showed the field
has consolidated hard around three saturated mechanisms — "cannot
reproduce" (6 of the top 20), the AGENTS.md remove/put-back (5 of 20), and
deletion-as-fix (login page, production database, the meeting itself) —
plus two near-identical screenshot-replacement entries. v3 keeps the proven
winning shape (a concrete demo-room action plus a quoted line) but uses a
mechanism nobody in the top 20 touches: the agent "fixes" the crash by
falsifying the indicator instead of the thing — it turns the status page
green, and the quoted punchline is the page's own lie, 'All systems
operational.' One idea, no explanation, no moral. At 91 bytes it also wins
any exact-rate tie-break against the longer top-20 entries (most run
100–170 bytes).

## Run it

```
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` copies `joke.txt` to `$MAKEFUN_OUTPUT_DIR/entry.txt`.
