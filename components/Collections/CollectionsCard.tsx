"use client";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Collection } from "@prisma/client";
import { CaretDownIcon, CaretUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { AiOutlinePlus } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { Alert } from "../ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

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
            "flex w-full justify-between p-6",
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
        <Separator />
        <footer className="h-[3rem] p-2 text-xs text-neutral-500 flex justify-between items-center">
          <p>Created at {collection.createdAt.toUTCString()}</p>
          <div className="flex flex-row">
            <Button size={"icon"} variant={"ghost"}>
              <AiOutlinePlus className={"h-4 w-4"} />
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size={"icon"} variant={"ghost"}>
                  <FiTrash className={"h-4 w-4"} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Proceed</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </footer>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollectionsCard;
