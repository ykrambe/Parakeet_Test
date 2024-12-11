"use client"

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { log } from "console";

interface ActionResult {
    errorTitle: string | null;
    errorDesc: string[] | null
}

export async function getFacilitysById(id: string) {
    try {
        return []
    } catch (error) {
        return null
    }
}

export async function saveFacility(prevState: any, formData: FormData): Promise<ActionResult> {
    console.log(prevState)
    console.log(formData)
    // const values = facilityFromSchema.safeParse({
    //     name: formData.get("name"),
    //     code: formData.get("code"),
    //     image: formData.get("image")
    // })
    

    // if (!values.success) {
    //     const errorDesc = values.error.issues.map((issue) => issue.message)
        
    //     return {
    //         errorTitle: 'Error Validation',
    //         errorDesc
    //     }
    // }

    // const uploadedFile = await uploadFile(values.data.image)

    // if (uploadedFile instanceof Error) {
    //     return {
    //         errorTitle: 'Failed to upload file',
    //         errorDesc: ['Connection error happend, please try again.']
    //     }
    // }

    try {
        // const data = await prisma.airPlane.create({
        //     data: {
        //         name: values.data.name,
        //         code: values.data.code,
        //         image: uploadedFile as string
        //     }
        // })
        console.log("save facility");
        
    } catch (error) {
        return {
            errorTitle: 'Failed to save data',
            errorDesc: ['Connection error happend, please try again.']
        }
    }

    revalidatePath("/dashboard/facilitys")
    redirect("/dashboard/facilitys")
}

export async function updateFacility(
    prevState: unknown,
    id: string,
    formData: FormData
): Promise<ActionResult> {
    // const image = formData.get("image") as File
    // let facilityFromSchemaUpdate

    // if (image.size === 0) {
    //     facilityFromSchemaUpdate = facilityFromSchema.omit({
    //         image: true
    //     })
    // }else {
    //     facilityFromSchemaUpdate = facilityFromSchema
    // }

    // const values = facilityFromSchemaUpdate.safeParse({
    //     name: formData.get("name"),
    //     code: formData.get("code"),
    //     image: formData.get("image")
    // })
    

    // if (!values.success) {
    //     const errorDesc = values.error.issues.map((issue) => issue.message)
    //     return {
    //         errorTitle: 'Error Validation',
    //         errorDesc
    //     }
    // }

    // let filename: unknown

    // if (image.size > 0) {
    //     const uploadedFile = await uploadFile(image)
    //     if (uploadedFile instanceof Error) {
    //         return {
    //             errorTitle: 'Failed to upload file',
    //             errorDesc: ['Connection error happend, please try again.']
    //         }            
    //     }

    //     filename = uploadedFile as string
    // }else {
    //     const facility = await prisma.airPlane.findFirst({
    //         where: {
    //             id: id
    //         },
    //         select: {
    //             image: true
    //         }
    //     })

    //     filename = facility?.image
    // }

    try {
        console.log("update facility")
    } catch (error) {
        return {
            errorTitle: 'Failed to update data',
            errorDesc: ['Connection error happend, please try again.']
        }
    }

    revalidatePath("/")
    redirect("/")
}

export async function deleteFacility(id:string): Promise<ActionResult | undefined> {
    try {
        console.log("delete facility");
        
    } catch (error) {
        return {
            errorTitle: 'Failed to delete data',
            errorDesc: ['Connection error happend, please try again.']
        }
    }

    revalidatePath("/")
}

