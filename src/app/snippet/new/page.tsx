"use client"

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { createSnippet } from "@/actions";
import { useActionState } from "react";
import * as actions from "@/actions";
function CreateSnippetpage() {
  const [formStateData, createSnippet]=useActionState(actions.createSnippet,{message:""});
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
        { formStateData.message && <div className="p-2 bg-red-600 border-2">{formStateData.message}</div>}
               <Button type="submit" className="my-4 ">New</Button>
        </form>
        
     );
}

export default CreateSnippetpage;