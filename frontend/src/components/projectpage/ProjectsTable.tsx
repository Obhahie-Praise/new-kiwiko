import { getMyProjects } from "@/lib/server/server.action";
import { ArrowUpRight, FolderCode, Plus, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectsTable = async () => {
  const getprojects = await getMyProjects();
  console.log(getprojects);

  return (
    <div className="max-w-4xl mx-auto mt-24">
      <div className="">
        <div className="">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-medium">Projects</h4>
            <div className="flex items-center space-x-3">
              <Link href={"/projects/new"} className="text-sm py-1.5 flex items-center gap-1 px-3 font-medium bg-black text-white dark:bg-white rounded-md dark:text-black hover:opacity-80 transition ">
                <Plus size={16} />
                <p className="">Create Project</p>
              </Link>
              <div className="dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-600 text-zinc-500 flex items-center text-sm px-2 py-1.5 rounded-md">
                <Search size={16} />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none w-full px-2 text-black dark:text-white"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-12 gap-2">
              {getprojects.length > 0 ? (
                getprojects.map((project) => (
                  <div key={project.id} className="grid grid-cols-12 gap-2">
                    <div className="col-span-4">Project name</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2">Position</div>
                    <div className="col-span-2">Owner</div>
                    <div className="col-span-1">Portfolio</div>
                    <div className="col-span-1">Actions</div>
                    <div className="col-span-4">{project.name}</div>
                    <div className="col-span-2">{project.status}</div>
                    <div className="col-span-2">{project.position}</div>
                    <div className="col-span-2">{project.owner}</div>
                    <div className="col-span-1">{project.portfolio}</div>
                    <div className="col-span-1">
                      <Link href={"/projects/new"} className="text-sm py-1.5 flex items-center gap-1 px-3 font-medium bg-black text-white dark:bg-white rounded-md dark:text-black hover:opacity-80 transition ">
                        <Plus size={16} />
                        <p className="">Create project</p>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-12">
                  <div className="space-y-4 mt-24">
                    <div className="p-3 rounded-xl w-fit mx-auto bg-zinc-100 dark:bg-zinc-900">
                      <div className="flex items-center justify-center">
                        <FolderCode size={25} strokeWidth={1.3} />
                      </div>
                    </div>
                    <h5 className="text-lg font-medium text-center leading-0">
                      No Project Yet
                    </h5>
                    <p className="w-xs text-center text-sm text-neutral-500 dark:text-neutral-400 mx-auto">
                      You haven&apos;t created any projects yet. Get started by
                      creating your first project!
                    </p>
                    <div className="space-x-3 w-fit mx-auto">
                      <Link
                        href={"/projects/new"}
                        className="text-sm py-1.5 px-3 font-medium bg-black text-white dark:bg-white rounded-md dark:text-black hover:opacity-80 transition"
                      >
                        Create project
                      </Link>
                      <Link
                        href={"/project/join"}
                        className="text-sm py-1.5 px-3 font-medium bg-black text-white dark:bg-zinc-900 rounded-md dark:text-zinc-300 hover:opacity-80 transition"
                      >
                        Join project
                      </Link>
                    </div>
                    <Link
                      href={"/learn-more"}
                      className="w-fit mx-auto text-sm underline flex items-center gap-1"
                    >
                      <p className="">Learn more</p>
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTable;
