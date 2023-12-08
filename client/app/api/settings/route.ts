import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();
    const { name, image } = body;

    if (!currentUser?.id || !currentUser.email) {
      return new Response("Unautorized", { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        image,
      },
    });

    return new Response(JSON.stringify(updatedUser));
  } catch (error) {
    return new Response("Internal Error", { status: 500 });
  }
}
