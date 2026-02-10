// src/services/mockData.jsx
import React from 'react';

// --- DASHBOARD DATA ---

export const dashboardStats = [
    {
        id: 1,
        label: "Total Revenue",
        value: "$84,254",
        change: "+12.5%",
        changeType: "positive", // positive or negative
        iconColor: "cyan", // cyan, magenta, purple, success
        icon: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>
    },
    {
        id: 2,
        label: "Active Users",
        value: "24,521",
        change: "+8.2%",
        changeType: "positive",
        iconColor: "magenta",
        icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>
    },
    {
        id: 3,
        label: "Total Orders",
        value: "8,461",
        change: "-3.1%",
        changeType: "negative",
        iconColor: "purple",
        icon: <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>
    },
    {
        id: 4,
        label: "Conversion Rate",
        value: "3.24%",
        change: "+2.4%",
        changeType: "positive",
        iconColor: "success",
        icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    }
];

export const revenueChartData = [
    { label: 'Jan', height: '120px', color: 'bar-emerald' },
    { label: 'Feb', height: '160px', color: 'bar-gold' },
    { label: 'Mar', height: '90px', color: 'bar-coral' },
    { label: 'Apr', height: '140px', color: 'bar-teal' },
    { label: 'May', height: '180px', color: 'bar-amber' },
    { label: 'Jun', height: '130px', color: 'bar-emerald' },
    { label: 'Jul', height: '170px', color: 'bar-gold' },
    { label: 'Aug', height: '150px', color: 'bar-coral' },
    { label: 'Sep', height: '190px', color: 'bar-teal' },
    { label: 'Oct', height: '140px', color: 'bar-amber' },
    { label: 'Nov', height: '175px', color: 'bar-emerald' },
    { label: 'Dec', height: '200px', color: 'bar-gold' },
];

export const recentActivity = [
    { id: 1, name: "John Doe", action: "purchased Premium Plan", time: "2 minutes ago", avatar: "JD", color: ["var(--emerald-light)", "var(--emerald)"] },
    { id: 2, name: "Anna Smith", action: "submitted a support ticket", time: "15 minutes ago", avatar: "AS", color: ["var(--gold)", "var(--amber)"] },
    { id: 3, name: "Mike Johnson", action: "upgraded subscription", time: "1 hour ago", avatar: "MJ", color: ["var(--coral)", "var(--gold)"] },
    { id: 4, name: "Emily White", action: "completed onboarding", time: "2 hours ago", avatar: "EW", color: ["var(--success)", "var(--emerald)"] },
    { id: 5, name: "Robert Brown", action: "requested refund", time: "3 hours ago", avatar: "RB", color: ["var(--warning)", "var(--gold)"] },
];

export const recentTransactions = [
    { id: 1, customer: "John Doe", email: "john@example.com", product: "Premium Plan", date: "Jan 15, 2025", status: "Completed", amount: "$299.00", avatar: "JD", color: ["var(--emerald-light)", "var(--emerald)"], statusClass: "completed" },
    { id: 2, customer: "Anna Smith", email: "anna@example.com", product: "Enterprise License", date: "Jan 14, 2025", status: "Processing", amount: "$1,499.00", avatar: "AS", color: ["var(--gold)", "var(--amber)"], statusClass: "processing" },
    { id: 3, customer: "Mike Johnson", email: "mike@example.com", product: "Team Bundle", date: "Jan 13, 2025", status: "Completed", amount: "$599.00", avatar: "MJ", color: ["var(--success)", "var(--emerald)"], statusClass: "completed" },
    { id: 4, customer: "Emily White", email: "emily@example.com", product: "Starter Plan", date: "Jan 12, 2025", status: "Pending", amount: "$49.00", avatar: "EW", color: ["var(--coral)", "var(--gold)"], statusClass: "pending" },
    { id: 5, customer: "Robert Brown", email: "robert@example.com", product: "Pro Annual", date: "Jan 11, 2025", status: "Completed", amount: "$199.00", avatar: "RB", color: ["var(--emerald)", "var(--gold)"], statusClass: "completed" },
];

