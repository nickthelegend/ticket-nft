import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export async function getOrCreateUser(walletAddress: string) {
  try {
    // First, check if user exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("user_id")
      .eq("wallet_address", walletAddress)
      .single()

    if (existingUser) {
      return { user_id: existingUser.user_id, error: null }
    }

    // If user doesn't exist, create new user
    const { data: newUser, error } = await supabase
      .from("users")
      .insert([
        {
          wallet_address: walletAddress,
          created_at: new Date().toISOString(),
        },
      ])
      .select("user_id")
      .single()

    if (error) {
      throw error
    }

    return { user_id: newUser.user_id, error: null }
  } catch (error) {
    console.error("Error in getOrCreateUser:", error)
    return { user_id: null, error }
  }
}

