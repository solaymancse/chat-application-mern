import {ListGroup} from 'react-bootstrap';

export const Sidebar = () => {
  const rooms = ["First Room","Second Room","Third Room","Fourth Room"];
  return (
    <>
    <p>Available Rooms</p>
    <ListGroup>
    {rooms.map((room,index)=> (
      <ListGroup.Item key={index}>{room}</ListGroup.Item>
    ))}
    </ListGroup>
    <p>Members</p>
    </>
  )
}
