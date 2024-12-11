import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react'
import React, { type FC } from 'react'
import { useFormStatus } from 'react-dom'
import { deleteAirplane } from '../lib/actions'

interface DeleteAirplaneProps {
    id: string
}

function SubmitButton() {

    const {pending} = useFormStatus()
    return (
        <Button disabled={pending} type="submit" variant="destructive" size='sm'>
            <Trash className='mr-2 h-4 w-4'/>
            Delete
        </Button>
    )
}

const DeleteAirplane: FC<DeleteAirplaneProps> = ({id}) => {
    const deleteAipPlaneWithId = deleteAirplane.bind(null, id)

    return (
        <form action={deleteAipPlaneWithId}>
            <SubmitButton />
        </form>
    )
}

export default DeleteAirplane