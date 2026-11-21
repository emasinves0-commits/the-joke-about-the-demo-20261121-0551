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

## Run it

```
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` copies `joke.txt` to `$MAKEFUN_OUTPUT_DIR/entry.txt`.
