import { component$ } from '@builder.io/qwik';
import { Image } from "@unpic/qwik";


export default component$(() => {
  return (
    <Image
    src="/images/koin.png"
    layout="constrained"
    width={1920}
    height={1080}
    alt="Full-Width Hero Image"
    class="w-full h-[90vh] object-cover"
    priority={true}
  />
  );
});
