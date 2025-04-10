import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className='flex min-h-svh flex-col'>
        <div className='flex justify-center gap-2 p-2'>
          <Link className='[&.active]:font-bold' to='/'>
            Home
          </Link>
          <Link className='[&.active]:font-bold' to='/about'>
            About
          </Link>
        </div>
        <hr />
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
