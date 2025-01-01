<script>
  import License from "../../lib/components/License.svelte";
  import wren from "../../lib/img/p-wren-20240225.webp";
  import siskin from "../../lib/img/p-siskin-20240127.webp";
  import longtailedtit from "../../lib/img/p-longtailedtit-202403.webp";
</script>

<p>As much as I enjoy perceiving birds from an ornithological viewpoint, I also like taking pictures of them. My equipment isn&#8217;t the newest: I use a Canon EOS 70D and a Sigma 150-500 mm 5-6.3 DG OS APO HSM. Consecutively, I often (have to) do some finishing touches during post-processing.</p>
<p>Here are some bird pictures I took in 2024. Do note that they are compressed to the <code>.webp</code> file format.</p>

<figure>
  <img src={longtailedtit} alt="" />
  <figcaption>A long-tailed tit on a thin branch with some nesting material in its beak</figcaption>
</figure>

<figure>
  <img src={siskin} alt="" />
  <figcaption>A Eurasian siskin on an alder branch against a sunlit background</figcaption>
</figure>

<figure>
  <img src={wren} alt="" />
  <figcaption>A Eurasian wren on a mossy log</figcaption>
</figure>

<License type="cc-by-sa" />

<style>
  figure {
    margin: 2.5rem 0.75rem;
    padding: 0;
    img {
      width: 100%;
    }
    figcaption {
      font-size: 11pt;
      text-align: center;
      padding: 0 2.5rem;
    }
  }
</style>
