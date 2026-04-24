import React from "react";

const Waitlist = () => {
  const array = [
    {
      title: "Early Access to Innovation",
      description:
        "Be among the first to experience Kiwiko’s groundbreaking startup discovery tools—helping you stay ahead in a fast-moving market.",
    },
    {
      title: "Shape the Product’s Future",
      description:
        "Your feedback matters—help us tailor Kiwiko to real founder needs. You’ll have a direct impact on how the platform evolves.",
    },
    {
      title: "Exclusive One-Year Free Premium Access",
      description:
        "After launch, enjoy a full year of premium features at no cost—giving you a head start on growing your startup.",
    },
  ];
  return (
    <section id="waitlist" className="lg:min-h-screen py-40 px-15">
      <div className="">
        <h2 className="">
          <div className="flex items-center gap-2 w-fit mx-auto">
            <div className="h-0.5 w-40 bg-linear-to-l from-black to-white dark:from-white dark:to-black" />
            <p className="text-xl font-semibold">Join the waitlist</p>
            <div className="h-0.5 w-40 bg-linear-to-r from-black to-white dark:from-white dark:to-black" />
          </div>
          <p className="text-center text-6xl">
            Be the first to shape what comes next
          </p>
          <p className="text-center text-lg py-4 leading-[1.3] text-zinc-700 dark:text-neutral-400 w-2/3 mx-auto">
            Join the Kiwiko waitlist and get early access to a new way of
            discovering and building startups. As a founding member, you’ll
            shape the future and enjoy a free premium account for a year after
            launch.
          </p>
        </h2>
        <div className="grid grid-cols-2 gap-10 mt-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              {" "}
              <p className="serif text-lg text-zinc-600 dark:text-neutral-400">
                Why join the waitlist?
              </p>{" "}
              <div className="h-px w-20 bg-zinc-600 dark:bg-neutral-400" />
            </div>
            {array.map((item, index) => (
              <div
                key={index}
                className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 group"
              >
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm mt-1 text-neutral-700 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="">
            <div className="">
              <form action="" className="space-y-4 mt-24">
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm">Full name</label>
                  <input className="bg-zinc-200 dark:bg-zinc-900 py-3 focus:border-zinc-300 dark:focus:border-zinc-800 px-6 rounded-lg" type="text" placeholder="John Doe" required />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="" className="text-sm">Email</label>
                  <input className="bg-zinc-200 dark:bg-zinc-900 py-3 focus:border-zinc-300 dark:focus:border-zinc-800 px-6 rounded-lg" type="email" placeholder="johndoe@gmail.com" required />
                </div>
                <button type="submit" className="mt-4 cursor-pointer hover:opacity-80 transition-opacity duration-300 space-x-1 w-full font-semibold text-lg text-center py-3 bg-linear-to-b from-black to-zinc-700 dark:from-white dark:to-zinc-400 text-white dark:text-black rounded-lg">Join</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
