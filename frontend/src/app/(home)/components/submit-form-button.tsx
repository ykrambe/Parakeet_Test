
import { Button } from "@mui/material"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useFormStatus } from "react-dom"

export default function SubmitButtonForm() {
	const { pending } =  useFormStatus()
	return (
		<Button disabled={pending} className='w-full' type='submit' variant="contained">
			{ pending ? (
				<>
					<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
					Loading...
				</>
			) : (
				'Submit'
			)}
		</Button>
	)
}