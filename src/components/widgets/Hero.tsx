import { component$, } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";


export default component$(() => {
  return (
    <div class="relative bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center mx-1.5 mt-1 mb-2 border-radius-dot-25 rounded-lg">


      <section class="relative rounded-lg  md:-mt-[76px] not-prose mx-1.5 my-1.5 bg-white/75 dark:bg-gray-900/85 border-radius-dot-25">



        <div class="relative max-w-7xl mx-auto px-4 sm:px-14 ">
          <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
          <div class="pt-6 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
            <div class="basis-1/2 text-center lg:text-left pb-8 md:pb-16 mx-auto">
            <div class="hidden sm:block">
              <a href="https://twitter.com/intent/retweet?tweet_id=1874968926096171242" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                <span class="text-xs bg-[#70C7BA] rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Latest Koin announcement goes here!</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </a>
              </div>
              <h1 class="text-5xl md:text-7xl font-bold leading-tighter tracking-tighter text-primary mb-4 font-heading dark:text-gray-200">

                <span class="text-[#70C7BA]">KOIN The King Of Kaspa</span>
              </h1>
              <div class="max-w-3xl mx-auto lg:max-w-none">
                <p class="text-xl mb-6 dark:text-slate-300">
                  Get some <span class="font-semibold">KOIN</span>—the hottest memecoin on the Kaspa chain. Everyone needs some K in their wallet.
                </p>

                <div class=" sm:max-w-md m-auto grid grid-cols-1 border-radius-dot-25 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">

                  <div class="flex w-full">
                    <button class="btn w-full bg-[#B6B6B6] py-2 rounded-sm font-semibold dark:text-white ">
                      Join Telegram
                    </button>
                  </div>
                  <div class="flex w-full">
                    <button class="btn w-full bg-[#70C7BA] py-2 rounded-sm font-semibold dark:text-gray-50">
                      Buy $KOIN
                    </button>
                  </div>

                  {/* <div class="flex w-full">
                    <button class="btn w-full bg-green-200 p-1 rounded-sm dark:bg-green-400">
                      Share on X
                    </button>
                  </div> */}
                  {/* <div class="flex w-full">
                    <button class="btn w-fuell bg-yellow-200 p-1 rounded-sm dark:bg-yellow-400">
                      Partnerships
                    </button>
                  </div> */}
                </div>

              </div>
            </div>




            <div class="basis-1/2 overflow-hidden">
              <Image
                src="/images/koin.png"
                layout="constrained"
                width={493}
                height={616}
                alt="Qwind Hero Image (Cool dog)"
                class="mx-auto w-full drop-shadow-2xl rounded-md"
                priority={true}
                breakpoints={[320, 480, 640, 768, 1024]}
              />
            </div>

          </div>

        </div>

      </section>
    </div>
  );
});
