import { supabase } from '../Supabase'

export const useLogin = () => {

  const logIn = async (email, password) => {
    try {
      
        const { error, data } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
        })

        document.cookie = `access_token=${data.session.access_token}; expires=Tue, 18 Jan 2024 00:00:00`
        // When there is error
        if (error) throw error
      }
    catch (error) {
      console.log(error)
    } 
  }

  return { logIn }
}