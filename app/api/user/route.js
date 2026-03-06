import {connectDB} from "@/lib/mongodb"
import User from "@/models/User"
import {getServerSession} from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export async function POST(req){
    const session = await getServerSession()
    const {role} = await req.json()
    await connectDB()
    await User.findOneAndUpdate(
        {email: session.user.email},
        {role},
        {new:true}
    )
    return Response.json({success: true})
}
const session = await getServerSession(authOptions)