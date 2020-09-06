import React, { Fragment, useState } from "react";
import { getLaunch} from "./helper/apicall";
import { API } from "./backend";

export default function FilterLaunch(props) {
  const [flag, setFlag] = useState(false);

  const handleChange = (flag) => {
    setFlag(!flag);
    
    const newFilter = {...props.filters, launch_success: flag}

    props.setFilters(newFilter);
  };

  return (
    <>
      <span className="text-strong">
        Launch Success
        <hr />
      </span>
      <button
        className="btn btn-success m-2"
        onClick={() => {
          handleChange(flag);
        }}
        data-toggle="button"
        aria-pressed="false"
      >
        Yes/No
      </button>

      <br />
    </>
  );
}
