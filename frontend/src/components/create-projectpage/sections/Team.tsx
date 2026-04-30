import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail } from "lucide-react";
import React from "react";

const Team = () => {
  const teamRoles = [
    "Advisor",
    "Admin",
    "Advisor",
    "Co-founder",
    "Consultant",
    "Designer",
    "Developer",
    "Founder",
    "HR",
    "Marketer",
    "Spectator"
  ];
  return (
    <section>
      <h2 className="text-lg flex items-center gap-4 pb-2 px-12">
        <div className="w-10 h-px bg-zinc-600 dark:bg-zinc-400" />
        <p className="text-zinc-800 dark:text-zinc-100">Team</p>
      </h2>
      <div className="px-12">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2 bg-zinc-200 dark:bg-neutral-900 rounded-lg py-2 px-4 w-2/3">
              <Mail
                size={18}
                strokeWidth={1.4}
                className="text-zinc-600 dark:text-zinc-200"
              />
              <input type="text" className="w-full bg-transparent outline-none" placeholder="member@team.com" />
            </div>
            <div className="w-1/3">
              <Select>
                <SelectTrigger className="rounded-lg w- full">
                  <SelectValue placeholder={"Select a role"} />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  {teamRoles.map((role) => (
                    <SelectItem className="rounded-lg" key={role} value={role.toLowerCase()}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
