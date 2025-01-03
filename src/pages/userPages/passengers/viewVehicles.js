/*Here a registered passenger can view vehicles in the system, and subscribe the 
relevant bus. ( Which then sends a request to bus owner ) 
Can view details of each bus */

import React from "react";
import { Space, Table, Tag } from "antd";

const ViewVehicles = () => {
  const columns = [
    {
      title: "Vehicle ID",
      dataIndex: "vehicleid",
      key: "vehicleid",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Vehicle Number",
      dataIndex: "vehiclenumber",
      key: "vehiclenumber",
    },
    {
      title: "Vehicle Type",
      dataIndex: "vehicletype",
      key: "vehicletype",
    },
    {
      title: "Owner Name",
      dataIndex: "ownername",
      key: "ownername",
    },
    {
      title: "Starting location",
      dataIndex: "startinglocation",
      key: "startinglocation",
    },
    {
      title: "End location",
      dataIndex: "endlocation",
      key: "endlocation",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Subscribe {record.name}</a>
          <a>View more details</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      vehicleid: "12345",
      vehiclenumber: "AB-1234",
      vehicletype: "van",
      ownername: "John Doe",
      startinglocation: "City A",
      endlocation: "City B",
    },
    {
      key: "2",
      vehicleid: "67890",
      vehiclenumber: "CD-5678",
      vehicletype: "bus - 54 seater",
      ownername: "Jane Smith",
      startinglocation: "City X",
      endlocation: "City Y",
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Available Vehicles
      </h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default ViewVehicles;
