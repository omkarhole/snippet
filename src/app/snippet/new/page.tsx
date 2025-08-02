import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
function CreateSnippetpage() {
    async  function createSnippet(formData:FormData){
        "use server" // use server directive
         const title=formData.get("title")as string;
         const code=formData.get("code")as string;
         
         const snippet=await  prisma.snippets.create({
            data:{
                title,
                code 
            }
         });
         console.log("created snippet",snippet);
         redirect("/");
    }
    return ( 
        <form action={createSnippet}>
       <div>    
        <Label>Title</Label>
        <Input type="text" name="title" id="title"/>
        </div>
     <div>
      <Label>Code</Label>
            <Textarea name="code" id="code"/>
        </div>
        <Button type="submit" className="my-4 ">New</Button>
        </form>
        
     );
}

export default CreateSnippetpage;