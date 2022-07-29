import React, { useContext } from "react";
import { UsersContext } from "../../context/UsersProvider";
import TableItem from "./TableItem";

const Table = () => {
  const { users } = useContext(UsersContext);

  
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr style={{background: 'lightgray'}}>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, birthDate, photo }, index) => (
            <TableItem
              key={index}
              name={name}
              birthDate={birthDate}
              photo={photo}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
