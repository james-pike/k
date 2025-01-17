import { component$, Slot} from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";

// import Footer from "~/components/widgets/Footer";
import Header3 from "~/components/widgets/Header3";

const gridItemsHTML = new Array(30)
  .fill(null)
  .map(
    () =>
      `<div class="bg-[#70C7BA] animate-pulse" style="animation-delay: ${Math.random() * 5}s; 
    animation-duration: ${3 + Math.random() * 3}s"></div>`
  )
  .join("");

export default component$(() => {




  return (
    <>
        <div
        class="grid-background dark:bg-black absolute inset-0 -z-10 grid grid-cols-6 gap-1"
        dangerouslySetInnerHTML={gridItemsHTML}
      ></div>
      <Header3 />
    
      <main>
        
        <Slot />
      </main>
      <Footer/>
    </>
  );
});
