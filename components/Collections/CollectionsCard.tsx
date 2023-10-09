"use client";
import { Collection } from "@prisma/client";
import React, { useState } from "react";
import { Collapsible, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";

type Props = {
  collection: Collection;
};

const CollectionsCard = ({ collection }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger>
        <Button
          variant={"ghost"}
          className={cn(
            "flex w-[20rem] justify-between p-6",
            CollectionColors[collection.color as CollectionColor]
          )}
        >
          <span className="text-white font-bold">{collection.name}</span>
          {!isOpen && <CaretDownIcon />}
          {isOpen && <CaretUpIcon />}
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
};

export default CollectionsCard;
