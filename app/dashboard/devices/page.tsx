import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Devices() {
  return (
    <div>
      <Header title="Devices">
        <Button>
          <PlusIcon className="mr-2 size-4" />
          New Device
        </Button>
      </Header>
    </div>
  );
}
