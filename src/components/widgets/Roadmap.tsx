import { component$ } from '@builder.io/qwik';
import { Image } from "@unpic/qwik";


export default component$(() => {
  return (
    <Image
    src="/images/roadmap.jpg"
    layout="constrained"
    width={1920}
    height={1080}
    alt="Full-Width Hero Image"
    class="w-full h-auto object-cover rounded-sm pb-1.5"
    priority={true}
  />
  );
});
