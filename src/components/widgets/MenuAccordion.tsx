import { component$ } from '@builder.io/qwik';
import { Accordion } from '../ui/Accordion';

export default component$(() => {
  return (
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
  );
});
