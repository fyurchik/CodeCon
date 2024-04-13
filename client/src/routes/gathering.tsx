import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/gathering')({
  component: () => <div>Hello /gathering!</div>
})