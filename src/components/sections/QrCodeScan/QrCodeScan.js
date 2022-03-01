import React, { useEffect, useState } from "react";
//icons
import { QrcodeOutlined } from "@ant-design/icons/lib/icons";

import * as classes from "./QrCodeScan.module.css";
import { Input } from "antd";
const QrCodeScan = ({ setLocalisation }) => {
  const [qrCodeScanner, setqrCodeScanner] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(qrCodeScanner);
    setLocalisation(true);
  };
  useEffect(() => {
    qrCodeScanner && setLocalisation(null);
  }, []);
  return (
    <div align="center" className={classes.qrCodeScannerContainer}>
      <QrcodeOutlined className={classes.qrCodeScanner} />
      <h5 className={classes.description}>Scanner QR Code </h5>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          autoFocus
          placeholder="Scaner Maintenant !"
          type="password"
          className={classes.qrcodeScannerInput}
          value={qrCodeScanner}
          onChange={(e) => setqrCodeScanner(e.target.value)}
        />
      </form>
    </div>
  );
};
export default QrCodeScan;
