import React, { useState } from "react";
//icons
import { QrcodeOutlined } from "@ant-design/icons/lib/icons";

import * as classes from "./QrCodeScan.module.css";
import { Input } from "antd";
const QrCodeScan = () => {
  const [qrCodeScanner, setqrCodeScanner] = useState("");
  return (
    <div className={classes.qrCodeScannerContainer}>
      <QrcodeOutlined className={classes.qrCodeScanner} />
      <h5 className={classes.description}>Scanner QR Code </h5>
      <Input
        type="password"
        className={classes.qrcodeScannerInput}
        value={qrCodeScanner}
        onChange={(e) => setqrCodeScanner(e.target.value)}
      />
    </div>
  );
};
export default QrCodeScan;
