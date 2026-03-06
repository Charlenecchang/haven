"use client"

import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function LandingPage() {
  const { data: session } = useSession()
  const router = useRouter()

  const features = [
    {
      icon: "🗂",
      title: "Dashboard",
      desc: "Navigate your caregiving journey with personalized resource recommendations curated for your placement child.",
    },
    {
      icon: "👥",
      title: "Staff Directory",
      desc: "Transparent access to Amara staff and program personnel — find the right person, fast.",
    },
    {
      icon: "🤝",
      title: "Support Groups",
      desc: "Sign up for support group activities in your area and connect with caregivers like you.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#faf6ee] font-sans">
      <div className="bg-[#1a3a2e] px-8 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(106,153,78,0.15),transparent_60%)]" />
        <div className="relative max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Haven logo" width={64} height={64} className="rounded-2xl" />
          </div>
          <h1 className="text-white text-5xl font-bold mb-4 font-serif">Haven</h1>
          <p className="text-[#9ab89a] text-lg mb-10 leading-relaxed">
            One stop resource hub for Amara&apos;s licensed caregivers.
          </p>
          <div className="bg-white/10 rounded-2xl px-8 py-6 mb-10 text-left border border-white/10">
            <p className="text-white/80 text-base italic leading-relaxed">
                &quot;I didn&apos;t know where to start or who to call. I just needed one place that had everything.&quot;
            </p>
            <p className="text-[#9ab89a] text-sm mt-3">— Amara Licensed Caregiver</p>
          </div>

          {session ? (
            <div className="flex flex-col items-center gap-3">
              <p className="text-[#9ab89a] text-sm">Welcome back, {session.user?.name?.split(" ")[0]}!</p>
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-[#f5a623] text-white border-none rounded-full px-10 py-4 text-base font-bold cursor-pointer hover:bg-[#e09010] transition-colors"
              >
                Go to Dashboard →
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <p className="text-white/60 text-sm">Free resources — login today to access all features</p>
              <button
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="bg-white text-[#1a3a2e] border-none rounded-full px-10 py-4 text-base font-bold cursor-pointer flex items-center gap-3 hover:bg-gray-50 transition-colors shadow-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8 py-16">
        <h2 className="text-center text-2xl font-bold text-[#1a2e1a] mb-2">Everything you need, in one place</h2>
        <p className="text-center text-gray-400 text-sm mb-10">Built specifically for Amara&apos;s licensed caregivers</p>

        <div className="grid grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#ede8df] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#e8f4f0] flex items-center justify-center text-2xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-[#1a2e1a] text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#1a3a2e] text-center py-14 px-8">
        <h2 className="text-white text-2xl font-bold mb-3">Ready to get started?</h2>
        <p className="text-[#9ab89a] text-sm mb-7">Join hundreds of caregivers already using Haven.</p>
        {!session && (
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="bg-[#f5a623] text-white border-none rounded-full px-10 py-4 text-base font-bold cursor-pointer hover:bg-[#e09010] transition-colors"
          >
            Sign in with Google →
          </button>
        )}
      </div>
    </main>
  )
}