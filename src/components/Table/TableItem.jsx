import React from "react";
import defaultPhoto from "../../assets/images/default.jpeg";

const TableItem = ({ name, birthDate, photo }) => {
  return (
    <tr>
      <th>{name}</th>
      <th>{birthDate}</th>
      <th>
        <img src={photo || defaultPhoto} width="100px" alt="avatar" />
      </th>
    </tr>
  );
};

export default TableItem;
