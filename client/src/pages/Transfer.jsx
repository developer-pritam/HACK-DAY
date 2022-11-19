import React from "react";
import { getUser } from "../auth";
import { users } from "../roles";
import { useEffect, useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import Textbox from "../components/Textbox/Textbox";
import Button from "../components/Button/Button";
const Transfer = () => {
  const department = users.filter((user) => user.role === "department");
  const vendors = users.filter((user) => user.role === "vendor");

  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
      if (!user) {
        window.location.href = "/";
      }
    });
  }, []);

  const transferFund = () => {
    console.log("transfer fund");
  };

  const Admin = () => {
    return (
      <div className="primary-container">
        <h1>Transfer Funds</h1>
        <Textbox placeholder="Amount" type="number" />
        <Textbox placeholder="Message" />
        <select name="cars" id="cars">
          {department.map((department) => (
            <option value={department.name}>{department.displayName}</option>
          ))}
          ;
        </select>
      </div>
    );
  };
  const Department = () => {
    return (
      <div className="primary-container">
        <h1>Transfer Funds</h1>
        <Textbox placeholder="Amount" type="number" />
        <Textbox placeholder="Message" />
        <select name="cars" id="cars">
          {vendors.map((vendor) => (
            <option value={vendor.name}>{vendor.displayName}</option>
          ))}
          ;
        </select>
        <Button text="Transfer" onClick={transferFund} />
      </div>
    );
  };

  return user.role === "admin" ? <Admin /> : <Department />;
};

export default Transfer;
