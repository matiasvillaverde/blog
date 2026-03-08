---
title: The CLI-First World
description: Why CLIs are becoming the best interface for agents, and why that matters more than chat wrappers.
pubDatetime: 2026-03-08T12:00:00Z
tags:
  - cli
  - ai
  - agents
  - mcp
  - software-engineering
featured: true
draft: false
---

The best interface for AI agents already exists. It's been shipping since 1971.

## The agentic shift

I've used `git` from the terminal for over a decade. No GUI ever came close. Not GitHub Desktop, not GitKraken, not Tower. The CLI was always the most powerful way to use Git — and soon it will be the most powerful interface for every product.

Because agents are the new users. And for agents, the CLI is close to ideal: text in, text out, explicit commands, predictable flags, machine-readable output, and a clear trail of what happened.

Software is becoming agentic. OpenAI's Codex team just built a million-line production system with zero lines of manually written code. Every line — application logic, tests, CI, docs — was written by `codex --yolo`.

The question is no longer whether agents will do useful work. They already do. The real question is what interface gives them the most leverage.

I think the answer is the CLI.

## An example

Agents are great at reading source code. But code is only half the picture. The other half is runtime — logs, metrics, traces, alerts, incidents. The stuff that tells you what your code is actually doing in production. And agents had no good way to access any of it.

A friend who works at Grafana visited me at work, and we talked about exactly this. So we hacked together a [CLI for Grafana](https://github.com/matiasvillaverde/grafana-cli).

Now I can ask an agent to investigate a latency spike and it figures out the path on its own:

```bash
grafana runtime metrics query --expr 'rate(http_request_duration_seconds_sum[5m])' --last 1h

grafana runtime logs query --query '{app="checkout"} |= "timeout"' --last 30m

grafana alerting rules list --output json | jq '.[] | select(.state=="firing")'
```

I did not script that sequence. The agent read `--help`, explored the surface, and composed the commands itself. I just gave it the tools.

## Why CLIs win

**Native language.** Text in, text out. That is how agents think. A CLI speaks their language natively — no browser rendering, no visual parsing, no DOM traversal.

**Token efficient.** A `--help` flag costs a handful of tokens. Loading an MCP schema or scraping a webpage costs thousands. Agents work on a token budget. CLIs respect it.

**Discoverable.** An agent runs `--help`, inspects subcommands, and learns the surface area. No schema file. No docs to fetch. The interface describes itself.

**Composable.** `gh pr list | jq '.[] | .title' | head -5`. Unix pipes solved tool orchestration fifty years ago. Agents are unusually good at chaining small text-based operations into larger workflows.

**Testable.** CLIs are easy to test. Input, output, exit code. You can write integration tests in a shell script. You can validate agent behavior by replaying commands. Try writing a reliable test for a chat assistant.

**Auditable.** A CLI leaves behind the command, the flags, the stdout, the stderr, the exit code, the shell history. When an agent does something wrong, you can see exactly what happened and why.

Google recently shipped [`gws`](https://github.com/googleworkspace/cli) — a single CLI for Drive, Gmail, Calendar, Sheets, Docs, Chat, Admin — explicitly designed as "a unified interface for humans and AI agents." This is just the beginning. Soon every major platform will ship one.

## MCP is useful, but it is not the primitive

I am not anti-MCP. I use MCPs. They are useful for remote tool exposure, structured discovery, or services that never shipped a CLI.

But MCP is still an extra layer. You need a server, a schema, a lifecycle, and a story for authentication and hosting. The agent has to load and understand that interface before it can do any useful work. That is real overhead.

Meanwhile, many of the tools agents need already exist as commands: `gh`, `aws`, `kubectl`, `docker`, `terraform`, `gcloud`.

The comparison often feels backwards to me. MCP is not replacing a missing interface. It is wrapping an interface that already worked.

The CLI is usually the primitive. MCP is often the adapter.
## Closed interfaces won't survive this

Sure, agents can scrape your website or hit your API with `curl`. They are smart enough to figure it out. But that is slow, token-expensive, and brittle. They are hacking the human world because we have not built them one of their own.

The CLI is the agent-native world.

## Beyond developer tools

Here is the part most people have not caught up with yet.

Almost every CLI that exists today is built for developers. `gh`, `vercel`, `railway`, `grafana`, `kubectl`, `terraform`. These are tools made by tech companies for tech people.

That is not where this ends.

Think about what happens when the agent on your phone — whether it is OpenClaw, Codex, Siri once it learns to do more than set alarm clocks, or whatever AgentOS ships next — needs to do something useful in the real world.

Order groceries. Rebook a flight. Adjust your thermostat. Check your bank balance. Dispute a charge. Schedule a car service. Return a package.

Today, all of these require navigating a GUI designed for human fingers on a glass screen. The agent cannot use any of it.

Now imagine every one of these services shipped a CLI.

```bash
uber trips list --status upcoming

amazon orders return --order-id 114-3941689 --reason "wrong size"

nest thermostat set --temp 21 --schedule night

bank transactions list --last 30d --category dining
```

Uber needs a CLI. Amazon needs a CLI. Your bank needs a CLI. Your airline needs a CLI. Your fridge needs a CLI.

Not because developers will use them. Because agents will.

Every product in the world is about to get a new kind of user that cannot click buttons, cannot parse a visual layout, and cannot fill out a form. But it can read `--help`, chain commands, and get things done faster than any human ever could.

The companies that ship agent-ready CLIs will be the ones agents can actually use. The rest will be invisible to the agentic world.

## Build accordingly

If you build products, ask a simple question: can an agent use your service from a terminal?

When an agent struggles to use your product, treat that as a signal. The problem is usually not that the model is weak. The problem is that the surface is too implicit, too manual, or too GUI-shaped.

GUIs are for exploration. APIs are for developers. CLIs are for agents.


That is why we are entering a CLI-first world.
