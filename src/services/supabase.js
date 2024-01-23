/* eslint-disable*/

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ncqqephvtafzlsflxlbn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcXFlcGh2dGFmemxzZmx4bGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyODY0OTUsImV4cCI6MjAxNzg2MjQ5NX0.1wN_taqxrHRa0Cc8DTvbunN7jxvBcJibBrlphjfvQKw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
