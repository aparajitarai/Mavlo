import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Task } from "@/lib/schemas";

export function TaskDetailDrawer({
  task,
  isOpen,
  onClose,
}: {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!task) {
    return null;
  }

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{task.title}</DrawerTitle>
          <DrawerDescription>{task.description}</DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="subtasks">Subtasks</TabsTrigger>
              <TabsTrigger value="attachments">Attachments</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              {/* Details content */}
            </TabsContent>
            <TabsContent value="subtasks">
              {/* Subtasks content */}
            </TabsContent>
            <TabsContent value="attachments">
              {/* Attachments content */}
            </TabsContent>
            <TabsContent value="comments">
              {/* Comments content */}
            </TabsContent>
            <TabsContent value="activity">
              {/* Activity content */}
            </TabsContent>
          </Tabs>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
