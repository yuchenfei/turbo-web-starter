import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className='flex grow items-center justify-center'>
      <h1 className='text-3xl font-bold underline'>Welcome Home!</h1>
    </div>
  )
}
