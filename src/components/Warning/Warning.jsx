import React from "react";
import { Alert } from "antd";

const Warning = () => (
  <Alert
    message="Oops... Nothing found for your request"
    type="warning"
    showIcon
  />
);
export default Warning;
