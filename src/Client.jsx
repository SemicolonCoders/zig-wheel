
import { createClient } from "@supabase/supabase-js";

const supabase_URL = "https://moueghnqmpiecpsqelkl.supabase.co";

const Project_Api_Key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vdWVnaG5xbXBpZWNwc3FlbGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyMjc2MTMsImV4cCI6MjAzMjgwMzYxM30.hYISfLPrVKR8LVSOSst1wwX78oNPdRENqcHRVKlbFL4";


export const supabaseClient = createClient(
    supabase_URL,
    Project_Api_Key
  );