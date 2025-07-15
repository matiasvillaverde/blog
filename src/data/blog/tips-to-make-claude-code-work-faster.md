---
title: Tips to make Claude Code work faster!
description: Replace traditional GNU tools with modern Rust alternatives to make Claude Code operations 5-20x faster. A simple setup that dramatically improves your AI coding assistant performance.
pubDatetime: 2025-07-15T00:00:00Z
tags:
  - productivity
  - tools
  - claude-code
  - performance
  - rust
featured: true
---

# Tips to make Claude Code work faster!

Since the last few weeks, I spent most of my day observing what Claude Code is doing… it's basically become the Operating System of my computer. I notice that it spends most of the time running shell commands—searching files, processing text, navigating directories. At this point, I'm pretty sure it knows my filesystem better than I do.

So I don't use the shell directly anymore—I always use Claude Code as my interface. Yesterday I asked it where I left my car keys and was genuinely disappointed when it couldn't grep those.

At first I thought it was a bug, so I tried to intervene and grep it myself. But then I noticed I was in a virtual machine (I run Claude Code in Docker for security reasons) and I didn't have my `ripgrep` tool. On my actual machine, I have customized the shell to use these better tools. This got me thinking: Why not give high quality tools to Claude Code (or Gemini CLI) as well?

The tip is to replace all traditional GNU tools with their Rust alternatives, so you can make these operations 5-20x faster, dramatically improving your Claude Code performance.

## Old school tools

When Claude Code executes commands like searching for a function across your codebase, it runs:

```bash
find . -name "*.ts" -o -name "*.tsx" | xargs grep "useState"
```

These traditional tools process files sequentially. In large projects, this means waiting seconds or even minutes for results, multiplying across dozens of commands per session.

## Rust is fast!

Modern Rust tools use parallel processing, smarter algorithms, and respect `.gitignore` by default:

**File Search & Text Processing**

- **[ripgrep (rg)](https://github.com/BurntSushi/ripgrep)** replaces `grep` - Parallel text search, 5-20x faster
- **[fd](https://github.com/sharkdp/fd)** replaces `find` - Parallel file finding, 5-10x faster
- **[sd](https://github.com/chmln/sd)** replaces `sed` - Simpler syntax, faster processing

**File Management**

- **[eza](https://github.com/eza-community/eza)** replaces `ls` - Modern listing with git integration
- **[bat](https://github.com/sharkdp/bat)** replaces `cat` - Syntax highlighting and git diffs
- **[dust](https://github.com/bootandy/dust)** replaces `du` - Intuitive disk usage visualization

**System Monitoring**

- **[bottom (btm)](https://github.com/ClementTsang/bottom)** replaces `top` - Better resource monitoring
- **[procs](https://github.com/dalance/procs)** replaces `ps` - Modern process viewer

**Development Tools**

- **[git-delta](https://github.com/dandavison/delta)** - Enhanced git diffs with syntax highlighting
- **[hyperfine](https://github.com/sharkdp/hyperfine)** - Command-line benchmarking tool
- **[tokei](https://github.com/XAMPPRocky/tokei)** - Fast code statistics and line counting

**Navigation**

- **[zoxide](https://github.com/ajeetdsouza/zoxide)** replaces `cd` - Learns your habits, jump to directories faster
- **[starship](https://github.com/starship/starship)** - Fast, customizable shell prompt

## How to make Claude Code Use Them Automatically

The key: shell aliases. When Claude Code calls standard commands, it'll use the faster versions:

```bash
# Add to ~/.zshrc or ~/.bashrc
alias grep='rg'
alias find='fd'
alias ls='eza'
alias cat='bat'
alias sed='sd'
alias du='dust'
alias top='btm'
alias ps='procs'
alias cd='z'  # for zoxide

# Also add this line for zoxide initialization
eval "$(zoxide init zsh)"  # or bash
```

Now when Claude Code searches your codebase, it automatically benefits from:

- Multi-threaded execution
- Smart `.gitignore` handling (no more searching `node_modules`!)
- Better default options

## Real Impact Example

**Before**: Claude Code searching a React codebase

```bash
$ time find . -name "*.tsx" | xargs grep "useState"
# 4.2 seconds
```

**After**: Same search with Rust tools

```bash
$ time fd -e tsx | xargs rg "useState"  
# 0.3 seconds
```

That's 14x faster for a single operation. Across a full Claude Code session with dozens of searches, file operations, and text processing commands, you'll save minutes of waiting.

## Quick Setup

1. Install the tools (Homebrew: `brew install ripgrep fd eza bat sd dust bottom procs git-delta hyperfine tokei zoxide starship`)
2. Add the aliases to your shell config
3. Restart your terminal
4. Claude Code automatically uses the faster versions

## Worth Noting

- These tools have slightly different defaults (e.g., `ripgrep` ignores hidden files)
- Original commands still available with backslash: `\grep`

By spending 5 minutes on this setup, every Claude Code session becomes noticeably faster. Less waiting, more coding.