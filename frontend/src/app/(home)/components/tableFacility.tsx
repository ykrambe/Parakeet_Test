"use client"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import useFormStore from '../../../store/formStore'; // Assuming the store is located in this path

const TableFacility = () => {
  const { facilities, getFacilities, deleteFacilityData, loading, error } = useFormStore((state) => state);

  // Fetch the facilities data when the component mounts
  useEffect(() => {
    getFacilities();
  }, [getFacilities]);

  const handleDelete = (id:any) => {
    if (confirm("Are you sure you want to delete this facility?")) {
      deleteFacilityData(id);
    }
  };

  const handleEdit = (id:any) => {
    // Handle edit logic here (e.g., navigate to an edit page or open a modal)
    console.log(`Edit facility with ID: ${id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(facilities);

  // Ensure that facilities is an array before calling map
  if (!Array.isArray(facilities)) {
    return <div>Facilities data is not available or in an unexpected format.</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Street Address</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zip Code</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Images URL</TableCell>
            <TableCell align="center">Action</TableCell> {/* Action column */}
          </TableRow>
        </TableHead>
        <TableBody>
          {facilities.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} align="center">
                No facilities found
              </TableCell>
            </TableRow>
          ) : (
            facilities.map((facility) => (
              <TableRow key={facility.id}>
                <TableCell align="right">{facility.name}</TableCell>
                <TableCell align="right">{facility.street_address}</TableCell>
                <TableCell align="right">{facility.city}</TableCell>
                <TableCell align="right">{facility.state}</TableCell>
                <TableCell align="right">{facility.zip_code}</TableCell>
                <TableCell align="right">{facility.phone_number}</TableCell>
                <TableCell align="right">{facility.images_url || 'N/A'}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    href={`/edit/${facility.id}`}
                    style={{ marginRight: '8px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(facility.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableFacility;
