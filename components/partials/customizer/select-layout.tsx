import React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store";
import { VerticalSvg, HorizontalSvg, SemiBoxSvg } from "@/components/svg";

import { Icon } from "@iconify/react";
const layoutOptions = [
  {
    key: "vertical",
    label: "Vertical",
    svg: (
      <VerticalSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
  {
    key: "horizontal",
    label: "Horizontal",
    svg: (
      <HorizontalSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
  {
    key: "semibox",
    label: "Semi-Box",
    svg: (
      <SemiBoxSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
];

const SelectLayout = () => {
  const { layout, setLayout } = useThemeStore();

  return (
    <div>
      <div className="mb-2 relative inline-block px-3 py-[3px] rounded-md before:bg-primary before:absolute before:top-0 before:left-0 before:w-full  before:h-full before:rounded before:opacity-10 before:z-[-1]  text-primary  text-xs font-medium">
        Layout
      </div>
      <div className="text-muted-foreground font-normal text-xs mb-4">
        Choose your layout
      </div>
      <div className=" grid grid-cols-3 gap-3">
        {layoutOptions.map((layoutOption) => (
          <div key={layoutOption.key}>
            <button
              onClick={() => setLayout(layoutOption.key)}
              className={cn("border block  rounded relative h-[72px] w-full", {
                "text-primary border-primary": layout === layoutOption.key,
                "text-muted-foreground border-border":
                  layout !== layoutOption.key,
              })}
            >
              {layout === layoutOption.key && (
                <Icon
                  icon="heroicons:check-circle-20-solid"
                  className=" text-primary absolute top-1 right-1"
                />
              )}
              {layoutOption.svg}
            </button>

            <Label className=" text-muted-foreground font-normal block mt-2">
              {layoutOption.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectLayout;
