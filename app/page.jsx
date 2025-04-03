import RoomCard from "@/component/roomCard";
import roomsData from "@/data/rooms.json";
import Heading from "@/component/Heading";


export default function Home() {
  const rooms = roomsData || [];
  // console.log("Rooms Data:", rooms);
  return (
    <>
    <Heading title='Available Room'/>
      {rooms.length > 0 ? (
        rooms.map((room) => {
          // console.log("Rendering Room:", room);
           return <RoomCard key={room.name}  room={room} />}
      )
      ) : (
        <p>No room avialable at the moment</p>
      )}
    </>
  );
}
