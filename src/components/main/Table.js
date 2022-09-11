import React from "react";

const Table = ({data}) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Rate</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.bpi.EUR.code}</td>
          <td>{data.bpi.EUR.rate}</td>
         
          
        </tr>
        <tr>
        <td>{data.bpi.USD.code}</td>
        <td>{data.bpi.USD.rate}</td>
          
        </tr>
        <tr>
        <td>{data.bpi.GBP.code}</td>
        <td>{data.bpi.GBP.rate}</td>
          
        </tr>
      </tbody>
      
    </table>
  );
};

export default Table;
