import useUser from 'hooks/useUser'

function Cart() {
  const user = useUser()
  console.log('Cart', user)

  return <div>Cart</div>
}

export default Cart
