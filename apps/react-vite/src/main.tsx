import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createRouter, RouterProvider } from '@tanstack/react-router'

import './index.css'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
