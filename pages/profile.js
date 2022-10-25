import { React, Fragment } from "react";
import Layout from "../components/layout";
import { Tab } from "@headlessui/react";

export default function profile() {
  return (
    <Layout title="profile">
      <div className="flex flex-col justify-center items-center">
        <Tab.Group>
          <div class="overflow-auto flex justify-center items-center max-w-3/5 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <Tab.List>
                <Tab
                  href="#"
                  className="mr-2 inline-flex p-4 ui-not-selected:text-gray-400 rounded-t-lg ui-selected:border-b-2 ui-selected:text-lime-700 ui-selected:border-b-lime-700 group"
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 w-5 h-5 text-lime-700 ui-not-selected:text-gray-400 group-hover:text-lime-700 ui-selected:lime-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Profile
                </Tab>
                <Tab
                  href="#"
                  className="mr-2 inline-flex p-4 ui-not-selected:text-gray-400 rounded-t-lg ui-selected:border-b-2 ui-selected:text-lime-700 ui-selected:border-b-lime-700 group"
                  aria-current="page"
                >
                  <svg
                    aria-hidden="true"
                    class="mr-2 w-5 h-5 text-lime-700 ui-not-selected:text-gray-400 group-hover:text-lime-700 ui-selected:lime-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  Dashboard
                </Tab>
                {/* ...  */}
              </Tab.List>
            </ul>
          </div>
          <div className="flex justify-center items-center w-3/5">
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </Layout>
  );
}
