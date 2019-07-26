import PropTypes from "prop-types";
import React, { Component } from "react";
import { get } from "lodash";
import _ from "lodash";

import {  SUTD_CERT_LOGO,
  SUTD_SEAL
} from "./images";

export const TIMEZONE = "Asia/Singapore";

export const formatDateFullMonthProper = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  
};

const GothamMedium12pt = {
  fontFamily: "Gotham Medium",
  fontSize: "1.5em",
  textAlign: "center",
  color: "brown"
};

const Arial12pt = {
  fontFamily: "Arial",
  fontSize: "18px",
  textAlign: "center",
  color: "black",
  fontWeight: "bold"
};

const Arial25pt = {
  fontFamily: "Arial",
  fontSize: "25px",
  fontStyle: "Bold",
  textAlign: "center",
  color: "Black"
};

const Arial15pt = {
  fontFamily: "Arial",
  fontSize: "16px",
  fontStyle: "Bold",
  color: "Black"
};

const Arial5pt = {
  fontFamily: "Arial",
  fontSize: "10px",
  color: "Brown"
};

const Arial15ptp = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "Bold",
  textAlign: "left",
  color: "Black",
  "white-space": "pre-wrap",
  marginLeft: "2rem"
};

const Arial14ptp = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "Bold",
  textAlign: "left",
  color: "Black",
  "white-space": "pre-wrap",
  marginLeft: "1rem"
};

export const thWidth60Left = {
  width: "80%",
  textAlign: "left"
};

export const SubjectGrades = ({ certificate }) => {
  const semesters = _(certificate.transcript)
    .groupBy(t => t.semester, t => t.cumGPA)
    .map((values, key) => ({
      semester: key,
      grades: values
    }))
    .orderBy(s => s.semester)
    .value();

  const semesterHeader = s => (
    <div className="row">
      <div className="semester-header exemption col-12">{s.semester}</div>
    </div>
  );

  const subjects = semesters.map((s, j) => {
    const semesterSubjects = s.grades.map((t, i) => (
      <div className="row" key={i}>
       <div className="col-auto">
          <span style={Arial15pt}>{t.courseCode}</span>
        </div>
		<div className="col-1">&nbsp;</div>
        <div className="col-auto">
          <span style={Arial15pt}>{t.name}</span>
        </div>
		<div className="col">&nbsp;</div>
        <div className="col-1 credit-unit">
          <span style={Arial15pt}>{t.courseLevel}</span>
        </div>
        <div className="col-1 credit-unit">
          <span style={Arial15pt}>{t.courseCredit}</span>
        </div>
        <div className="col-1 grade">
          <span style={Arial15pt}>{t.grade}</span>
        </div>
      </div>
    ));
    const cgpa1 = get(s.grades, "[0].cumGPA");
	const cgpa = cgpa1 == 0 ? 'Not Applicable' : cgpa1;
    const tgpa1 = get(s.grades, "[0].termGPA");
	const tgpa = tgpa1 == 0 ? "Not Applicable" : tgpa1;
    return (
      <div key={j}>
        {semesterHeader(s)}
        {semesterSubjects}
        <br />

        <div className="row">
          <div className="col-3">
            Term Grade Point Average : 
          </div>
		  <div className="col-7">
			<strong>{tgpa}</strong>
          </div>
          <div className="col-3">
            Cumulative Grade Point Average :
          </div>
          <div className="col-7">
             <strong>{cgpa}</strong>
          </div>		  
          <div className="col-6">&nbsp;</div>
          <div>
            <span style={Arial25pt}>*****</span>
          </div>
        </div>
      </div>
    );
  });

  return <div>{subjects}</div>;
};

