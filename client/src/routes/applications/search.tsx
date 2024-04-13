import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/applications/search')({
  component: () => <div>Hello /applications/search!</div>
})