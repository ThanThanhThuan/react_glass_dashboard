// src/services/api.js

const TABLE_NAME = import.meta.env.VITE_TABLE_NAME;
const INSTANCE_ID = import.meta.env.VITE_INSTANCE_ID;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
const BASE_URL = 'https://api.nocodebackend.com';

const headers = {
    'accept': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json'
};

export const billingService = {
    /**
     * Fetch all billing records
     */
    getAll: async () => {
        const url = `${BASE_URL}/read/${TABLE_NAME}?Instance=${INSTANCE_ID}&sub_table=billing`;
        try {
            const response = await fetch(url, { method: 'GET', headers });
            if (!response.ok) throw new Error('Failed to fetch records');
            const data = await response.json();
            return Array.isArray(data) ? data : (data.data || []);
        } catch (error) {
            console.error("API Error (getAll):", error);
            return [];
        }
    },

    /**
     * Create a new billing record
     * @param {Object} payload { sub_table, date, desc, amount, status }
     */
    create: async (payload) => {
        const url = `${BASE_URL}/create/${TABLE_NAME}?Instance=${INSTANCE_ID}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Failed to create');
            return data;
        } catch (error) {
            console.error("API Error (create):", error);
            throw error;
        }
    },

    /**
     * Update an existing record
     * @param {String|Number} id 
     * @param {Object} payload 
     */
    update: async (id, payload) => {
        const url = `${BASE_URL}/update/${TABLE_NAME}/${id}?Instance=${INSTANCE_ID}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers,
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || 'Failed to update');
            return data;
        } catch (error) {
            console.error("API Error (update):", error);
            throw error;
        }
    },

    /**
     * Delete a record
     * @param {String|Number} id 
     */
    delete: async (id) => {
        const url = `${BASE_URL}/delete/${TABLE_NAME}/${id}?Instance=${INSTANCE_ID}`;
        try {
            const response = await fetch(url, { method: 'DELETE', headers });
            if (!response.ok) throw new Error('Failed to delete');
            return true;
        } catch (error) {
            console.error("API Error (delete):", error);
            throw error;
        }
    }
};