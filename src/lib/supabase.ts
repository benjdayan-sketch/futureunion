import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wvmdxjnplhtnxmqthkuj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2bWR4am5wbGh0bnhtcXRoa3VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyNjc2ODcsImV4cCI6MjA4NTg0MzY4N30.Idvtnvs87An06FfYvzMRRtEisenD9IoVjXqDDzEMACQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
