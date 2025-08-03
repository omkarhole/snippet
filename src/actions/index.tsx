"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";


export const saveSnippet = async (id: number, code: string) => {
    await prisma.snippets.update({
        where: {
            id,
        },
        data: {
            code
        }
    });
    redirect(`/snippet/${id}`);
}

//now this server side compoent will use in client component .


//delete snippet function
export const deleteSnippet = async (id: number) => {
    await prisma.snippets.delete({
        where: { id }
    });
    redirect("/");
}


//saving title and code in database .
export async function createSnippet(prevState: { message: String }, formData: FormData) {
    try {
        // use server directive
        const title = formData.get("title");
        const code = formData.get("code");
        if (typeof title !== "string" || title.length < 4) {
            return { message: "Title is required and must be longer" }
        }
        if (typeof code !== "string" || code.length < 4) {
            return { message: "code is required and must be longer" }
        }
        const snippet = await prisma.snippets.create({
            data: {
                title,
                code
            }
        });
        console.log("created snippet", snippet);

        //throw error
        throw new Error("Oops some thing went wrong ");
    }
    catch (error: any) {
        return { message: error.message }
    }
    redirect("/");
}