const Transcript = ({ certificate }) => (
  <div className="container">
    <div className="transcript-content">
      <style>
        {`
      .sutd-logo {
        padding-top:1.2em;
        float:right;
        width:20%;
      }
	  
	  .Title2 {
        padding-top:1em;
        float:left;
        font-size:1.5em;
		font-weight:bold
      }
      
      .page-title {
        font-weight:bold;
		color:Brown;
        font-size:1.5em;
        padding-top:1em;

      }
	  
	  .sutd-seal{
        width:80%;
      }
	  
	 .page-title2{
        font-weight:bold;
		font-color:red;
        font-size:1em;
        padding-top:3em;
        text-align:left;
      }
	  
	  .exam-results-header {
        border-top: 2px solid #212529;
        border-bottom: 2px solid #212529;
        margin-bottom:0.8em;
        font-weight: bold
      }
	  
.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}

      .semester-header{
        font-weight: bold;
        text-transform:uppercase;
      }

      .semester-header.exemption {
        text-transform: none;
      }

      .credit-unit,
      .grade {
        text-align: center
      }
	  
      .name {
        text-align: left
      }	  

      .exam-results-footer{
        font-weight: bold
      }
      `}
      </style>
      <br />
      <br />
      <div className="row">
        <div className="col-12">
          <div className="Title2">Office of the Registrar</div>
          <img
            src={SUTD_CERT_LOGO}
            className="sutd-logo"
            title="Singapore University of Technology and Design"
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-5">
          <span style={GothamMedium12pt}>Academic Transcript</span>
        </div>
      </div>
      <div className="row">
        <hr align="center" width="100%" color="brown" />
      </div>
      <br />
      <br />

      <div className="row">
        <div className="col-7">
          <span style={Arial12pt}>{certificate.recipient.name}</span>
        </div>

        <div className="col-7">
          <div className="row">
            <div className="col-7">
              SUTD ID :<strong>{certificate.recipient.studentId}</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              Date of Birth :
              <strong>
                {formatDateFullMonthProper(certificate.recipient.Birthdate)}
              </strong>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              Date of Admission :{" "}
              <strong>
                {formatDateFullMonthProper(certificate.recipient.AdmissionDate)}
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2" style={{ marginTop: "1rem" }}>
          {" "}
          Programme :
        </div>
        <div className="col-5" style={{ marginTop: "1rem" }}>
          {" "}
          <strong>{certificate.recipient.Programme}</strong>
        </div>
        <div className="col-2" style={{ marginTop: "1rem" }}>
          {" "}
          Status :
        </div>
        <div className="col-3" style={{ marginTop: "1rem" }}>
          {" "}
          <strong>{certificate.recipient.Status}</strong>
        </div>
      </div>
      <div className="row">
        <div className="col-2"> Plan :</div>
        <div className="col-5">
          {" "}
          <strong>{certificate.recipient.Plan}</strong>
        </div>
      </div>

      <br />

      <div className="exam-results-header row">
        <div className="col-4">Subject Code</div>
        <div className="col-5">Subject Title</div>
        <div className="col-1">Level</div>
        <div className="col-1">Credits</div>
        <div className="col-1">Grade</div>
      </div>

      <div className="container">
        <SubjectGrades certificate={certificate} />
      </div>

      <hr align="center" width="100%" color="black" />
      <div className="row">
        <div className="col-5">
          <span style={Arial15pt}>Remarks:</span>
        </div>
      </div>
      <br />
      <div className="row">
        <span style={Arial15ptp}>{certificate.additionalData.Remarks}</span>
      </div>
	  <hr align="center" width="100%" color="black" />
      <br />
      <div className="row">
        <span style={Arial14ptp}>{certificate.additionalData.Degree}</span>
		<hr align="center" width="100%" color="black" />
      </div>
	  <hr align="center" width="100%" color="black" />
      <div className="row d-flex justify-content-center">
        <span style={Arial15pt}>
          <strong>-End of Records-</strong>
        </span>
      </div>
      <div className="row d-flex justify-content-center">
        <span style={Arial15pt}>
          <strong>-No Entries Valid Below This Line-</strong>
        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="col-5">
        <div>
          <img src={SUTD_SEAL} className="sutd-seal" />
        </div>
      </div>

      <hr align="center" width="100%" color="Brown" />

      <div className="d-flex justify-content-center">
        <div>
          <span style={Arial5pt}>
            {
              "An official transcript is printed on watermarked security paper and endorsed with the Registrar's signature in blue. A raised seal is not required."
            }
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div>
          <span style={Arial5pt}>
            A black and white transcript is not an original. Transcript guide on
            back.
          </span>
        </div>
      </div>
      <div className="pagebreak" />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="row">
        <div className="col-5">
          <div>
            <img src={certificate.additionalData.footer[0].footer} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div>
            <img src={certificate.additionalData.footer[1].footer} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div>
            <img src={certificate.additionalData.footer[2].footer} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Transcript.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default Transcript;
