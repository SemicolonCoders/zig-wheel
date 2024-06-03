// Importing the createClient function from the Supabase client library
import { createClient } from "@supabase/supabase-js";

// Supabase URL
const supabase_URL = "https://moueghnqmpiecpsqelkl.supabase.co";

// Project API Key for authentication
const Project_Api_Key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vdWVnaG5xbXBpZWNwc3FlbGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyMjc2MTMsImV4cCI6MjAzMjgwMzYxM30.hYISfLPrVKR8LVSOSst1wwX78oNPdRENqcHRVKlbFL4";

// Create a Supabase client using the Supabase URL and Project API Key
export const supabaseClient = createClient(
    supabase_URL,
    Project_Api_Key
);
