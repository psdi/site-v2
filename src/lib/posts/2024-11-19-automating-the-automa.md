---
title: Automating the Automa
date: 2024-11-19
author: Psalm
categories:
- "automa"
---

I happen to be really interested in ornithology, or the study of birds. On that note, I’ve been playing this one bird-based board/card game called *Wingspan*, which was localized into *Flügelschlag* in German (or wingbeat in English). The mechanics are a bit complex, I have to admit, but the game essentially comprises the actions of getting food, laying eggs, and gaining more cards. One could call it an engine builder where the abilities of your bird cards slowly accumulate and grant you more points the further the match progresses.

There is a mode you could play if you wanted to have a solo match. As my partner (who also likes birds) doesn’t always have the time <strike>for me</strike> or the energy to play together with me, I often go with this game type.

### The Automa

The “Automa” is, simply put, an AI board game opponent and is thus portrayed as a mechanical bird. I was so confused when I first played against it on [the digital version of the game](https://store.steampowered.com/app/1054490/Wingspan/). Much like in other games, you have bots you can play against that imitate user actions and actually trigger game animations and the like. Just like if you were playing against another human player. The Automa doesn’t quite do that. Instead of showing a standard board during the opponent’s turn, the game just flashes symbols that summarize what the Automa just did as if it had “played a turn”. And I lost against it several times. Thankfully you *are* able to set a difficulty for the Automa, which, for instance, sets the amount of points it gains per face-down card it gains.

The Automa system in the physical board game comes with several cards with up to four different actions that are activated and determined depending on the current round. One such action could be “lay three eggs” or “draw a bird from the pile” or “add one point for the Automa’s round goals”.

### Automation

So what even is there to automate? I thought it was a cool idea to make an online helper tool that could play as the Automa for you, so that you don’t need to pick its action cards yourself and have one less thing to manage.

As of now, I’m still in the planning phase on how exactly I want to do it. I was thinking of using the JavaScript framework Svelte again, because I think it’s legitimately fun to use.

*This post will be updated with more stuff soon!* (ᵔ◡ᵔ)
