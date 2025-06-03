
import { lazy, Suspense } from 'react';
import './App.css'

const AuthApp = lazy(()=> import('auth/AuthApp'))

function App() {
  return (
    <>
      <h1 className='bg-blue-300'>Host App.tsx</h1>
        <Suspense fallback="loading Auth App">
          <AuthApp />
        </Suspense>
    </>
  )
}

export default App
