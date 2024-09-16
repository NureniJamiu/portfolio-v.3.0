import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { TableCell } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import DeleteResumeAlert from "./DeleteResumeAlert";
import EditResumeDialog from "./EditResumeDialog";

const ResumeTableRow = ({ item }) => {
  return (
    <>
        <TableCell className="font-medium">{item?.company_name}</TableCell>
        <TableCell className="font-medium">{item?.position}</TableCell>
        <TableCell className="font-medium">{item?.description}</TableCell>
        <TableCell className="font-medium">{item?.start_year}</TableCell>
        <TableCell className="font-medium">{item?.end_year}</TableCell>
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
                        <EditResumeDialog resume={item} />
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <DeleteResumeAlert resume={item} />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </TableCell>
    </>
  );
};

export default ResumeTableRow;
