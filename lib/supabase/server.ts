import { createClient as createSupabaseClient } from '@supabase/supabase-js';

import { getSupabaseEnv } from '@/lib/supabase/env';

export function createClient() {
  const { supabaseUrl, supabaseAnonKey } = getSupabaseEnv();

  return createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });
}
