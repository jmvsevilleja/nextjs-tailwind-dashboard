"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Icon } from "@iconify/react";

const allThemes = [
  { key: "light", label: "Light", icon: "heroicons:sun" },
  { key: "dark", label: "Dark", icon: "heroicons:moon" },
];

const SelectTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className="mb-2 relative inline-block px-3 py-[3px] rounded-md before:bg-primary before:absolute before:top-0 before:left-0 before:w-full  before:h-full before:rounded before:opacity-10 before:z-[-1]  text-primary  text-xs font-medium">
        Color Scheme
      </div>
      <div className="text-muted-foreground font-normal text-xs mb-4">
        Choose Light or Dark Scheme.
      </div>
      <div className=" grid grid-cols-2 gap-3">
        {allThemes?.map((themeOption) => (
          <div key={themeOption.key} className="flex-1 w-full">
            <button
              onClick={() => setTheme(themeOption.key)}
              className={cn(
                "border  flex  w-full text-center items-center justify-center py-[14px]  px-10 rounded relative",
                {
                  "text-primary border-primary": theme === themeOption.key,
                  "text-default-400": theme !== themeOption.key,
                }
              )}
            >
              {theme === themeOption.key && (
                <Icon
                  icon="heroicons:check-circle-20-solid"
                  className=" text-primary absolute top-1 right-1"
                />
              )}
              <div>
                <Icon icon={themeOption.icon} className=" h-5 w-5" />
              </div>
            </button>
            <Label className=" text-muted-foreground font-normal block mt-2">
              {themeOption.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTheme;
