import { component$, useStore } from "@builder.io/qwik";



// import IconMenu from "../icons/IconMenu";
import IconMenu from "../icons/IconMenu";
import KoinLogo from "../common/KoinLogo";
import { Link } from "@builder.io/qwik-city";
import IconTwitter from "../icons/IconTwitter";
import IconTelegram from "../icons/IconTelegram";
import { Accordion } from "../ui/Accordion";



export default component$(() => {
  const store = useStore({
    theme: (typeof window !== "undefined" && window.localStorage.theme) || "light",
    isScrolling: false,
    isExpanded: false,
  });

  return (
    <>
      <div class="relative">
        <header
          id="header"
          class={`sticky top-0 z-40 flex-none mx-auto w-full border-b border-gray-50/0 transition-[opacity] ease-in-out ${
            store.isScrolling
              ? " md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900"
              : ""
          }`}
          window:onScroll$={() => {
            if (!store.isScrolling && window.scrollY >= 10) {
              store.isScrolling = true;
            } else if (store.isScrolling && window.scrollY < 10) {
              store.isScrolling = false;
            }
          }}
        >
          <div class="border-radius-dot-25 bg-white/90 dark:bg-gray-900/90">
            <div class="relative text-default py-3 sm:py-2 px-3 md:px-6 mx-auto w-full md:flex md:justify-between items-center max-w-7xl">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a class="flex items-center" href={"/"}>
                  <KoinLogo />
                </a>
                <div class="flex items-center md:hidden">
                  <Link
                    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                    aria-label={"Telegram"}
                    title={"Telegram"}
                    href={"https://t.me/+Zhe2fvsS1WQyNTA0"}
                  >
                    <IconTelegram />
                  </Link>

                  <Link
                    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                    aria-label={"X"}
                    title={"X"}
                    href={"https://x.com/kaskrc20token"}
                  >
                    <IconTwitter />
                  </Link>

                  <button
                    type="button"
                    class="text-gray-50 bg-[#70C7BA] dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-sm text-sm p-2.5 inline-flex items-center"
                    aria-label="Toggle menu"
                    onClick$={() => {
                      store.isExpanded = !store.isExpanded;
                      document.body.classList.toggle("overflow-hidden", store.isExpanded);
                    }}
                  >
                    <IconMenu />
                  </button>
                </div>
              </div>

              {/* Center-Aligned Navigation */}
              <nav class="hidden md:flex items-center justify-center space-x-6 mx-auto">
                <a
                  href="#home"
                  class="text-gray-600 dark:text-gray-300 hover:text-[#70C7BA] transition-colors"
                >
                  About
                </a>
                <a
                  href="/roadmap"
                  class="text-gray-600 dark:text-gray-300 hover:text-[#70C7BA] transition-colors"
                >
                  Roadmap
                </a>
                <a
                  href="#services"
                  class="text-gray-600 dark:text-gray-300 hover:text-[#70C7BA] transition-colors"
                >
                  Exchanges
                </a>
                <a
                  href="#contact"
                  class="text-gray-600 dark:text-gray-300 hover:text-[#70C7BA] transition-colors"
                >
                  Community
                </a>
                <a
                  href="#contact"
                  class="text-gray-600 dark:text-gray-300 hover:text-[#70C7BA] transition-colors"
                >
                  Merch
                </a>
              </nav>

              {/* Call to Action Button */}
              <div class="hidden md:flex items-center">
                <a
                  href="#cta"
                  class="px-4 py-2 text-white bg-[#70C7BA] hover:bg-primary-dark rounded-lg shadow-md transition-colors"
                >
                  Buy $KOIN
                </a>
              </div>
            </div>
          </div>
        </header>

    {/* Overlay Accordion */}
{store.isExpanded && (
  <div
    class={`absolute inset-x-0 top-[calc(var(--header-height))] z-30 bg-white dark:bg-gray-900 transition-transform duration-300 ${
      store.isExpanded ? "translate-y-0" : "-translate-y-full"
    }`}
    style="--header-height: 4rem;"
    document:onClick$={(e) => {
      // Close menu if clicked outside
      const menuElement = document.querySelector("#header");
      if (!menuElement?.contains(e.target as Node)) {
        store.isExpanded = false;
        document.body.classList.remove("overflow-hidden");
      }
    }}
  >
    <div
      class="relative"
      onClick$={(e) => {
        // Prevent click inside MenuAccordion from closing the menu
        e.stopPropagation();
      }}
    >
       <Accordion.Root class="w-full px-5 dark:text-gray-50  ">
      {/* Services Section */}
      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-[#70C7BA] items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>About</span>
        </Accordion.Trigger>
        <Accordion.Content class=" py-2">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-[#70C7BA]/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">Web Design</a>
          </div>
          <div class="hover:bg-[#70C7BA]/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">Development</a>
          </div>
          <div class="hover:bg-[#70C7BA]/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">SEO Optimization</a>
          </div>
          <div class="hover:bg-[#70C7BA]/35 transition">
            <a href="/" class="block text-lg py-3 px-2">Brand Strategy</a>
          </div>
        </Accordion.Content>
      </Accordion.Item>




      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-[#70C7BA] items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>Roadmap</span>
        </Accordion.Trigger>
        <Accordion.Content class=" py-2">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-[#70C7BA]/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">Web Design</a>
          </div>
          <div class="hover:bg-[#70C7BA]/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">Development</a>
          </div>
          <div class="hover:bg-[#70C7BA]/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="/" class="block text-lg py-3 px-2">SEO Optimization</a>
          </div>
          <div class="hover:bg-[#70C7BA]/35 transition">
            <a href="/" class="block text-lg py-3 px-2">Brand Strategy</a>
          </div>
        </Accordion.Content>
      </Accordion.Item>





      <Accordion.Item class="dark:border-gray-700">
        <Accordion.Trigger class="text-xl flex trigger-text justify-between hover:text-[#70C7BA] items-center py-3 border-b border-gray-300 dark:border-gray-700">
          <span>Exchanges</span>
        </Accordion.Trigger>
        <Accordion.Content class=" py-2">
          {/* Service Links with Highlight and Divider */}
          <div class="hover:bg-[#70C7BA]/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="https://www.kaspiano.com/token/koin?ref=koin" class="block text-lg py-3 px-2">Kaspiano</a>
          </div>
          <div class="hover:bg-[#70C7BA]/35 transition border-b border-gray-300 dark:border-gray-700 last:border-none">
            <a href="https://krc20.chainge.finance/" class="block text-lg py-3 px-2">Chainge (coming soon)</a>
          </div>
    

        </Accordion.Content>
      </Accordion.Item>

  


 

    </Accordion.Root>
    </div>
  </div>
)}
        
      </div>
    </>
  );
});

