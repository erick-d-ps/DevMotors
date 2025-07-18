import { redirect } from "next/navigation";

export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/686d8f0dd5e8b76ec441a7fb?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`, { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");

    }
    
    return res.json();
    
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}


export async function getSubMenu(){
  try{
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug,title`, { next: { revalidate: 120 } }
    );
   
    if(!res.ok) {
      throw new Error("failed to fetch menu data")
    }

    return res.json();

  }catch(err){
    throw new Error("failed to fetch menu data")
  }
}

export async function getItemBySlug( itemSlug: string ){
   const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

   const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug
    }),
    props: 'slug,title,content,metadata',
    read_key: process.env.READ_KEY as string
   })
 
   const url = `${baseUrl}?${queryParams.toString()}`

   try{//fazer a req pelo fetch 
    const res = await fetch(url, { next: { revalidate: 120 } })

    if(!res.ok){ 
      throw new Error("failed get item by slug")
    }

    return res.json();

   }catch(err){
      console.log(err)
      redirect("/")
   }



}