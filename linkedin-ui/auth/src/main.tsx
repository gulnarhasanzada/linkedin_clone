import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthProvider.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
        <ChakraProvider value={defaultSystem}>
            <App />
        </ChakraProvider>
    </AuthProvider>
  </BrowserRouter>
)
