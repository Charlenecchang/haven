"use client"

import { useSession } from "next-auth/react"
export default function SupportGroups() {
    const {data: session} = useSession()

    return(
        <div style={{padding:20}}>
            <h1 className="text-2xl font-bold">Caregiver Community</h1><br></br>
            <p className="text-sm">You aren’t meant to do this alone. Join a specialized support group
             to find connection, shared wisdom, and emotional support.</p>
        </div>
    )
}