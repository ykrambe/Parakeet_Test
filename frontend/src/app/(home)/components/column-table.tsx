"use client"

import { Button } from "@/components/ui/button"
// import { getUrlFile } from "@/lib/supabase"
import type { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import Link from "next/link"
import DeleteAirplane from "./delete-airplane"

export const columnTable = [
    // {
    //     accessorKey: "image",
    //     header: "Image",
    //     cell: ({row}) => {
    //         const plane = row.original

    //         return (
    //             // <Image src={getUrlFile(plane.image)} alt={plane.name} width={120} height={120} />
    //             <Image src={plane.image} alt={plane.name} width={120} height={120} />
    //         )
    //     }
    // },
    {
        accessorKey: "code",
        header: "Code",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    // {
    //     id: 'action',
    //     cell: ({row}) => {
    //         const plane = row.original
    //         return (
    //             <div className="inline-flex gap-5 items-center">
    //                 <Button variant={"secondary"} asChild>
    //                     <Link href={`/dashboard/airplanes/edit/${plane.id}`}>
    //                         <Pencil className="mr-2 h-4 w-4" />
    //                         Edit
    //                     </Link>
    //                 </Button>
    //                 <DeleteAirplane id={plane.id} />
    //             </div>
    //         )
    //     }
    // }
]