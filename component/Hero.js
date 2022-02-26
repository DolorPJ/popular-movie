import Image from "next/image"
import Link from "next/link"


function Hero() {
  return (
    <div>
     <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image src={"/img.png"} width={200} height={200} />
      </div>
      <h1 className="text-2xl text-gray-700 uppercase font-bold">
        Welcome to WatchMe
      </h1>
      <p className="text-gray-500">
        Produce FILM feature, TELEVISION and Game.
      </p>
      <Link href={"/contact"}>
      <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4 ">
        CONTACT US
      </button>
      </Link>
    </div>
    </div>
  )
}

export default Hero