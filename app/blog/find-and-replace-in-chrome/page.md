---
title: "How to find and replace in Chrome console"
author: "Eric Allen"
date: "2024-01-19"
tags:
  - example
  - dummy
  - markdown
---

## How to find and replace in Chrome console with javascript

### code for the lazy

Here's the code snippet if you want to skip ahead to the ending:

```JS
// Replace these values with the text you're trying to find and replace
var oldWord = 'Event';
var newWord = 'Service';

// this creates a new regular expression looking for the oldWord "globally" and "case insensitive"
var regex = new RegExp(oldWord, 'gi');

// you can choose to delete the 'head' line if you just want to replace HTML body text
document.body.innerHTML = document.body.innerHTML.replace(regex, newWord);
document.head.innerHTML = document.head.innerHTML.replace(regex, newWord);

// this is just to let you know what you typed in and what changed
console.log('Replaced "' + oldWord + '" with "' + newWord + '" in DOM');

```

### the mission

I was trying to swap out every instance of a word on a web page. I wanted to do this fast, using screenshots instead of mocking it up in Sketch.

The problem was I had to do it on dozens of pages and application states. I didn't want to do it by hand, because I'm lazy. :)

Also, because I'm a smooth-brained designer, I didn't know how to do this with code. But with a little AI assistance, I was able to teach myself how to do it. And now I'm here to teach it to you!

I could've used the inspector `Cmd + Shift + C` to look at every individual element on a page, click on it, look at the markup, edit it as HTML, and paste in the new term.

But I wanted to challenge myself because I knew there had to be an easier way to do it.

Like my friend Dann always says, "That's a great job for a computer."

### ai to the rescue

I could ask as many dumb questions to the AI as I wanted, without feeling embarrassed, and without properly formatting my question. It became my private tutor.

Before AI, I would've had to:

- watch random videos from benevolent developers
- comb through Stack Overflow and blog posts
- read dense documentation about HTML
- Or, the ultimate nightmare: create an account on a forum, post, and wait for an answer

With AI, I could skip all that and I didn't have to bother anyone.

I didn't know what question to ask, but the AI's answers could help steer me towards asking the right question.

I started with a clear problem, but I didn't know what I was trying to do with code at all. After an hour of Googling, I learned that there's a function called `innerHTML.replace()` that can swap out HTML for new HTML. It was exactly what I was looking for.

I *could've* continued Googling and using trial and error to guess the syntax of this function.

Instead I asked ChatGPT to explain it to me: ![[find and replace in chrome console 1.png]]

I did some more Googling after discovering this, looked through a few StackOverflow threads for a sanity check, and I hacked together a script:

```JS
var oldWord = 'Event'; 
var newWord = 'Service';

document.body.innerHTML = document.body.innerHTML.replace(/${oldWord}/gi, "${newWord}") 
document.head.innerHTML = document.head.innerHTML.replace(/${oldWord}/gi, "${newWord}") 

console.log('Replaced "' + oldWord + '" with "' + newWord + '" in DOM')
```

I expected this script to work, but it didn't. Doh. Now I was stuck again. I was asking myself:

- What are tagged template literals?
- How does `${}` work in this case?
- What the heck is this `regex` syntax? asdf
- Do I pass this function a string in quotes, or variable names?
- Do I need to use `"` or `'` or `"${}"` when passing my args?

I tried to come back to the problem statement:

>I want to replace everywhere that says `Event` in the HTML with the term `Service`

I didn't really understand the syntax of the code I was trying to write, how regular expressions work, or how to get the `oldWorld` variable right in the call to `innerHTML.replace()`.

I have used regex in the past but really don't understand it. I just copied and pasted regex's that worked. So I wasn't going to easily crack this nut on my own.

**So I gave up and asked ChatGPT the dumbest, most lazy thing I could think of:**

![[find and replace in chrome console 2.png]]

Holy crap it worked! I was beaming.

I saved myself probably 2 hours of searching through forums for the right thread by asking ChatGPT to help me. I just needed a bit of humility to admit I needed help. As someone that loves to learn and solve problems, not being able to figure this out on my own, with my existing toolset (Google and some patience), made me feel like I'd failed.  

But it taught me that having the humility to ask a dumb question can sometimes be all we need to make progress.

I learned a new way to use regex in Javascript, where you can store a regex with a variable and then pass that somewhere new using the `RegExp()` function

I learned that you can store the result of that function as a variable, and pass it as an argument!

```JS
// Replace these values with the text you're trying to find and replace, then copy and paste the whole snippet into the console
var oldWord = 'Event';
var newWord = 'Service';

// this creates a new regular expression looking for the oldWord "globally" and "case insensitive"
var regex = new RegExp(oldWord, 'gi');

// you can choose to delete the 'head' line if you just want to replace HTML body text
document.body.innerHTML = document.body.innerHTML.replace(regex, newWord);
document.head.innerHTML = document.head.innerHTML.replace(regex, newWord);

// this is just to let you know what you typed in and what changed
console.log('Replaced "' + oldWord + '" with "' + newWord + '" in DOM');

```

Here's what helped me connect the dots about regex from ChatGPT:
> This code creates a regular expression (`regex`) using the `RegExp` constructor and applies it to replace all occurrences of `oldWord` with `newWord` in both the body and head of the document. The `gi` flags stand for global and case-insensitive matching.

I tested this script and it worked! I was giddy. Success! I used the script over and over, grabbed my screenshots, and shared the images with my team. The only thing I needed was an easy way to use this tool again in the future. For that, I turned to Alfred.

### making it easy to use this code with Alfred

I added this script to my Alfred snippets with a handy little shorthand so I could add it to the console in a few seconds:

`.fandr`

This means anywhere I type in `.fandr` in any field, it will be auto-expanded to my little snippet.

![[find and replace in chrome console 3.png]]

Alfred 5 is a great tool to unlock repetitive workflows like this.

I could take it further and make a custom workflow that I pass my new text and old text to as props, but I don't know if I'm going to use this enough to justify that over-engineering. :)

I posted this snippet to my Github if it's helpful for you. Have a great day!

-Eric
