import { prisma } from '@/lib/prisma'

export async function GET(request){

    const categories = await prisma.category.findMany()

    return Response.json({data: categories})
}