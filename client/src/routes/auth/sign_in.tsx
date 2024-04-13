import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/sign_in')({
  component: () => <div>Hello /auth/sign_in!</div>
})