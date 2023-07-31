import Image from 'next/image'
import boxes from "public/boxes.png"

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-2 text-center p-5">
      <div className="items-center p-5">
        <h1 className="bg-gradient-to-b from-[#194c33] text-xl md:text3xl lg:text-6xl font-bold mb-4">Better developer for digital products</h1>
        <p className="mb-4">Turn ideas to reality with a bettter developer for your online presence</p>
        <button className="bg-green-600 rounded text-white text-center p-3 hover:scale-125 hover:bg-yellow-500">click here</button>
      </div>
    <Image src={boxes} width={500} height={500} alt='pixabay by Lohrelei'className="border border-sm"/>
    </main>
  )
}
