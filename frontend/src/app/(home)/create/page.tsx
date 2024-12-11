import React from 'react'
import FormFacility from '../components/form-facility'

const CreateAirplanePage = () => {
    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <div className="my-5 text-2xl font-bold">
                    Create Data Facility
                </div>
            </div>
            <FormFacility type='ADD' />
        </div>
    )
}

export default CreateAirplanePage
