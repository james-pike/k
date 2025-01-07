import { $, component$, useComputed$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter";
import IconTelegram from "../icons/IconTelegram";
import { ThemeBaseColors, ThemeBorderRadiuses, ThemeConfig, ThemeFonts, ThemePrimaryColors, ThemeStyles } from "@qwik-ui/utils";
import { useTheme } from "~/lib/provider";


const links = [
  {
    title: "About",
    items: [
      { title: "Roadmap", href: "#" },
      { title: "Tokenomics", href: "#" },
      { title: "Hosting Solutions", href: "#" },
    ],
  },
  {
    title: "Exchanges",
    items: [
      { title: "KSPR Bot", href: "#" },
      { title: "Kaspiano", href: "https://www.kaspiano.com/token/koin?ref=koin" },
      { title: "Chainge (coming soon)", href: "https://krc20.chainge.finance/" },
    
    ],
  },
];

const social = [
  { label: "Twitter", icon: IconTwitter, href: "https://x.com/kaskrc20token" },
  { label: "Instagram", icon: IconTelegram, href: "https://t.me/+Zhe2fvsS1WQyNTA0" },
  

];

export default component$(() => {

  const { themeSig } = useTheme();
   
    const store = useStore({
      theme: (typeof window !== "undefined" && window.localStorage.theme) || "light",
      primaryColor: (typeof window !== "undefined" && window.localStorage.primaryColor) || [ThemePrimaryColors.CYAN600],
      
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

    // {
    //   title: "Support",
    //   items: [
    //     { title: "Contact Us", href: "#" },
    //     { title: "FAQs", href: "#" },
    //   ],
    // },
    // {
    //   title: "Company",
    //   items: [
    //     { title: "About Us", href: "#" },
    //     { title: "Privacy Policy", href: "#" },
    //   ],
    // },
  



  return (
    <footer class="py-1.5 px-1.5 bg-gradient-to-r from-[#70C7BA] via-[#70C7BA]/30 to-[#70C7BA]">
      <div class="max-w-7xl mx-auto px-4 bg-white/90 dark:bg-gray-900 shadow-lg border-radius-dot-25 rounded-lg">
        <div class="grid grid-cols-12 gap-4 gap-y-4 sm:gap-8 pt-6 pb-2 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8 sm:pl-2">
          <div class="flex items-center mb-4">
  <Link
    class="inline-block font-bold text-[#70C7BA] text-2xl"
    href={"/"}
  >
    KOIN
  </Link>
</div>

            <div class="text-sm text-gray-600 dark:text-gray-400">
              Everyone needs some KOIN in their wallet.
            </div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-gray-800 dark:text-gray-300 font-medium mb-3">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-1">
                      <Link
                        class="text-gray-600 hover:text-primary hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
            
        </div>
        <div class="md:flex md:items-center md:justify-between pb-2">
          <ul class="flex mb-2 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-[#70C7BA]/35  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
            
          </ul>

        

          <div class="text-sm text-gray-700 mr-4 pb-2 dark:text-slate-400 flex items-center">
       

          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 197.05 196.86" class="hidden sm:block">
  <defs>
   
  </defs>
  <g id="Layer_1-2">
    <g>
      <g>
        <circle class="fill-[#fff]" cx="98.52" cy="98.43" r="41.03"></circle>
        <path class="fill-[#6fc7ba]" d="m149.42,76.34c-2.8-6.76-7.22-13.03-12.32-18.12-5.08-5.1-11.61-8.91-18.38-11.71-6.51-2.71-13.78-4.07-21.28-4.07s-15.21.27-21.72,2.98c-6.76,2.8-12.42,8.12-17.51,13.22-5.1,5.1-11.02,10.51-13.82,17.26-2.71,6.53-1.83,14.48-1.83,21.99s.55,14.85,3.26,21.38c2.8,6.76,8.52,11.54,13.6,16.64,5.1,5.1,9.71,11.18,16.47,13.98,6.53,2.71,14.04,4.55,21.54,4.55s14.87-2.22,21.4-4.94c6.75-2.8,12.86-7.18,17.96-12.27,5.1-5.1,9.19-11.32,12.01-18.08,2.7-6.51,5.79-13.76,5.79-21.26s-2.48-15-5.19-21.53Zm-36.26,53.49l-11.88-1.75,3.39-23-24.87,19.16-7.32-9.56,21.82-16.8-21.82-16.81,7.32-9.56,24.87,19.16-3.39-22.99,11.88-1.77,4.73,31.98-4.73,31.96Z"></path>
      </g>
      <rect class="fill-none" x=".09" y="-.09" width="196.86" height="197.05" transform="translate(196.96 -.09) rotate(90)"></rect>
    </g>
  </g>
</svg>
          Donate: kaspa:qqdgtudp42jxd0pqpxzz79adrrmhd52k....
          </div>
        </div>
      </div>
    </footer>
  );
});