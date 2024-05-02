import React from "react";
import { ArrowLeft } from "lucide-react";

function LeftBtn() {
  return (
    <div>
      <ArrowLeft
        color="#ffffff"
        style={{
          width: "40px",
          height: "40px",
          padding: "5px",
          backgroundColor: "D9D9D9",
          borderRadius: "30px",
        }}
      />
    </div>
  );
}

export default LeftBtn;
