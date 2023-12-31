import { CollectionColor, CollectionColors } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  CreateCollectionSchemaType,
  createCollectionSchema,
} from "@/schema/createCollection";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { createCollection } from "@/actions/collection";
import { toast } from "../ui/use-toast";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CreateCollectionSheet = ({ open, onOpenChange }: Props) => {
  const form = useForm<CreateCollectionSchemaType>({
    defaultValues: {},
    resolver: zodResolver(createCollectionSchema),
  });

  // const router = useRouter();

  const onSubmit = async (data: CreateCollectionSchemaType) => {
    try {
      await createCollection(data);

      openChangeWrapper(false);
      // router.reload();

      toast({
        title: "Success",
        description: "Collection created successfully",
        variant: "destructive",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again",
        variant: "destructive",
      });
      alert(error.message);
    }
  };

  const openChangeWrapper = (open: boolean) => {
    form.reset();
    onOpenChange(open);
  };

  return (
    <Sheet open={open} onOpenChange={openChangeWrapper}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add a new collection</SheetTitle>
          <SheetDescription>
            Collections are a used to group tasks
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 flex flex-col"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Personal" {...field} />
                  </FormControl>
                  <FormDescription>Collection Name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <Select onValueChange={(color) => field.onChange(color)}>
                      <SelectTrigger
                        className={cn(
                          "w-full h-8 text-white",
                          CollectionColors[field.value as CollectionColor]
                        )}
                      >
                        <SelectValue
                          placeholder="Select a color"
                          className="w-full h-8"
                        />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        {Object.keys(CollectionColors).map((color) => (
                          <SelectItem
                            key={color}
                            value={color}
                            className={cn(
                              `w-full h-8 rounded-md my-1 text-white focus:text-white focus:font-bold focus:ring-2 ring-neutral-600 focus:ring-inset dark:focus:ring-white focus:px-8`,
                              CollectionColors[color as CollectionColor]
                            )}
                          >
                            {color}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Select a color for your collection
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className="flex flex-col py-4 gap-3">
          <Separator />
          <Button
            variant={"outline"}
            onClick={form.handleSubmit(onSubmit)}
            className={cn(
              form.watch("color") &&
                CollectionColors[form.getValues("color") as CollectionColor]
            )}
            disabled={form.formState.isSubmitting}
          >
            Confirm
            {form.formState.isSubmitting && (
              <ReloadIcon className="ml-2 h-4 w-4 animate-spin" />
            )}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CreateCollectionSheet;
