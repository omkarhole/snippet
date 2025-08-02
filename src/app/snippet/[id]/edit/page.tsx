import EditSnippetFrom from "@/components/EditSnippetFrom";
import { prisma } from "@/lib/prisma";

const editPageSnippet= async ({ params }: { params: Promise<{ id: string }> })=> {
     const id = parseInt((await params).id);
    const snippet=await prisma.snippets.findUnique({
        where:{
            id,
        },
    });
    if(!snippet){
        return <h1>snippet not found </h1>
    };
     return ( 
        <div>
        <EditSnippetFrom snippet={snippet}/>
           
        </div>
     );
}

export default editPageSnippet;