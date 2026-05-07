// Supabase client – shared across all pages
const SUPABASE_URL = 'https://nfmiwivuskffywdczwni.supabase.co';
const SUPABASE_KEY = 'sb_publishable_YsrGi_s6S1QrC6EXLgevjQ_Egy2zKLw';

let sb;
function getSupabase() {
  if (!sb) sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  return sb;
}
