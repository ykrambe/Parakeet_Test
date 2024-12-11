// store/formStore.js
import { create } from 'zustand';
import axios from "../lib/axios";

const useFormStore = create((set) => ({
    facilities: [],
    facility: {},
    loading: false,
    error: null,
    saveFacilityData: async (data) => {
        console.log("data", data)
        set({ loading: true, error: null });
        try {
            const response = await axios.post('/facilities', data);
            console.log('Data saved successfully:', response.data);
            set((state) => ({ facility: response.data.data }));
        } catch (error) {
            console.error('Error saving data:', error);
            set({ error: error.response?.data?.message || 'Failed to save data' });
        } finally {
            set({ loading: false });
        }
    },
    getFacilities: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get('/facilities');
            console.log('Data fetched successfully:', response.data);
            set(({ facilities: response.data.data }));
        } catch (error) {
            console.error('Error fetching data:', error);
            set({ error: error.response?.data?.message || 'Failed to fetch data' });
        } finally {
            set({ loading: false });
        }
    },
    getFacilityById: async (id) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(`/facilities/${id}`);
            console.log('Data fetched successfully by ID:', response.data);
            set(({ facility: response.data.data[0] }));
        } catch (error) {
            console.error('Error fetching data by ID:', error);
            set({ error: error.response?.data?.message || 'Failed to fetch data' });
        } finally {
            set({ loading: false });
        }
    },
    updateFacilityData: async (id, updatedData) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.put(`/facilities/${id}`, updatedData);
            console.log('Data updated successfully:', response.data);
            set((state) => ({
                facilities: state.facilities.map((facility) =>
                    facility.id === id ? { ...facility, ...updatedData } : facility
                ),
            }));
        } catch (error) {
            console.error('Error updating data:', error);
            set({ error: error.response?.data?.message || 'Failed to update data' });
        } finally {
            set({ loading: false });
        }
    },
    deleteFacilityData: async (id) => {
        set({ loading: true, error: null });
        try {
            await axios.delete(`/facilities/${id}`);
            console.log('Data deleted successfully');
            set((state) => ({
                facilities: state.facilities.filter((facility) => facility.id !== id),
            }));
        } catch (error) {
            console.error('Error deleting data:', error);
            set({ error: error.response?.data?.message || 'Failed to delete data' });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useFormStore;
