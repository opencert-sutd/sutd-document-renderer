import PropTypes from "prop-types";
import React, { Component } from "react";
import { get } from "lodash";
import {
  SUTD_CERT_BG,
  SUTD_CERT_LOGO,
  SUTD_CHAIR,
  SUTD_PRESIDENT
} from "./images";

export const TIMEZONE = "Asia/Singapore";

const GothamMedium22pt = {
  fontFamily: "Gotham Medium",
  fontSize: "22px",
  textAlign: "center",
  color: "Brown"
};

const GothamMedium8pt = {
  fontFamily: "Gotham Medium",
  fontSize: "7px",
  textAlign: "right",
  color: "black"
};

const GothamMedium10pt = {
  fontFamily: "Gotham Medium",
  fontSize: "10px",
  textAlign: "center",
  color: "black"
};

const GothamMedium12pt = {
  fontFamily: "Gotham Medium",
  fontSize: "12px",
  textAlign: "center",
  color: "black"
};

const GothamBold12pt = {
  fontFamily: "Gotham Medium",
  fontStyle: "Bold",
  fontSize: "12px",
  textAlign: "center",
  color: "black"
};

const GothamMedium165pt = {
  fontFamily: "Gotham Medium",
  fontSize: "16.5px",
  textAlign: "center",
  color: "Brown"
};

const GothamMedium265pt = {
  fontFamily: "Gotham Medium",
  fontSize: "26.5px",
  textAlign: "center",
  color: "Black"
};

const borderImgStyle = {
  border: "1px solid",
  borderColor: "black",
  backgroundPosition: "1px",
  backgroundRepeat: "repeat",
  backgroundImage: `url(${SUTD_CERT_BG})`,
  backgroundSize: "75px 75px"
};

const logoImgStyle = {
  width: "150px",
  height: "60px",
  marginLeft: "43%",
  marginTop: "5%"
};

const chairImgStyle = {
  width: "150px",
  height: "60px",
  borderBottom: "1px solid"
};

const presidentImgStyle = {
  width: "150px",
  height: "60px",
  borderBottom: "1px solid"
};

export const formatDateFullMonthProper = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
};

export const Plan =({ document }) => {
	
	const DegreePlan = get(document, "recipient.Plan",undefined);
	return DegreePlan ? (
      <div className="row d-flex justify-content-center align-items-center">
        {" "}
        <span style={GothamMedium165pt}>{document.recipient.Plan}</span>
      </div>) :null;
 	
};


const Template = ({ document }) => (

  <div className="container" style={borderImgStyle}>
    <img
      src={SUTD_CERT_LOGO}
      style={logoImgStyle}
      className="row d-flex justify-content-center"
    />
    <div>
      {" "}
      <br />
      <br />
      <div>
        {" "}
        <hr align="center" size="5" width="45%" color="black" />{" "}
      </div>
      <div className="row justify-content-center" style={{ marginTop: "1rem" }}>
        <span style={GothamMedium12pt}>
          Singapore University of Technology and Design
        </span>
      </div>
      <div className="row d-flex justify-content-center">
        <span style={GothamMedium12pt}>
          upon the recommendation of the Faculty hereby confers on
        </span>
      </div>
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100px", lineHeight: "175%" }}
      >
        <span style={GothamMedium265pt}>{document.recipient.name}</span>
      </div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginBottom: "10px" }}
      >
        <span style={GothamMedium12pt}>the degree of</span>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <span style={GothamMedium22pt}>{document.name}</span>
      </div>{" "}

	  <div>
        <Plan document={document} />
      </div>

      <div className="row d-flex justify-content-center align-items-center">
        <span style={GothamMedium165pt}>{document.recipient.Honors}</span>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <span style={GothamMedium165pt}>{document.recipient.SubPlan}</span>
      </div>
      <br />
      <div className="row d-flex justify-content-center">
        <span style={GothamMedium12pt}>
          with all its honor, privileges and obligations on
        </span>
      </div>
      <div className="row d-flex justify-content-center">
        <span style={GothamBold12pt}>
          {formatDateFullMonthProper(document.issuedOn)}
        </span>
      </div>
    </div>
    <br />
    <br />
    <div className="row">
      <div className="col-2">&nbsp;</div>
      <div className="col-6">
        <div>
          <img src={SUTD_CHAIR} style={chairImgStyle} />
        </div>
      </div>

      <div className="col-2">
        <div>
          <img src={SUTD_PRESIDENT}  style={presidentImgStyle} />
        </div>
      </div>
    </div>

    <div className="row">
      <div style={{ marginRight: "13rem" }}>&nbsp;</div>
      <div style={{ marginRight: "31rem" }}>
        <div>
          <span style={GothamMedium10pt}>{document.additionalData.Signatorytype[0].type} </span>
        </div>
      </div>

      <div>
        <div>
          <span style={GothamMedium10pt}>{document.additionalData.Signatorytype[1].type}</span>
        </div>
      </div>
    </div>
    <div className="row">
      {" "}
      <div className="col-11">&nbsp;</div>
      <div className="co1-4">
        <div>
          <span style={GothamMedium8pt}>Serial No. {document.id} </span>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
);

export default Template;
Template.propTypes = {
  document: PropTypes.object.isRequired
};
