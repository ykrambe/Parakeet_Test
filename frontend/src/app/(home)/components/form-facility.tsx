"use client";

import { Autocomplete, Button, FormControl, InputLabel, OutlinedInput, styled, TextField, Typography } from '@mui/material';
import React, { FC, useState } from 'react';
import SubmitButtonForm from './submit-form-button';
import { CloudUploadIcon } from 'lucide-react';
import useFormStore from "@/store/formStore";

interface FormFacilityProps {
    type?: 'ADD' | 'EDIT';
    defaultValues?: {
        name: string;
        type: string;
        street_address: string;
        city: string;
        state: string;
        zip_code: string;
        phone_number: string;
    };
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const typeFacility = [
    "Manufacturing Plants",
    "Warehouses",
    "Distribution Centers",
    "Research and Development Centers",
    "Maintenance and Repair Facilities",
    "Logistics Hubs",
    "Quality Control Laboratories",
    "Refineries",
    "Energy Plants",
    "Water Treatment Plants",
    "Smelting and Refining Facilities",
    "Chemical Processing Plants",
    "Assembly Plants"
];

const FormFacility: FC<FormFacilityProps> = ({ type, defaultValues }) => {
    const { saveFacilityData, loading, error } = useFormStore();
    const [selectedType, setSelectedType] = useState(null);
    const [fileNames, setFileNames] = useState([]);
    const [formData, setFormData] = useState({
        name: defaultValues?.name,
        type: defaultValues?.type,
        street_address: defaultValues?.street_address,
        city: defaultValues?.city,
        state: defaultValues?.state,
        zip_code: defaultValues?.zip_code,
        phone_number: defaultValues?.phone_number,
    });

    const handleChange = (event:any, newValue:any) => {
        setSelectedType(newValue);
        setFormData((prev) => ({ ...prev, type: newValue }));
    };

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (event:any) => {
        const files:any = Array.from(event.target.files);
        setFileNames(files.map((file:any) => file.name));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        saveFacilityData({ ...formData, files: fileNames });
    };

    return (
        <form onSubmit={handleSubmit} className='w-[40%] space-y-4'>
            {error && (
                <div className="my-7 bg-red-500 p-4 rounded-lg text-white">
                    <div className="font-bold">Error</div>
                    <ul>
                        <li>{error}</li>
                    </ul>
                </div>
            )}
            <div>
                <FormControl fullWidth>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <OutlinedInput
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        label="Name"
                    />
                </FormControl>
            </div>

            <div>
                <Autocomplete
                    disablePortal
                    options={typeFacility}
                    onChange={handleChange}
                    value={formData.type}
                    renderInput={(params) => <TextField {...params} label="Type" name="type" />}
                />
            </div>

            <div className="space-y-2">
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload files
                    <VisuallyHiddenInput
                        type="file"
                        onChange={handleFileChange}
                        multiple
                    />
                </Button>
                {fileNames.length > 0 && (
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Uploaded Files: {fileNames.join(', ')}
                    </Typography>
                )}
            </div>
			
			<div>
                <FormControl fullWidth>
                    <InputLabel htmlFor="street_address">Street Address</InputLabel>
                    <OutlinedInput
                        id="street_address"
                        name="street_address"
                        value={formData.street_address}
                        onChange={handleInputChange}
                        label="Street Address"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl fullWidth>
                    <InputLabel htmlFor="city">City</InputLabel>
                    <OutlinedInput
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        label="City"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl fullWidth>
                    <InputLabel htmlFor="state">State</InputLabel>
                    <OutlinedInput
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        label="State"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl fullWidth>
                    <InputLabel htmlFor="zip_code">Zip Code</InputLabel>
                    <OutlinedInput
                        id="zip_code"
                        name="zip_code"
                        value={formData.zip_code}
                        onChange={handleInputChange}
                        label="Zip Code"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl fullWidth>
                    <InputLabel htmlFor="phone_number">Phone Number</InputLabel>
                    <OutlinedInput
                        id="phone_number"
                        name="phone_number"
                        value={formData.phone_number}
                        onChange={handleInputChange}
                        label="Phone Number"
                    />
                </FormControl>
            </div>

            {/* <SubmitButtonForm isLoading={loading} /> */}
            <SubmitButtonForm />
        </form>
    );
};

export default FormFacility;
