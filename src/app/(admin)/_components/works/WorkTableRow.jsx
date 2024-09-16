import MarkdownComponent from "@/components/custom/MarkdownComponent";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TableCell } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import DeleteWorkAlert from "./DeleteWorkAlert";
import EditWorkDialog from "./EditWorkDialog";

const WorkTableRow = ({ item }) => {
  return (
    <>
        <TableCell className="font-medium">{item?.name}</TableCell>
        <TableCell className="font-medium">{item?.description}</TableCell>
        <TableCell className="font-medium">{item?.github_url}</TableCell>
        <TableCell className="font-medium">{item?.live_url}</TableCell>
        <TableCell>
            <MarkdownComponent className="font-medium">{item?.case_study}</MarkdownComponent>
        </TableCell>
        <TableCell className="font-medium">{item?.tech_stack}</TableCell>
        <TableCell>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">
                            Toggle menu
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="end"
                    className="bg-white dark:bg-black rounded-xl">
                    <DropdownMenuLabel className="w-full">
                        Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <EditWorkDialog work={item} />
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <DeleteWorkAlert work={item} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </TableCell>
    </>
  );
};

export default WorkTableRow;
