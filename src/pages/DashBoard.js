import React from "react";
import Table from "../components/Table/Table";

const DashBoard = () => {

  return (
    <>
      <section className="dashboard">
        <div className="dashboard-wrapper">
          <h2 className="wrapper-title">Dashboard</h2>
          <div className="table-container">
            <Table />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashBoard;
