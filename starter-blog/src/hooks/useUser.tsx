import { useEffect, useState } from 'react'

interface User {
  name: string
  email: string
}

const initialState: User = {
  name: '',
  email: ''
}

const getUser = (): Promise<User> =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ name: 'datdo', email: 'datdo@gmail.com', age: 20 } as User), 1000)
  })

function useUser() {
  const [user, setUser] = useState<User>(initialState)

  useEffect(() => {
    getUser().then((res: User) => {
      setUser(res)
    })
  }, [])
  return { user }
}

export default useUser
