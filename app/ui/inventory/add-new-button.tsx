import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/app/ui/sheet";
import { Button } from "@/app/ui/button";
import CreateForm from "./create-form";
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function AddButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"} className="lg:w-full lg:max-w-screen-md">
        <SheetTitle className="pb-8 text-3xl">Add new item</SheetTitle>
        <CreateForm />
      </SheetContent>
    </Sheet>
  );
}
