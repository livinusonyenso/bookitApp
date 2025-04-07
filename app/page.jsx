import RoomCard from "@/component/roomCard";
import Heading from "@/component/Heading";
import getAllRooms from "@/actions/getAllRooms";


export default async function Home() {
  const rooms = await getAllRooms();
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
