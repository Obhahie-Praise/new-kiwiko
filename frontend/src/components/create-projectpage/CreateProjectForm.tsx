import React from "react";
import BasicInfo from "./sections/BasicInfo";

const CreateProjectForm = async () => {
  return (
    <div className="max-w-3xl mx-auto pt-10">
      <div className="">
        <h4 className="flex items-center justify-between py-4">
          <p className="text-2xl font-medium">Create project</p>
          <div className="flex items-center space-x-2">
            {" "}
            <div className="h-px w-15 bg-zinc-600 dark:bg-neutral-400" />
            <p className="serif text-sm font-medium text-zinc-600 dark:text-neutral-300">
              Build the frame
            </p>{" "}
          </div>
        </h4>
        <BasicInfo />
      </div>
    </div>
  );
};

export default CreateProjectForm;
