import { supabase } from '../supabaseClient'

export async function signUp(email, password, name, birth) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        birth
      }
    }
  });
  return { data, error };
}

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};
