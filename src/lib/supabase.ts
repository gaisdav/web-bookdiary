import { createClient } from '@supabase/supabase-js';
import { browser } from '$app/environment';

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = browser && SUPABASE_URL && SUPABASE_ANON_KEY
	? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
	: (null as any);

