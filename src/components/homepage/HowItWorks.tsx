import React from "react";

const HowItWorks = () => {

  const array = [{
    title: "Data Collection",
    description: "We gather signals from the market—emerging trends, product launches, and startup activity across industries. We also track the progress of startups on Kiwiko, transforming their real-time metrics—like traction, growth, and milestones—into structured data points for deeper analysis."
  },
  {
    title: "Data Interpretation and Validation",
    description: "Once we’ve collected the data, it’s analyzed to uncover meaningful patterns—market demand, product adoption, and growth signals. Each startup’s progress is validated—ensuring that only founders with real products, real traction, and genuine progress are showcased."
  },
  {
    title: "Controlled Sharing of Insights",
    description: "Not all data is public. Founders choose what’s shared: core progress metrics, market validations, and key traction stats are made public on their portfolio page. Private or sensitive data stays internal, only revealed when a founder invites an investor into their team."
  },
  {
    title: "Discovery and Portfolio Building",
    description: "Investors and scouts can explore curated collections of startups—filtered by industry, stage, and traction level. Founders build their public portfolio with validated metrics, milestones, and market signals—creating a transparent, trustworthy profile that attracts the right partners."
  },
  {
    title: "Investor and Startup Relationships",
    description: "Once investors come on board, collaboration becomes seamless. Founders share deeper insights, communicate progress on funding rounds, and co-develop their vision. These ongoing dialogues—powered by clear data—keep relationships strong, guiding startups toward strategic growth and successful funding rounds."
  }]

  return (
    <section id="how-it-works" className="lg:min-h-screen py-40 px-15">
      <div className="">
        <h2 className="flex items-center justify-between">
          <p className="text-6xl">How it works</p>
          <div className="flex items-center space-x-2">
            {" "}
            <div className="h-px w-20 bg-zinc-600 dark:bg-neutral-400" />
            <p className="serif text-lg text-zinc-600 dark:text-neutral-400">
              The engine under the hood
            </p>{" "}
          </div>
        </h2>
        <div className="grid grid-cols-2 mt-8 gap-4">
          {array.map((item, index) => (
            <div key={index} className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 group">
              <div className="h-15 w-15 rounded-full border border-zinc-200 dark:border-zinc-700 group-hover:bg-black dark:group-hover:bg-white dark:group-hover:text-black text-xl font-semibold transition-colors duration-300 flex items-center justify-center">{index + 1}</div>
              <h4 className="text-xl font-semibold mt-4">{item.title}</h4>
              <p className="text-sm text-neutral-700 dark:text-neutral-400 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
