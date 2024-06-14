
"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const router = useRouter();
    const handleSearch = () => {
        const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const name = formData.get("name") as string

            if(name){
                router.push(`/list?name=${name}`)
            }
        }
    }


  return (
    <form action="" onSubmit={handleSearch}>
        <input type="text" name='name' placeholder='Search' className='flex-1 bg-transparent outline-none'/>
        <button className="cursor-pointer">
            <Image src="/search.png" alt='' width={16} height={16}/>
        </button>
    </form>
  )
}
