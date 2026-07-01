import { LoginForm } from "@/components/login-form"
import { ArrowBigLeft } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
       <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground mr-240">

              <Link href="/"><ArrowBigLeft className="size-4" /></Link>
            </div>
          
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}
