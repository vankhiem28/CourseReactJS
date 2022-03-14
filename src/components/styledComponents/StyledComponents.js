import React from "react";
import styledComponents from "styled-components";

const Gh = styledComponents.div`
    color:red;
    .header {
        text-align:center;
        color:black;
    }
    .content {
        text-align:center;
        color:purple;
    }
    .footer {
        text-align:center;
        color: orange;
    }
`;

function StyledC() {
  return (
    <Gh>
      <h1 className="header">Heading</h1>
      <h1 className="content">Content</h1>
      <h1 className="footer">Footer</h1>
    </Gh>
  );
}

export default StyledC;
