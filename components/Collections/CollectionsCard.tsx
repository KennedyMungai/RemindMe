"use client";
import { Collection } from "@prisma/client";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { Progress } from "../ui/progress";

type Props = {
  collection: Collection;
};

const tasks: string[] = ["sugar", "plum"];

const CollectionsCard = ({ collection }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "flex w-[20rem] justify-between p-6",
            isOpen && "rounded-b-none",
            CollectionColors[collection.color as CollectionColor]
          )}
        >
          <span className="text-white font-bold">{collection.name}</span>
          {!isOpen && <CaretDownIcon className="h-6 w-6" />}
          {isOpen && <CaretUpIcon className="h-6 w-6" />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex rounded-b-md flex-col dark:bg-neutral-900 shadow-md p-1">
        {tasks.length === 0 && <div>No Tasks</div>}
        {tasks.length > 0 && (
          <>
            <Progress className="rounded-none" value={45} />
            <div className="flex flex-col gap-2">
              {tasks.map((task) => {
                return <div key={task}>Mocked Task</div>;
              })}
            </div>
          </>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollectionsCard;
