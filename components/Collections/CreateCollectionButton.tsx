"use client";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const CreateCollectionButton = (props: Props) => {
  return (
    <Button
      variant={"outline"}
      className="dark:text-white w-full dark:bg-neutral-950 bg-white"
    >
      CreateCollectionButton
    </Button>
  );
};

export default CreateCollectionButton;
