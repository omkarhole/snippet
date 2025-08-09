"use client"
//this is client side component

import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import  {saveSnippet} from "@/actions";
import type { snippets } from "@prisma/client";
import { Button } from "./ui/button";
function EditSnippetFrom({snippet}:{snippet:snippets}) {
   
   const [code,setCode]=useState(snippet.code);
  const handleChangeCode=(value:string="")=>{ 
    console.log(value);
setCode(value);
  }
  //we will use save snippet server side component in  client component.
  const saveSnippetAction= saveSnippet.bind(null,snippet.id,code);
  
  
  
  
   return ( 
        <div className="flex flex-col gap-4 ">
            <form className="flex items-center  justify-between" action={saveSnippetAction}>
                <h1 className="font-bold text-xl">Edit your code </h1>
                <Button type="submit">Save</Button>
            </form>
            
              <Editor
        height="40vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={code}
       onChange={handleChangeCode}
      />
        </div>
     );
}

export default EditSnippetFrom;