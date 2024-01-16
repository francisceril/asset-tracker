import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { NewDeviceForm } from "./new-device-form";

export function NewDeviceSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-lg">
          <Plus className="mr-2 size-4" />
          New device
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Add new device</SheetTitle>
          <SheetDescription>
            Fill up the form to add a new device.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 h-[1000px] flex-1">
          <div>
            <NewDeviceForm />
          </div>
        </div>
        <SheetFooter>
          <Button>Save changes</Button>
          <SheetClose asChild>
            <Button variant="secondary">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
