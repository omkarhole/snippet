
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
export default async  function Home() {

  const snippets=await prisma.snippets.findMany();

  //later work
  if(!snippets){

  }
  return (
   <div>
   <h1 className="font-bold text-4xl">Home</h1>
   <div className="flex items-center justify-between ">
    <h1>snippets</h1>
    <Link href={"/snippet/new"} ><Button>New</Button></Link>
   </div>
   {
    snippets.map((snippet)=>(
      <div key={snippet.id} className="flex items-center  justify-between bg-gray-200 rounded-sm p-2 my-5">
        <h1>{snippet.title}</h1>
      <Link href={`/snippet/${snippet.id}`}><Button>View</Button></Link>
  
      </div>
      
    ))
   }
     </div>
  

  );
}
