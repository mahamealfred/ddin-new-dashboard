// Single source of truth for the backend API base URLs.
// Set these in .env — every page should import from here instead of
// reading import.meta.env directly or hardcoding a URL.

// newmomo-collection-service / disbursement-service (moola.ddin.rw in production)
export const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL).replace(/\/+$/, '');

// Kept as a function for drop-in compatibility with existing `${API()}` call sites.
export const API = () => API_BASE_URL;

// Core banking API (app.ddin.rw in production) — a separate backend from the
// newmomo services above, used for account balance / transaction log lookups.
export const CORE_API_BASE_URL = (import.meta.env.VITE_CORE_API_BASE_URL ).replace(/\/+$/, '');
