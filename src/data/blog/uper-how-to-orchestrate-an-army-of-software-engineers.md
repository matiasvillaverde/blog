---
title: How to Orchestrate an Army of Software Engineers using UPER
author: Matias Villaverde
pubDatetime: 2025-07-10T12:00:00Z
slug: uper-how-to-orchestrate-an-army-of-software-engineers
featured: true
draft: false
tags:
  - software-engineering
  - ai
  - claude-code
  - best-practices
  - augmented-coding
description: Master Augmented Coding with Claude Code through the UPER framework - Understand, Plan, Execute, Review. Learn how to apply software engineering best practices at scale with AI agents.
---

## Summary

This post is about **UPER**: the 4 steps to master **Augmented Coding** with Claude Code (or software development in general).

The key takeaways are that you and Claude Code follow the flow:

1. **Understand**
2. **Plan**
3. **Execute**
4. **Review**

Moreover, **best practices in software engineering matter more than ever**.

## Table of contents

## Best Practices

Fortunately, I had the luck early in my career to have Matthew Liam Healy as my mentor, he was a **craftsman**. He would follow best practices no matter what. In fact, **TDD** was a religion, **SOLID** would trigger philosophical discussions worthy of the Ancient Agora of Athens as background.

Remarkably, he didn't even copy and paste code, he would **write by hand** the same code (yes, we used to type the code ourselves back in the day).

Furthermore, his **commit history followed a flow**, as if they were a well-written movie. His PRs descriptions were **clear and descriptive**. His functions were **no more than 5 lines**. He would not allow us to merge a function with **more than 3 arguments**. He was strict. He was a snob. He was an Artist.

In contrast, I was coming from working mostly in single-dev repos. I was force-pushing to main, I never wrote a Unit Test and files with 5000+ lines with half of them commented out, it was the norm.

![Me, force-pushing to main before I met my mentor](/this-is-fine-force-push.png)

This new way of working was so incredibly annoying!

Why am I telling you about Matthew? Because his annoying strictness taught me something crucial: **discipline creates quality**. Today, I am so glad I had him as a mentor in my early days.

And now, with an army of AI agents at our disposal, we need that same discipline - but **scaled up to 11**. We need to be even MORE annoying about following rules because our **agents will amplify whatever patterns we teach them**.

So, What are these annoying best practices that we'll force down our agents' digital throats?

