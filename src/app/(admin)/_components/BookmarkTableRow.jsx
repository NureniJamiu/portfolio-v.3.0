import MarkdownComponent from "@/components/custom/MarkdownComponent";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TableCell } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import DeleteBookmarkAlert from "./DeleteBookmarkAlert";
import EditBookmarkDialog from "./EditBookmarkDialog";

const BookmarkTableRow = ({ item }) => {
  return (
    <>
        <TableCell className="font-medium">{item?.title}</TableCell>
        <TableCell>
            <MarkdownComponent className="font-medium">{item?.body}</MarkdownComponent>
        </TableCell>
        <TableCell className="font-medium">{item?.url}</TableCell>
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
                    <DropdownMenuLabel className="text-center w-full">
                        Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <EditBookmarkDialog bookmark={item} />
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <DeleteBookmarkAlert bookmark={item} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </TableCell>
    </>
  );
};

export default BookmarkTableRow;