export const projectProgress = [
    { label: "UI Design", value: "85%", color: "cyan" },
    { label: "Backend API", value: "62%", color: "magenta" },
    { label: "Testing", value: "45%", color: "purple" },
    { label: "Documentation", value: "28%", color: "cyan" },
];

// --- USERS DATA ---

export const userStats = [
    {
        id: 1,
        label: "Total Users",
        value: "24,521",
        change: "+8.2%",
        changeType: "positive",
        iconColor: "cyan",
        icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>
    },
    {
        id: 2,
        label: "Active Now",
        value: "1,234",
        change: "+12.5%",
        changeType: "positive",
        iconColor: "magenta",
        icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>
    },
    {
        id: 3,
        label: "New Today",
        value: "156",
        change: "-3.1%",
        changeType: "negative",
        iconColor: "purple",
        icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></>
    },
    {
        id: 4,
        label: "Premium Users",
        value: "4,892",
        change: "+18.7%",
        changeType: "positive",
        iconColor: "success",
        icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    },
];

export const usersList = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Administrator", status: "Active", joined: "Jan 15, 2024", lastActive: "2 mins ago", avatar: "JD", color: ["var(--emerald-light)", "var(--emerald)"], statusClass: "completed" },
    { id: 2, name: "Anna Smith", email: "anna@example.com", role: "Editor", status: "Active", joined: "Feb 22, 2024", lastActive: "15 mins ago", avatar: "AS", color: ["var(--gold)", "var(--amber)"], statusClass: "completed" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "User", status: "Away", joined: "Mar 10, 2024", lastActive: "2 hours ago", avatar: "MJ", color: ["var(--success)", "var(--emerald)"], statusClass: "pending" },
    { id: 4, name: "Emily White", email: "emily@example.com", role: "Moderator", status: "Active", joined: "Apr 5, 2024", lastActive: "30 mins ago", avatar: "EW", color: ["var(--coral)", "var(--gold)"], statusClass: "completed" },
    { id: 5, name: "Robert Brown", email: "robert@example.com", role: "User", status: "Offline", joined: "May 18, 2024", lastActive: "3 days ago", avatar: "RB", color: ["var(--emerald)", "var(--gold)"], statusClass: "processing" },
    { id: 6, name: "Sarah Lee", email: "sarah@example.com", role: "Editor", status: "Active", joined: "Jun 8, 2024", lastActive: "5 mins ago", avatar: "SL", color: ["var(--warning)", "var(--gold)"], statusClass: "completed" },
    { id: 7, name: "David Kim", email: "david@example.com", role: "User", status: "Active", joined: "Jul 22, 2024", lastActive: "1 hour ago", avatar: "DK", color: ["var(--info)", "var(--emerald)"], statusClass: "completed" },
    { id: 8, name: "Lisa Martinez", email: "lisa@example.com", role: "Moderator", status: "Away", joined: "Aug 14, 2024", lastActive: "4 hours ago", avatar: "LM", color: ["var(--danger)", "var(--coral)"], statusClass: "pending" },
];

// --- ANALYTICS DATA ---

export const analyticsStats = [
    {
        id: 1,
        label: "Page Views",
        value: "1,284,521",
        change: "+24.5%",
        changeType: "positive",
        iconColor: "cyan",
        icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>
    },
    {
        id: 2,
        label: "Unique Visitors",
        value: "452,892",
        change: "+18.3%",
        changeType: "positive",
        iconColor: "magenta",
        icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>
    },
    {
        id: 3,
        label: "Bounce Rate",
        value: "32.8%",
        change: "+5.2%",
        changeType: "negative",
        iconColor: "purple",
        icon: <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></>
    },
    {
        id: 4,
        label: "Avg. Session",
        value: "4:32",
        change: "+12.1%",
        changeType: "positive",
        iconColor: "success",
        icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>
    }
];

