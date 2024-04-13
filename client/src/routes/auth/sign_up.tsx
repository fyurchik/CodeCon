import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/sign_up')({
  component: () => <div>Hello /auth/sign_up!</div>
})