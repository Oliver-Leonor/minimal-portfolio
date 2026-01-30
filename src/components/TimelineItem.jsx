import React from "react";

export default function TimelineItem({ year, title, duration, details, tech }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
      <li className="mb-10 ml-4">
        {/* Timeline dot */}
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />

        {/* Header row */}
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md dark:text-stone-900 dark:bg-white">
            {year}
          </span>

          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>

          <span className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </span>
        </p>

        {/* Details */}
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {details}
        </p>

        {/* Tools & Tech Stack */}
        {tech && tech.length > 0 && (
          <div className="mt-3">
            <p className="mb-2 text-sm font-semibold text-stone-700 dark:text-stone-300">
              Tools & Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium rounded-md
                             bg-stone-100 text-stone-700
                             dark:bg-stone-800 dark:text-stone-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </li>
    </ol>
  );
}
