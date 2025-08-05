import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { deleteSnippet } from "@/actions";
import { notFound } from "next/navigation";

const snippetDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = parseInt((await params).id);
    
    //loading component showing 
    await new Promise((r)=>setTimeout(r,2000));

    const snippet = await prisma.snippets.findUnique({
        where: {
            id,
        },
    })
    if (!snippet) {
        return notFound();
    }
    const deleteSnippetAction=deleteSnippet.bind(null,snippet.id);
    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between " >
                <h1 className="font-bold text-xl">{snippet.title}</h1>
                <div className="flex  gap-2 items-center  ">
                 <Link href={`/snippet/${snippet.id}/edit`}> <Button >Edit</Button></Link> 
                 <form action={deleteSnippetAction}>
                    <Button variant={'destructive'} type="submit">Delete</Button>
                    </form> 
                    
                </div>

            </div>
            <pre className="p-5 bg-gray-200 border-gray-200">
                <code>{snippet.code}</code>
            </pre>

        </div>
    );
}

export default snippetDetailPage;


//to set dynamic route to static route
export const generateStaticParams=async()=>{
const snippets=await prisma.snippets.findMany();
return snippets.map((snippet)=>{
    return {id:snippet.id.toString()};
})
}
