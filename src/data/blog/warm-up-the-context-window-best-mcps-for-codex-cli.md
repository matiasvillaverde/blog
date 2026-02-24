---
title: Warm Up the Context Window
description: The best MCP workflow for Codex CLI starts with research, not code. Use DeepWiki MCP and Perplexity MCP to onboard your agent and improve execution quality.
pubDatetime: 2026-02-24T12:00:00Z
draft: false
featured: false
tags:
  - codex-cli
  - mcp
  - deepwiki
  - perplexity
  - ai
  - software-engineering
---

# Warm Up the Context Window

Did your agent ever suggest an API that no longer exists? That happens because the model predicts from training weights (compressed priors).

How do we solve this model limitation?

Warm up the context window before writing code by starting every task with clear research.

My tools of choice are:

1. **DeepWiki MCP**
2. **Perplexity MCP**


## Think like the agent

Put yourself in the shoes of the agent.

You run `codex --yolo` (yeah, we are all loving the risk), and the agent wakes up. It does not know your codebase. It does not know your task context. It does not know the architecture decisions you care about. It does not know the APIs of the technologies that you are using.

It is basically a very smart, very hard-working new employee on day one.

Would you ask a new engineer to ship production code in the first 10 minutes? Probably not. You would onboard them first.

Same thing here.

## If you had infinite time, what would you do?

I would:

1. Read all relevant docs.
2. Explore the most successful open source projects in that area.
3. Read enough source code to understand what works.
4. Only then start implementation.

The great news is that agents are fast readers and absurdly patient. So they kind of have infinite time.

## DeepWiki MCP: your open source research engine

DeepWiki MCP lets your agent query a GraphRAG over open source repositories.

That means your agent can quickly understand:

- architecture
- key modules
- conventions
- implementation patterns
- latest APIs

I strongly prefer **plain vanilla conversation** for this phase. No fancy command wrappers, no rigid skill templates. Just ask the agent to investigate deeply and teach you as it goes.

That has two benefits:

1. You warm up the model.
2. You warm up yourself.

This is where subagents shine too. Send subagents to investigate different codebases, then merge findings.

## Perplexity MCP: your documentation / blog post radar

Perplexity MCP is great for querying public docs and web knowledge fast.

Think of it as a high-speed doc + web RAG layer:

- faster than manually jumping between docs
- useful for latest changes, release notes, and edge-case behavior

DeepWiki gives you grounded understanding from codebases.
Perplexity gives you broad and current coverage from the public web.

## What “warmed up” looks like in practice

After DeepWiki + Perplexity research, your context window is no longer cold.

Now your agent is much more likely to:

- use up-to-date APIs
- follow patterns that exist in successful codebases
- avoid naive first-draft architecture
- produce better first-pass code

In other words: fewer retries, less vibe debugging, better throughput.

Warming up is not only for the beginning of a project. Do it repeatedly, whenever you enter a new sub-problem, dependency, or unfamiliar area. Treat it as a regular quality loop that levels up your agents over time.

## Bonus: build DeepWiki for your own codebase

If your repository is private, you can still create a DeepWiki view using Devin MCP integrations.

That gives your agents a much better bird's-eye view of your internal codebase, not just external dependencies.

## Stay warm

Warm up the context window first.
Then ship.
