import { Button } from '@mui/material'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import TableFacility from './components/tableFacility';


export default async function Home() {
    return (
        <>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">
                    Facility
                </div>

                <Button
                    variant="contained"
                    className="mb-2"
                    startIcon={<Plus className='mr-2 w-4 h-4' />}
                    component={Link}
                    href="/create"
                >
                    Add Data
                </Button>
            </div>     

            <TableFacility/>       
        
            
        </>
    );
}