export const trafficChartData = [
    { label: '1', height: '80px', color: 'bar-emerald' },
    { label: '2', height: '95px', color: 'bar-emerald' },
    { label: '3', height: '70px', color: 'bar-emerald' },
    { label: '4', height: '110px', color: 'bar-emerald' },
    { label: '5', height: '130px', color: 'bar-emerald' },
    { label: '6', height: '145px', color: 'bar-gold' },
    { label: '7', height: '120px', color: 'bar-gold' },
    { label: '8', height: '100px', color: 'bar-gold' },
    { label: '9', height: '135px', color: 'bar-gold' },
    { label: '10', height: '155px', color: 'bar-gold' },
    { label: '11', height: '140px', color: 'bar-coral' },
    { label: '12', height: '125px', color: 'bar-coral' },
    { label: '13', height: '160px', color: 'bar-coral' },
    { label: '14', height: '175px', color: 'bar-coral' },
    { label: '15', height: '150px', color: 'bar-coral' },
    { label: '16', height: '165px', color: 'bar-teal' },
    { label: '17', height: '145px', color: 'bar-teal' },
    { label: '18', height: '130px', color: 'bar-teal' },
    { label: '19', height: '155px', color: 'bar-teal' },
    { label: '20', height: '180px', color: 'bar-teal' },
    { label: '21', height: '170px', color: 'bar-amber' },
    { label: '22', height: '160px', color: 'bar-amber' },
    { label: '23', height: '185px', color: 'bar-amber' },
    { label: '24', height: '175px', color: 'bar-amber' },
    { label: '25', height: '165px', color: 'bar-amber' },
    { label: '26', height: '190px', color: 'bar-emerald' },
    { label: '27', height: '175px', color: 'bar-emerald' },
    { label: '28', height: '195px', color: 'bar-emerald' },
    { label: '29', height: '185px', color: 'bar-emerald' },
    { label: '30', height: '200px', color: 'bar-emerald' },
];

export const topPages = [
    { id: 1, path: "/dashboard", views: "45,234 views", rank: 1, color: ["var(--emerald-light)", "var(--emerald)"] },
    { id: 2, path: "/products", views: "32,891 views", rank: 2, color: ["var(--gold)", "var(--amber)"] },
    { id: 3, path: "/pricing", views: "28,456 views", rank: 3, color: ["var(--coral)", "var(--gold)"] },
    { id: 4, path: "/about", views: "19,234 views", rank: 4, color: ["var(--success)", "var(--emerald)"] },
    { id: 5, path: "/contact", views: "12,567 views", rank: 5, color: ["var(--warning)", "var(--gold)"] },
];

export const browserStats = [
    { label: "Chrome", value: "64%", color: "cyan" },
    { label: "Safari", value: "22%", color: "magenta" },
    { label: "Firefox", value: "8%", color: "purple" },
    { label: "Edge", value: "6%", color: "cyan" },
];

export const countryStats = [
    { label: "🇺🇸 United States", value: "38%", color: "cyan" },
    { label: "🇬🇧 United Kingdom", value: "18%", color: "magenta" },
    { label: "🇩🇪 Germany", value: "12%", color: "purple" },
    { label: "🇨🇦 Canada", value: "9%", color: "cyan" },
];

// --- SETTINGS DATA ---


// --- EXISTING STATIC BILLING DATA ---
export const billingHistory = [
    {
        id: 'mock-1',
        date: "Jan 1, 2025",
        rawDate: new Date("2025-01-01"), // Added for sorting
        description: "Pro Plan - Monthly",
        amount: "$29.00",
        status: "Paid",
        statusClass: "completed"
    },
    {
        id: 'mock-2',
        date: "Dec 1, 2024",
        rawDate: new Date("2024-12-01"), // Added for sorting
        description: "Pro Plan - Monthly",
        amount: "$29.00",
        status: "Paid",
        statusClass: "completed"
    },
    {
        id: 'mock-3',
        date: "Nov 1, 2024",
        rawDate: new Date("2024-11-01"), // Added for sorting
        description: "Pro Plan - Monthly",
        amount: "$29.00",
        status: "Paid",
        statusClass: "completed"
    },
];

