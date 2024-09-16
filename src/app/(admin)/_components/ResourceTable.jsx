'use client'

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import BookmarkTableRow from './BookmarkTableRow';
import WorkTableRow from './works/WorkTableRow';

const rowComponents = {
    'bookmark': BookmarkTableRow,
    'work': WorkTableRow,
    // Add more row components as needed
  };

const ResourceTable = ({ headers, data, rowType }) => {
    const RowComponent = rowComponents[rowType] || BookmarkTableRow;

    console.log('Headers:', headers);
    console.log('Data:', data);
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {headers.map((header, index) => {
                        return (
                            <TableHead
                                key={index}
                                className={
                                    index != 2 || index != 3
                                        ? 'capitalize hidden md:table-cell'
                                        : 'capitalize'
                                }>
                                {header}
                            </TableHead>
                        )
                    })}
                    <TableHead>
                        <span className="sr-only">Actions</span>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => {
                    return (
                        <TableRow key={index}>
                            <RowComponent item={item} />
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default ResourceTable
