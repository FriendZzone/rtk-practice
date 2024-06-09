import useUser from 'hooks/useUser'

function Navigation() {
  const user = useUser()
  console.log('Navigation', user)

  return <div>Navigation</div>
}

export default Navigation
