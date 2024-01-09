import * as React from 'react'
import {  DownloadIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table"
import { ChevronDownIcon} from '@radix-ui/react-icons'


  type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
    date: string
    tamt: number
  }

  export const data: Payment[] = [
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: 1278.23,
      tamt : 22,
      status: "success",
      email: "ken99@yahoo.com",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: 1278.23,
      tamt : 22,
      status: "success",
      email: "Abe45@gmail.com",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: 1278.23,
      tamt : 22,
      status: "processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: 1278.23,
      tamt : 22,
      status: "success",
      email: "Silas22@gmail.com",
    },
    {
      id: "#281209",
      date: "7 July, 2023",
      amount: 1278.23,
      tamt : 22,
      status: "failed",
      email: "carmella@hotmail.com",
    },
    {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "success",
        email: "ken99@yahoo.com",
      },
      {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "success",
        email: "Abe45@gmail.com",
      },
      {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "processing",
        email: "Monserrat44@gmail.com",
      },
      {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "success",
        email: "Silas22@gmail.com",
      },
      {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "failed",
        email: "carmella@hotmail.com",
      },
      {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "success",
        email: "ken99@yahoo.com",
      },
      {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "success",
        email: "Abe45@gmail.com",
      },
      {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "processing",
        email: "Monserrat44@gmail.com",
      },
      {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "success",
        email: "Silas22@gmail.com",
      },
      {
        id: "#281209",
        date: "7 July, 2023",
        amount: 1278.23,
        tamt : 22,
        status: "failed",
        email: "carmella@hotmail.com",
      },

  ]
  

  const columns: ColumnDef<Payment>[] = [
        
    {
      accessorKey: "id",
      header: "Order ID",
      cell: ({ row }) => (
        <div className="capitalize text-[#146eb4]">{row.getValue("id")}</div>
      ),
    },
    {
        accessorKey: "date",
        header: "Order date",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("date")}</div>
        ),
    },
    {
      accessorKey: "amount",
      header: () => <div className="text-right">Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
   
        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        }).format(amount)
   
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
        accessorKey: "tamt",
        header: () => <div className="text-right">Transaction fees</div>,
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("tamt"))
     
          // Format the amount as a dollar amount
          const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "INR",
          }).format(amount)
     
          return <div className="text-right font-medium">{formatted}</div>
        },
      },
  ]
   

const TableContent = () => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    )
    const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
   
    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    })
       
    return(
        <div className="flex items-center py-4 flex-col w-full bg-white p-4 rounded-lg">
        <div className='flex justify-around w-full mb-3 gap-2'>
        <div className=''>
        <Input
          placeholder="Search by order ID"
          className="max-w-sm"
        />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto text-lg">
              Sort <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          
        </DropdownMenu>
        <Button variant={"outline"}>
            <DownloadIcon />
        </Button>
        </div>
        <div className="w-full py-3 border">
        <Table className='border-white'>
          <TableHeader className='bg-[#e5e7eb]'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
    )
}

export default TableContent