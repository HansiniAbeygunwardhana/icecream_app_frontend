import React from "react";
import { ArrowRight } from "lucide-react";

function RightBtn() {
  return (
    <div>
      <ArrowRight
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

export default RightBtn;
