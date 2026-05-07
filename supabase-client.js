// Supabase client – shared across all pages
const SUPABASE_URL = 'https://nfmiwivuskffywdczwni.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mbWl3aXZ1c2tmZnl3ZGN6d25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNjQwMTgsImV4cCI6MjA5Mzc0MDAxOH0.eBdmJ6IH7T8GaXUS2b9SGyq-EYPFEU98W8uv1Y7yd9k';

let sb;
function getSupabase() {
  if (!sb) sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  return sb;
}
