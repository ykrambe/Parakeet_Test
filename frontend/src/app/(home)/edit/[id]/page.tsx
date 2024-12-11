"use client";

import React, { FC, useEffect, useState } from "react";
import FormEditFacility from "../../components/form-edit-facility";
import useFormStore from "@/store/formStore";

type Params = {
  id: string;
};

interface EditFacilitiesProps {
  params: Params;
}

const EditFacilities: FC<EditFacilitiesProps> = ({ params }) => {
  const { facility, getFacilityById } = useFormStore((state) => state);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      setIsLoading(true); // Set loading state
      getFacilityById(params.id).finally(() => {
        setIsLoading(false); // Clear loading state after data is fetched
      });
    }
  }, [params.id, getFacilityById]);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Edit Data Facility</div>
      </div>
      {facility ? (
        <FormEditFacility type="EDIT" defaultValues={facility} />
      ) : (
        <div className="text-red-500">Data not found. Please try again.</div>
      )}
    </div>
  );
};

export default EditFacilities;
