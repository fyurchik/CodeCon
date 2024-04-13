import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/applications/')({
  component: () => <div>Hello /applications/!</div>
})