import React from "react";
import { Label } from "@/components/ui/label";
import { useSidebar, useThemeStore } from "@/store";
import { cn } from "@/lib/utils";
import { VerticalSvg, SemiBoxSvg } from "@/components/svg";
import { Icon } from "@iconify/react";
const sidebarOptions = [
  {
    key: "module",
    label: "Module",
    disabled: (layout: string) =>
      layout === "semibox" || layout === "horizontal",
    svg: (
      <VerticalSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
  {
    key: "classic",
    label: "Classic",
    disabled: (layout: string) => layout === "semibox",
    svg: (
      <SemiBoxSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
  {
    key: "popover",
    label: "Popover",
    svg: (
      <SemiBoxSvg className="[&>rect]:fill-default-300 [&>circle]:fill-default-400 [&>path]:fill-default-400" />
    ),
  },
];

const SidebarChange = () => {
  const { sidebarType, setSidebarType } = useSidebar();
  const { layout } = useThemeStore();

  return (
    <div>
      <div className="mb-2 relative inline-block px-3 py-[3px] rounded-md before:bg-primary before:absolute before:top-0 before:left-0 before:w-full  before:h-full before:rounded before:opacity-10 before:z-[-1]  text-primary  text-xs font-medium">
        Sidebar Layout
      </div>
      <div className="text-muted-foreground font-normal text-xs mb-4">
        Choose your layout
      </div>
      <div className=" grid grid-cols-3 gap-3">
        {sidebarOptions.map((sidebarOption) => (
          <div key={sidebarOption.key}>
            <button
              onClick={() => setSidebarType(sidebarOption.key)}
              disabled={
                sidebarOption.disabled && sidebarOption.disabled(layout)
              }
              className={cn(
                " border block  rounded relative h-[72px] w-full disabled:cursor-not-allowed",
                {
                  "text-primary border-primary":
                    sidebarType === sidebarOption.key,
                  "text-muted-foreground border-border":
                    sidebarType !== sidebarOption.key,
                }
              )}
            >
              {sidebarType === sidebarOption.key && (
                <Icon
                  icon="heroicons:check-circle-20-solid"
                  className=" text-primary absolute top-1 right-1"
                />
              )}
              {sidebarOption.svg}
            </button>

            <Label className=" text-muted-foreground font-normal block mt-2">
              {sidebarOption.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarChange;
