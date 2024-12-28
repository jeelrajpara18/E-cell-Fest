import { cn } from "../utils/cn";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-2 ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  duration,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 border rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 justify-between flex flex-col ",
        className
      )}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className="font-sans text-3xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-sans text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {duration}
        </div>
        <div
          className="font-sans font-bold text-neutral-600 text-base dark:text-neutral-300">
             {description}
        </div>         
      </div>
    </div>)
  );
};
