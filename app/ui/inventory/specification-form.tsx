import { FormField, FormItem, FormLabel, FormControl } from "@/app/ui/form";
import { Input } from "@/app/ui/input";

export default function Specification() {
  return (
    <div className="py-16">
      <h3 className="mb-8">Specification</h3>
      <div className="grid grid-cols-2 gap-8">
        <FormField
          name="processor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Processor</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="memory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Memory</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="storage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Storage</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="display"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
