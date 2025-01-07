import { component$ } from '@builder.io/qwik';
import { Image } from "@unpic/qwik";


export default component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-2 border-radius-dot-25 rounded-lg">


    <section class="relative rounded-lg   not-prose mx-1.5 my-1.5 bg-white/75 dark:bg-gray-900/90 border-radius-dot-25">



    <Image
    src="/images/roadmap.jpg"
    layout="constrained"
    width={1920}
    height={1080}
    alt="Full-Width Hero Image"
    class="w-full h-auto object-cover rounded-sm pb-1.5"
    priority={true}
  />
  
  </section>
  </div>

  );
});
