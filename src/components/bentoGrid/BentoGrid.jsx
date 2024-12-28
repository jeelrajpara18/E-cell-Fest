import React from "react";
import { BentoGrid, BentoGridItem } from "../../ui/bentogrid";
import { items } from "../../utils/bentoCard";


export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          duration={item.duration}
          description={item.description}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

