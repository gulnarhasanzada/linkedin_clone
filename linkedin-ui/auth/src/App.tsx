import './App.css'

function AuthApp() {
  const list = Array.from({length: 100000}, (_,i)=>i+1)
  return (
    <>
      {list.map((i)=><h5 className='bg-red-300'>Hello from Auth App.tsx {i}</h5>) }
    </>
  )
}

export default AuthApp
