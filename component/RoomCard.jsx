import Image from "next/image"
import Link from "next/link"
export default function RoomCard({room}) {
    // console.log("Room Props:", room);
  return (
    <>
     <div
        className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4">
            
          <Image
          
           src={`/images/rooms/${room.image}`}
            // src={`/images/rooms/${room.image}`}
            width={400}
            height={400}
            alt={room.name}
            className="w-full sm:w-32 sm:h-32 mb-3 sm:mb-0 object-cover rounded-lg"
            
          />
          <div className="space-y-1">
            <h4 className="text-lg font-semibold">{room.name}</h4>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Address:</span> {room.address}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> avialablility:</span>
              {room.avialablility}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800"> Price:</span>
              ${room.price_per_hour}/hour
            </p>
          </div>
        </div>
        <div
          className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0"
        >
          <Link
            href={`room/${room.$id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
            >View Room </Link>
        </div>

      </div>
    </>
  )
}
