import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/widgets/Hero";
import { Image } from "@unpic/qwik";
import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>

<Hero />
    <Image
    src="/images/roadmap.jpg"
    layout="constrained"
    width={1920}
    height={1080}
    alt="Full-Width Hero Image"
    class="w-full h-auto object-cover rounded-sm pb-1.5"
    priority={true}
  />

<Image
    src="/images/ranks.jpg"
    layout="constrained"
    width={1920}
    height={1080}
    alt="Full-Width Hero Image"
    class="w-full h-auto object-coverrounded-sm pb-1.5"
    priority={true}
  />

  


      
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
