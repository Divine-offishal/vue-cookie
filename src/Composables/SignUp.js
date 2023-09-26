import { supabase } from '../Supabase'

export const useSignUp = () => {

  const signUp = async (email, password) => {
    try {
      
        const { error, data } = await supabase.auth.signUp({
          email: email,
          password: password
        })
      
        if (error) throw error
      }
    catch (error) {
      console.log(error)
    } 
  }

  return { signUp }
}