<script>
  import buzzard from "../lib/img/buzzard.png";
  import tea from "../lib/img/tea.png";
  import math from "../lib/img/math.png";
  import { drag } from '../lib/scripts/drag';
</script>

<p>Hi! My name is Psalm. I pronounce it &sol;sam&sol;, not &sol;sɔm&sol;. I live in a country most people  associate with loud and angry voices.</p>
<p>I am a twenty-something year old person. I thought I would try this whole website thing again. The most important goal in my life right now is finishing my upper secondary education. What comes after that, you ask? Well, I'd love to go to uni, preferably take a course in computer science, ideally with a part-time job or something to finance the usual things. I wouldn't mind graphic design either.</p>
<p>My interests are all over the place:</p>
<section id="box-of-interests">
  <img alt="A flying common buzzard from below" src={buzzard} class="draggy buzzard" draggable="false" use:drag />
  <img alt="A gaiwan and a teacup with tea leaves and liquid respectively" src={tea} class="draggy tea" draggable="false" use:drag />
  <img alt="A sheet of graph paper with mathematical equations" src={math} class="draggy math" draggable="false" use:drag />
</section>
<p>As you can see in my Box Of Interests, I love birdwatching and taking pictures of birds. Sometimes I draw letters and other things (to the best of my abilities), and I'm also interested in graphic design. Another field that I'd love to explore is maths. And like other people, I enjoy listening to many types of music. Finally, I enjoy drinking loose leaf teas.</p>


<style lang="scss">
  section#box-of-interests {
    height: 17rem;
    position: relative;
    img {
      max-height: 15rem;
      position: absolute;
      cursor: move;
      &.buzzard { z-index: 5; left: 5%; }
      &.tea { height: 7rem; left: 50%; z-index: 2; }
      &.math { left: 10%; z-index: 1; }
    }
  }

  @media screen and (max-width: 790px) {
    section#box-of-interests {
      padding: 0 1rem;
    }
  }
</style>
