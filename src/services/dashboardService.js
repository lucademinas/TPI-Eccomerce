
import { API_BASE_URL } from "../api";

export const fetchDashboardSummary = async () => {
    try {
        const token = localStorage.getItem("Ecommerce-token");
        const response = await fetch(`${API_BASE_URL}/Dashboard/Summary`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error fetching dashboard summary");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching dashboard summary:", error);
        return null;
    }
};

export const fetchSalesData = async () => {
    try {
        const token = localStorage.getItem("Ecommerce-token");
        const response = await fetch(`${API_BASE_URL}/Dashboard/SalesData`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error fetching sales data");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching sales data:", error);
        return null;
    }
};

export const fetchBestSellers = async () => {
    try {
        const token = localStorage.getItem("Ecommerce-token");
        const response = await fetch(`${API_BASE_URL}/Dashboard/BestSellers`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error fetching best sellers");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching best sellers:", error);
        return null;
    }
};

export const fetchRecentPurchases = async () => {
    try {
        const token = localStorage.getItem("Ecommerce-token");
        const response = await fetch(`${API_BASE_URL}/Dashboard/RecentPurchases`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error fetching recent purchases");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching recent purchases:", error);
        return null;
    }
};