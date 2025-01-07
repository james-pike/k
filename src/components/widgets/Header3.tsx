import { $, component$, useComputed$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import {
  ThemeConfig,
  ThemeFonts,
  ThemeStyles,
  ThemeBaseColors,
  ThemePrimaryColors,
  ThemeBorderRadiuses,
  
} from "@qwik-ui/utils";
import { useTheme } from "~/lib/provider";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";
import MenuAccordion from "./MenuAccordion";

// import IconMenu from "../icons/IconMenu";
import IconMenu from "../icons/IconMenu";
import KoinLogo from "../common/KoinLogo";
import IconTelegram from "../icons/IconTelegram";
import IconTwitter from "../icons/IconTwitter";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const { themeSig } = useTheme();
 
  const store = useStore({
    theme: (typeof window !== "undefined" && window.localStorage.theme) || "light",
    primaryColor: (typeof window !== "undefined" && window.localStorage.primaryColor) || ThemePrimaryColors.CYAN600,
    isScrolling: false,
    isExpanded: false,
  });

  const themeComputedObjectSig = useComputed$((): ThemeConfig => {
    if (!store.theme || store.theme === "light") {
      return {
        font: ThemeFonts.SANS,
        mode: store.theme,
        style: ThemeStyles.SIMPLE,
        baseColor: ThemeBaseColors.SLATE,
        primaryColor: store.primaryColor,
        borderRadius: ThemeBorderRadiuses["BORDER-RADIUS-0"],
      };
    }

    if (store.theme === "dark") {
      return {
        font: ThemeFonts.SANS,
        mode: store.theme,
        style: ThemeStyles.SIMPLE,
        baseColor: ThemeBaseColors.SLATE,
        primaryColor: store.primaryColor,
        borderRadius: ThemeBorderRadiuses["BORDER-RADIUS-0"],
      };
    }

    let themeArray: string[] = [];
    if (themeSig?.value) {
      themeArray = Array.isArray(themeSig.value)
        ? themeSig.value
        : themeSig.value.split(" ");
    }

    return {
      font: themeArray[0],
      mode: themeArray[1],
      style: themeArray[2],
      baseColor: themeArray[3],
      primaryColor: themeArray[4],
      borderRadius: themeArray[5],
    };
  });

  useVisibleTask$(() => {
    store.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";

    const storedPrimaryColor = localStorage.getItem("primaryColor");
    store.primaryColor = storedPrimaryColor || "defaultColor";
  });

  const themeStoreToThemeClasses$ = $((): string => {
    const { font, mode, style, baseColor, primaryColor, borderRadius } =
      themeComputedObjectSig.value;
    return [font, mode, style, baseColor, primaryColor, borderRadius].join(" ");
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
      <button
        type="button"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
        aria-label="Toggle between Dark and Light mode"
        onClick$={async () => {
          themeComputedObjectSig.value.mode =
            themeComputedObjectSig.value.mode?.includes("light") ? "dark" : "light";
          themeSig.value = await themeStoreToThemeClasses$();
        }}
      >
        {store.theme == "dark" ? <IconMoon /> : <IconSun />}
      </button>
      <Link
                        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                        aria-label={"Telegram"}
                        title={"Telegram"}
                        href={"https://t.me/+Zhe2fvsS1WQyNTA0"}
                      >
                        <IconTelegram />
                      </Link>
      
                      <Link
                        class="text-gray-500 dark:text-gray-400 mr-1 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                        aria-label={"X"}
                        title={"X"}
                        href={"https://x.com/kaskrc20token"}
      
                      >
                        <IconTwitter />
                      </Link>
      {/* <button
        type="button"
        class="text-gray-50 bg-[#70C7BA] dark:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-sm text-sm p-2.5 inline-flex items-center"
        aria-label="Toggle menu"
        onClick$={() => {
          store.isExpanded = !store.isExpanded;
          document.body.classList.toggle("overflow-hidden", store.isExpanded);
        }}
      >
        <IconMenu />
      </button> */}
    </div>
  </div>

  {/* Center-Aligned Navigation */}
  <nav class="hidden md:flex items-center justify-center space-x-6 mx-auto">
    <a
      href="/about"
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
      href="/"
      class="text-gray-600 dark:text-gray-300 hover:text-[#70C7BA] "
    >
      Links
    </a>
    <a
      href="/"
      class="text-gray-600 dark:text-gray-300 hover:text-[#70C7BA] "
    >
      Contact
    </a>
 
  </nav>

  {/* Call to Action Button */}
  <div class="hidden md:flex items-center">
     {/* <button
        type="button"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
        aria-label="Toggle between Dark and Light mode"
        onClick$={async () => {
          themeComputedObjectSig.value.mode =
            themeComputedObjectSig.value.mode?.includes("light") ? "dark" : "light";
          themeSig.value = await themeStoreToThemeClasses$();
        }}
      >
        {store.theme == "dark" ? <IconMoon /> : <IconSun />}
      </button> */}
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
  <a
                  href="#cta"
                  class="px-4 py-2 text-white bg-[#70C7BA] hover:bg-gray-50 rounded-lg shadow-md transition-colors"
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