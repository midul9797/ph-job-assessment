"use client";
import React from "react";
import { Table } from "antd";

export default function ProjectTable({ columns, data }: any) {
  return (
    <div className="mx-auto w-[90%] pt-3">
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
}
