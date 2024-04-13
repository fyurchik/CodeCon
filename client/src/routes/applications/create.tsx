import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/applications/create')({
  component: () => <div>Hello /applications/create!</div>
})