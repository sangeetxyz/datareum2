"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Check, ChevronsUpDown } from "lucide-react";
import { useAtom } from "jotai";
import { currentDisease } from "@/jotai/atom";

export const DiseaseSelector = ({ diseaseList }: { diseaseList: string[] }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [currentDiseasePrivate, setCurrentDiseasePrivate] =
    useAtom(currentDisease);

  useEffect(() => {
    setCurrentDiseasePrivate(value);
  }, [value]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="justify-between space-x-4 bg-acc font-bold"
        >
          {value ? value.toUpperCase() : "Select disease..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]  p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className="max-h-96">
            {diseaseList.map((disease, index) => (
              <CommandItem
                key={index}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === disease ? "opacity-100" : "opacity-0",
                  )}
                />
                {disease}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
