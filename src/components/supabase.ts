// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = "https://cjjtsibfrixnwflvemqc.supabase.co"
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqanRzaWJmcml4bndmbHZlbXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMDIzMTQsImV4cCI6MjA0NzU3ODMxNH0._ozFs4cpKY3wFemGA0se0PQ2aRL-jWxhzjCvVpryTCM"

// export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
//   auth: {
//     storage: AsyncStorage,
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: false,
//   },
// })
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rhylzcgqnjhkgzzjjlon.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoeWx6Y2dxbmpoa2d6empqbG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMDU4MDcsImV4cCI6MjA0NzU4MTgwN30.DShocEsGredjIgFIDSEGayls8fJnVq90phFhp9yMAws"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})