import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className='flex grow items-center justify-center'>
      <h1 className='text-3xl font-bold underline'>Hello from About!</h1>
    </div>
  )
}