In essence, software engineering best practices based on **[TDD principles](https://en.wikipedia.org/wiki/Test-driven_development)**, **Continuous Integration**, **Continuous Deployment**, **[KISS methodology](https://en.wikipedia.org/wiki/KISS_principle)**, **[SOLID principles](https://en.wikipedia.org/wiki/SOLID)**, **[Classic Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)** and **[Clean Code](https://en.wikipedia.org/wiki/Robert_C._Martin)**.

> For those interested in learning more about these concepts, there are great resources out there! This post assumes you already know the basics, as we're focusing specifically on how to get your AI agents to follow these practices religiously. To get the best results with Agentic programming, we need to apply these rules with almost obsessive strictness.

## Tips and Tricks

First and foremost, some general tips and tricks:

- Don't prompt yourself, instead use **well defined and curated prompts** that are part of your /Commands toolkit. For example, you can find great commands in this repo: [SuperClaude](https://github.com/NomenAK/SuperClaude).
- Ideally, always use the **TODO tool** built-in from Claude Code. **Clear steps is clear thinking. Clear thinking is clear prompting**. As a consequence, all your prompts should have a clear instruction to use the TODO; and your prompts should also be organized in a TODO matter.
- Run Claude Code in `claude --dangerously-skip-permissions` in a **virtual environment** (Docker, UTM, etc). Then you don't need to approve each step. Make sure that your army of agents follow the rules of this post... but **don't micromanage them**.
- Install Rust-based alternatives to common Unix tools like bat (instead of cat), rg (instead of grep), and fd (instead of find). These Rust implementations are significantly faster, which means Claude Code will **work faster** too.
- Teach Claude how to use other CLI that you find useful, like [codefetch](https://github.com/regenrek/codefetch?tab=readme-ov-file).

> ⚠️ **Warning:** Always run Claude Code in a virtual environment when using `--dangerously-skip-permissions` for security reasons.

### Recommended Tools

- [Zen](https://github.com/BeehiveInnovations/zen-mcp-server) 
- [Context7](https://context7.com/)
- [Perplexity](https://www.perplexity.ai/)
- [Devin](https://www.cognition-labs.com/introducing-devin)
- [gh](https://cli.github.com/)

I won't dive into explaining each tool here - they're all worth exploring on your own, and honestly, new tools appear every day! Take some time to research them, experiment, and find the ones that work best for your workflow.

The key takeaway is this: **Let the Agents discuss and review each other's work**. For example, let Claude Code use [Gemini 2.5](https://gemini.google.com/) as their architect advisor. Or Devin as their on-boarding buddy. **Multiple AI perspectives catch more bugs** than one AI going rogue with your codebase.

Additionally, spend time writing **clear [CLAUDE.md](https://docs.anthropic.com/en/docs/claude-code/memory#how-claude-looks-up-memories) files** that explain the architecture, key files, how to build the project, programming language guidelines, etc.

## The Rules

1. We only work in **TDD**
2. We architect our system following only these proven principles:
    1. **Classic Design Patterns** from the [Gang of Four book](https://en.wikipedia.org/wiki/Design_Patterns)
    2. **[Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)** (small, focused modules that do one thing well, composable like building blocks, clear interfaces between components)
    3. By the way, if you are very smart, go ahead to explore other patterns. I am not, so I stay with the classics and I am fine. Everyone knows them, AI knows them, so they are easy to maintain. But most important: **do not reinvent the wheel**.
3. We follow **SOLID** principles
4. We embrace **KISS**: Keep it Simple Stupid
    - In fact, we always ask, **how can we make it simpler?**
5. We follow a structured workflow: **GitHub Issue → Pull Request → Review**. Every single change goes through this process - **no exceptions**.
6. Pull Request must not have more than **500 lines** of adding code. (You can remove as much code as we want, deleting code is removing complexity which is most of the time a good thing) **Why 500?** Because that's the **sweet spot** where AI agents can still hold the full context in their silicon brains and give you quality feedback. Go beyond that, and they start hallucinating, chocking up, or just giving you generic advice. But here's the real kicker: **500 lines is also what YOUR flesh brain can actually review properly**. Sure, these agents can read 1500 pages in seconds, but they're trained on human data - they think like humans, with human-like complexity limits. They inherited our cognitive boundaries along with our knowledge.
7. We only write **Clean Code**. What is Clean Code? Code that passes the **most aggressive automatic linting rules** you can apply. These rules must be **enforced by automated tools** - no exceptions. Set your linter to maximum strictness: small functions, low complexity, no magic numbers, proper naming conventions, everything. **Run these linting rules before every compile**, both locally and in CI. If the linter complains, the code doesn't ship. Period.

![You shall not pass! - The linter blocking bad code](/you-shall-not-pass.png)
8. Don't write documentation, instead **write clean code which is the best documentation**. Remember, you can always use an LLM to read the code and explain it to you. Then you can only have to maintain code, instead of duplicating information in English. 

## The 4 Step Flow

> The main goal of The Flow is to create **high quality contexts** so the LLM can generate high quality output

Claude Code (and Software Engineers) struggle with big changes. For instance, if you tell Claude Code to build a Video Game, probably it will fail or create something quite random. However, if you follow all these rules and 4-step flow to only add up to 500 lines of code, your chances that Claude Code gets it correct is **very high**.

Let's get into it. First and foremost, the first thing to understand is that **GitHub will be at the center of the flow**. More specifically, creating **issues and Pull Requests**.

## Step 1: Understand and Plan

> _The goal of this phase is to move from a vague idea to a **concrete, actionable plan**._

### 1.1 Explain _what_ you want to do

1. Start by stating your **high-level goal**. Be clear and specific about the intended outcome. In effect, this sets the context for everything that follows.
2. After, write a clear **User Story** and share it to Claude Code.

### 1.2 Use Claude Code to _understand_ the codebase deeply

> Only understand and explore the codebase, don't write any code

1. Subsequently, use Claude Code to **investigate the relevant parts** of the code that will be affected.
    1. Ask to get context from the **git history** or find specific files.
    2. Ask Claude to identify which **files and functions** are involved in the feature.
    3. Ask to investigate and understand **how the affected part** of the codebase works.
2. Continue this dialogue until you both have a **strong, shared understanding** of the working area.

**Tools to use in this step:**

- **Zen** to interact with Gemini 2.5 for long context understanding, it is great for planning how to implement something.
- **Devin Deep Wiki** to understand large codebases

### 1.3 Plan how to execute it

> Again, only plan, don't write any code

- With the context established, ask Claude to generate a **step-by-step plan**.
- Additionally, read Context7 to understand the latest way of doing it.
- Think in **classic design patterns** of the book Gang of Four and **Unix Philosophy**
- Refine this plan together. The point is: **a good plan, created with full knowledge of the code, prevents mistakes later**.
- Review the plan
- Here you can add key words like **ULTRATHINK** given that it already has some knowledge about the codebase.

**Tools to use in this step:**

- **Zen** to review the plan, and ping pong ideas of how to implement it
- **Context7**

### 1.4 Create an issue

- If the problem is too complex (you will need to write more than 500 lines of code), in that case **break it into multiple issues**
- Use the information from the conversation and the final plan to generate a **detailed issue** in your tracking system.
- Finally, **refine the Issue description yourself**.

**Tools to use in this step:**

- **gh**

## Step 2: Plan

> _The goal of this phase is to systematically create a **plan based on high quality context**._

Why did we spend so much time writing the issue? The main reason is that we need to create the **perfect context**.

Arguably, I prefer to start a **new instance of Claude Code with 0 context**. This is slower, but for now my agents try to cheat less or they don't try to cut corners. What do I mean by cheating?

When Claude Code accumulates too much context, it starts taking shortcuts. For example, copying patterns from earlier in the conversation even when they don't fit, making assumptions based on previous code instead of thinking fresh, or worst of all: **pretending it ran tests when it didn't**. Fresh instances = fresh thinking. 

Yes, it's slower. However, **it is faster than Vibe Debugging**.

### 2.1 Understand the issue

- Where are the affected files located?
- What are we doing and why?
- **Important:** Always use commands for each step. Don't write the prompts yourself.

### 2.2 Plan

Now that we understand the issue and how it affects the codebase, we are going to plan how to implement it. Specifically, it is **VERY important to implement it using TDD**. Every change must **run ALL the tests**, and the **linting**. Moreover, we must have the linter in the most strict way. Tell the Agents to think in **design patterns** of the Gang of Four or Unix like design patterns.

## Step 3: Implementation

> The goal is to execute the plan step-by-step using TDD

### 3.1 Execute the plan

Finally, this is the only step that **actually writes code**. So why all this long dance? 

Well, the reason is that by now we have the **best context**, something that we can probably not write by ourselves. In reality, it is definitely better than a simple prompt of for example "add a new authentication with lot of security stuff" or "fix the bugs".

Indeed, the context that we build so far is **high quality**. Nevertheless, it is nothing without a **methodological execution**. Therefore, our execution should make sure Claude Code embraces **TDD** and **KISS**.

Enforce your Agents to follow a Test-Driven Development (KISS-TDD) approach:

1. **Write a failing test** for the task.
2. Write the code required to **make the test pass**.
3. **Refactor** the new code for clarity and simplicity (KISS).
4. Consequently, **lint your code and run tests often** to catch errors early.

### 3.2 Commit

- Create **detailed and clear commit messages** for each logical change.
	Often, in this step I also use a **new Claude Code instance without context**, and I tell it to understand the staged changes, and come up with a plan on how to structure the commits following **[Conventional Commit standards](https://www.conventionalcommits.org/en/v1.0.0)**. Furthermore, that it organize the changes in **small logic units**. As that happens, using new instances always brings **new perspectives**. More often than not, it is slower, but the quality is better.
- Additionally, I run a **pre-commit that runs the linter + unit tests**

### 3.3 Create a Pull Request

- Once again, once the implementation is complete, open a Pull Request. Use Claude to help draft a **clear and comprehensive description**. The Pull Request should be **linked to the issue** and have a clear description of what and why we are trying to merge.
- Ideally, we are **not adding more than 500 lines** of code. We must enforce this at the CI level.
- If it is more than 500 lines, in that case consider **breaking it down**, or - better yet - using **KISS** to simplify the code.

## Step 4: Review

> _The goal of this phase is to refine your work through **iterative feedback**, using **multiple personas**_

### 4.1 Review personas

![The dream team of AI reviewers](/personas-reviewing.png)

We will start a **new instance**, and the first thing is to understand the Issue + Pull Request + codebase. (Yes, I know this takes a lot of time). But fortunately, the good thing is that we are not actually using our brain, but **multiple agents** that can do this process relatively fast.

Create some **personas**, or system prompts, that give a personality to Claude Code. As a consequence, this will make it review the PR in a **specific manner**, and look at specific important parts.

For example:

> **Principal Engineer persona:**  
> "You are a Principal Engineer with 20 years of experience. You care about system design, scalability, and whether this code will make sense to a junior developer in 6 months."

> **Security persona:**  
> "You are a paranoid security expert. Every line of code is a potential vulnerability. You've seen too much to trust anything."

> **Performance Freak persona:**  
> "You optimize everything. O(n log n) isn't good enough if O(n) is possible. You measure twice, cut once."

> **The Rookie persona:**  
> "You're a junior developer. If you can't understand this code, it's too complex. Ask lots of 'why' questions."

Why multiple personas? Because **each one catches different problems**. The Security persona will spot that SQL injection vulnerability that the Principal Engineer missed because they were too focused on the architecture. The Rookie will point out that your clever one-liner is actually **unmaintainable garbage**.

Isn't it insane? Looking at this issue another way, some years ago, I was very happy when a Principal Engineer would review any of my Pull Requests. Now I can have **10 amazing custom engineers** looking at my code. Well, technically the code my agents army wrote.

### 4.2 Understand the review

Subsequently, we will start a new instance, and follow again the long process of:

1. Understand the issue + PR + Review + codebase
2. Decide which of the reviews are more important (asking Gemini, or judge it yourself)
3. Plan how to implement it, and validate
4. Implement the changes
5. Commit
6. Henceforward, go back to 4.1 until your personas approve the PR.

(Moreover, each step should follow All the rules, and be similar to the steps in 1, 2, 3 steps.)

## 4.5 Review the Pull Request Yourself

This is the **most important step of them all**.

But, first things first, is to **wait till the CI is green**.

Only Then, Finally, the time has come to actually **use your flesh brain**. Until now, we didn't read any line of code. We have been vibe coding it all the way.

However, this is **not vibe coding**. What is vibe coding? In essence, it is when you don't care of how the system is structured and you don't even understand how it works.

As you have noticed, this blog is about **Augmented Programming**, we understand the system, we orchestrate and we guide an army of software engineers on what and how to build.

> If there is a part of the code that you don't understand, like some complex algorithmic code, or some framework that you are not familiar with. In that case, make sure that you **understand some abstraction** over that part of the system. As well, make sure that it follows some **clear architectural pattern**.

For instance, you don't know how the B+ Tree algorithm works, but you know that it is used in your system using the **strategy pattern**, thereby you could replace it easily. Moreover, you know that is **well tested**. Additionally, you also asked 2 different and independent big LLMs and they recommend B+ Tree as the best algorithm for your task.

Once again, this is the most important step, you should **read commit by commit** and understand the changes. Write comments on what you want differently.

Only when you are **satisfied with the code**, and most important, **you understand it**: in that case you are able to merge it.

## Conclusion

If you follow this 4-step-flow and if you apply all these rules. If you understand the final code that you merge. As a consequence, your codebase will be **scalable, easy to maintain**, and you can build whatever you want.

Albeit it takes **longer than Vibe Coding**, and you need to have some software engineer knowledge. It is not a cool process that you can stream it on Twitch, nor very easy, nevertheless you will write **high quality software**.

If you don't do this, you will end up building an impressive prototype in 10 minutes, that is **impossible to vibe-debug**. Consequently, AI will become useless. Your prototype will not be possible to maintain.

To sum everything that has been stated so far, it doesn't make sense to write code by hand anymore. Instead, we should **orchestrate Agents to follow the rules** and build high quality software.

**Following best practices is more important than ever**. Perhaps, with some practice, you will manage to merge **3-5 Pull Requests per day**. 3-5 Pull Request of high quality software that without AI Agents, it would have taken 1+ weeks.

What a time to be alive!