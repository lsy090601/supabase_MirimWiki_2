import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xrgpkgmuzhvagsavhvxd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyZ3BrZ211emh2YWdzYXZodnhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3MTgyMTEsImV4cCI6MjA5MTI5NDIxMX0.-nicHSpK1zqOng-7PnXfYaGQOgufDW-til0p1H4M31s";
export const supabase = createClient(supabaseUrl, supabaseKey);
