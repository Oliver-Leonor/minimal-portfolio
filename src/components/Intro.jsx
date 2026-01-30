import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white">
        Oliver Leonor
      </h1>

      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Full Stack Developer
      </p>

      <p className="text-sm max-w-xl mb-6 font-medium text-stone-600 dark:text-stone-400">
        Software engineer with hands-on experience building internal tools,
        business systems, and data-driven applications. I specialize in
        TypeScript-based frontend and backend development using React and
        Node.js, with a strong focus on reliability, maintainability, and
        real-world system behavior. Experienced working across product,
        operations, and engineering to deliver software used by real teams.
      </p>
    </div>
  );
}

export default Intro;
