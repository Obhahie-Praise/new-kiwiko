import React from "react";
import ImageThemeSwitcher from "../ui/ImageThemeSwitcher";
import { ChartColumn, Workflow, Zap } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="lg:min-h-screen py-40 px-15">
      <div className="">
        <h2 className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p className="serif text-lg text-zinc-600 dark:text-neutral-400">
              Whats in it for you?
            </p>{" "}
            <div className="h-px w-20 bg-zinc-600 dark:bg-neutral-400" />
          </div>
          <p className="text-6xl">Features</p>
        </h2>
        <div className="grid grid-cols-3 grid-rows-12 gap-4 mt-8">
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl row-span-12">
            <div className="">
              <h3 className="text-black dark:text-white text-lg font-semibold">
                Startup portfolio
              </h3>
              <p className="max-w-sm text-sm font-light text-neutral-700 dark:text-neutral-400">
                Have your professional startup portfolio that is updated in real
                time for the public - ready to share with anyone.
              </p>
            </div>
            <div className="mt-12 border-dashed border border-zinc-200 dark:border-zinc-700">
              <ImageThemeSwitcher
                srcdark="/startup-portfolio-dark.svg"
                srclight="/startup-portfolio-light.svg"
                alt="Feature 1"
                width={400}
                hieght={400}
              />
            </div>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl row-span-6">
            <div className="">
              <h3 className="text-black dark:text-white text-lg font-semibold">
                Seamless funding
              </h3>
              <p className="max-w-sm text-sm font-light text-neutral-700 dark:text-neutral-400">
                Manage funding rounds for your startup with the right investors
                from the start.
              </p>
            </div>
            <div className="mt-2 w-fit mx-auto">
              <ImageThemeSwitcher
                srcdark="/funding-dark.svg"
                srclight="/funding-light.svg"
                alt="Feature 2"
                width={350}
                hieght={350}
              />
            </div>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl row-span-12">
            <div className="">
              <h3 className="text-black dark:text-white text-lg font-semibold">
                Real-time collaboration
              </h3>
              <p className="max-w-sm text-sm font-light text-neutral-700 dark:text-neutral-400">
                Collaborate and share insights with your team in real
              </p>
            </div>
            <div className="mt-12">
              <ImageThemeSwitcher
                srcdark="/collab-dark.svg"
                srclight="/collab-light.svg"
                alt="Feature 3"
                width={400}
                hieght={400}
              />
            </div>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl row-span-6">
            <div className="">
              <h3 className="text-black dark:text-white text-lg font-semibold">
                AI driven
              </h3>
              <p className="max-w-sm text-sm font-light text-neutral-700 dark:text-neutral-400">
                Kiwiko Agent will be a part of your team and will help you with
                market research, data analysis, and more.
              </p>
            </div>
            <div className="mt-10">
              <ImageThemeSwitcher
                srcdark="/ai-dark.svg"
                srclight="/ai-light.svg"
                alt="Feature 4"
                width={400}
                hieght={400}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="px-4">
            <Zap strokeWidth={1.4} size={20} />
            <h4 className="font-semibold py-3">Lighting-fast executions</h4>
            <p className="text-sm font-light text-neutral-700 dark:text-neutral-400">
              Go from idea to launch in record time with our streamlined
              workflow and automation tools.
            </p>
          </div>
          <div className="px-4">
            <ChartColumn strokeWidth={1.4} size={20} />
            <h4 className="font-semibold py-3">Lighting-fast executions</h4>
            <p className="text-sm font-light text-neutral-700 dark:text-neutral-400">
              Go from idea to launch in record time with our streamlined
              workflow and automation tools.
            </p>
          </div>
          <div className="px-4">
            <Workflow strokeWidth={1.4} size={20} />
            <h4 className="font-semibold py-3">Lighting-fast executions</h4>
            <p className="text-sm font-light text-neutral-700 dark:text-neutral-400">
              Go from idea to launch in record time with our streamlined
              workflow and automation tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
