import React, { SetStateAction } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CreateCollectionSheet = ({ open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add a new collection</SheetTitle>
          <SheetDescription>
            Collections are a used to group tasks
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CreateCollectionSheet;
