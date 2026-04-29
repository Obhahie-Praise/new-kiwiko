import ProjectsTable from "@/components/projectpage/ProjectsTable";
import TopNavBar from "@/components/projectpage/TopNavBar";
import { Suspense } from "react";

const ProjectsPage = () => {
  return (
    <div className="">
      <TopNavBar />
      <div className="">
        <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-white"></div></div>}>
          <ProjectsTable />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjectsPage;
