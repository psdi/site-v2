---
title: A Heart-Svelte Reintroduction
date: 2024-11-12
author: Psalm
categories:
- "website"
- "personal"
---
<script>
    import screenshot from "./../img/screenshot_website.png";
</script>


\*taps mic\* Is this thing on?

If you haven’t realized it already, you are currently reading the first ever entry of my *New and Improved Website’s* blog!

The [first version of my website](https://github.com/psdi/site) (code viewable on my GitHub btw) was kind of a flop. It was meant to be a place of creativity where I could freely write about my interests... but I only managed to write one (1) post. Then I abandoned it altogether. I hope that I get more consistent in posting entries the second time around, even if it’s just me reading them.

<img src={screenshot} alt="Home page of my previous website" />

While I was thinking about how to best build my new website, I thought I could just use bare-bones HTML, CSS, and JavaScript. I immediately discarded the idea. I could have also just used PHP, which *was* the main programming language I used for the prototype of my website, but (re-)learning another language, framework, or any other technology sounded more appealing to me. My partner suggested Jekyll, a quick and easy tool based on Ruby for building static websites, but I guess I was already keen on using a frontend framework like React or Vue. Spoiler: it didn’t end up being either of them.

Last week I came across this one JavaScript framework called [Svelte](https://svelte.dev/). Seeing lots of positive comments about it naturally piqued my interest. After checking out their website, I saw that they had prepared an entire tutorial series for use cases one might have when putting together a frontend app or website. It was very intuitive and an apt exercise for refreshing my programming skills. Thankfully some bits and pieces of what I’ve learned are still in my mind… somewhere…

Some of you might think it's a bit overkill to use Svelte for something like a personal website. But the main thing that convinced me to use this framework was [its ability to generate static pages for me](https://svelte.dev/docs/kit/adapter-static). This way I don’t need something like an environment like Node or something to run my website.

I dove headfirst into creating a new website despite not knowing much about the syntax, code placement, configuration and important files. You could say I learned as I went. To be honest, I encountered some roadblocks while trying to piece things together. This post wasn’t quite meant to be a guide for creating your own website using Svelte, but I’d like to write down some of the interesting things I had to do during coding. Maybe even as a reference for future me, if I end up using Svelte for another project.

### Routing

Svelte 5 uses your filesystem’s folder names in order to show the requested pages—something I’m a bit conflicted with. At the heart of each route folder lies a file named `+page.svelte`, so if you have dozens of routes, you’ll have dozens of files with the same name. Hm. If you need any data that have to be prepared before the browser loads a certain page, you could also create a sibling file named `+page.js` with a corresponding `load`-function. The data loaded this way can then be accessed in a special `data` property in the `+page.svelte` file.

```javascript
/* src/routes/main/+page.js */
export function load() {
    return {
        text: "Click me"
        href: "link/to/somewhere"
    };
}

/* src/routes/main/+page.svelte */
<script>
    let { data } = $props();
</script>

<a href="{data.href}">{data.text}</a>

<style>
    a {
        font-size: 12pt;        
        color: green;
        line-height: 1.75rem;
    }
</style>
```

You can combine JavaScript (or TypeScript), HTML, and CSS in each `.svelte` file – the styles and scripts only apply within the scope of the component. No interference between styles here (unless you wrap a CSS selector in `:global`, that is)!


### Layout

Furthermore, you can create a layout file aptly called `+layout.svelte` in your `/routes` directory that, well, serves as the layout for the routes in the same folder. This way, you don’t have to insert repeating elements such as navigation bars, headers, or footers in all of your routes; instead, the contents of the individual routes are inserted into the layout file upon request. A sample file could look like this:

```svelte
<script>
    import Header from '../lib/components/sidebar';
    let { children } = $props();
</script>

<Header />
{@render children()}
```

You can simply import the necessary components (e. g. a `Header`) and use them in the file. The most important part, however, is `{@render children()}`, referring to all of the content from the child routes to be embedded in the layout. Previous versions used to use the `<slot />` tag, but that seems to be deprecated in Svelte 5.

### Static adapter

The last thing I’ll be handling here is something called a static adapter a.k.a. the thing you need for generating a static website. It doesn’t come installed by default, but a simple `npm i -D @sveltejs/adapter-static` is all you need to do to use it for your website.

Svelte’s configuration settings can be found in `svelte.config.js` in the topmost level of your project folder. This is where you can specify which adapter you want SvelteKit to use by simply importing it.

```js
import adapter from '@sveltejs/adapter-static';

const config = {
    // configuration details here
}
```

You will need to create another file called `+layout.js` (not to confused with `+layout.svelte`!) and write a single line on there:

```js
export const prerender = true;
```

Executing `npm run build` on your console should result in Svelte converting your code into a static website. You should be able to find the files in the folder `/build`. And that wraps up the list of things I wish I had known (or read about ahead of time lol) before I proceeded with setting up my virtual workspace. I hope I was able to help you, fellow-person-who-is-maybe-building-their-website! (ᵔ◡ᵔ)
