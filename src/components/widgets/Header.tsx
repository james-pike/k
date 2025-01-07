import { component$, useStore } from "@builder.io/qwik";
import {

  ThemePrimaryColors,

  
} from "@qwik-ui/utils";

import MenuAccordion from "./MenuAccordion";

// import IconMenu from "../icons/IconMenu";
import IconMenu from "../icons/IconMenu";
import KoinLogo from "../common/KoinLogo";
import { Link } from "@builder.io/qwik-city";
import IconTwitter from "../icons/IconTwitter";
import IconTelegram from "../icons/IconTelegram";



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
                      <IconTelegram/>
                    </Link>

                    <Link
                      class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                      aria-label={"X"}
                      title={"X"}
                      href={"https://x.com/kaskrc20token"}
                      
                    >
                      <IconTwitter/>
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
    >
      <div class="relative">
        <MenuAccordion />
      </div>
    </div>
  )}
</div>



    </>
  );
});
