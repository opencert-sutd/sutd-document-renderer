import PropTypes from "prop-types";
import React, { Component } from "react";
import { get } from "lodash";
import _ from "lodash";
import {  SUTD_CERT_LOGO,
  SUTD_SEAL,
  SUTD_FOOTER_1,
  SUTD_FOOTER_2,
  SUTD_FOOTER_3
} from "./images";

export const TIMEZONE = "Asia/Singapore";

export const formatDateFullMonthProper = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  
};

const GothamMedium12pt = {
  fontFamily: "Arial",
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
  marginLeft: "2rem",
  textTransform: "uppercase"
};

const Arial14ptp = {
  fontFamily: "Arial",
  fontSize: "16px",
  fontStyle: "Bold",
  textAlign: "left",
  color: "Black",
  "white-space": "pre-wrap",

};

export const thWidth60Left = {
  width: "80%",
  textAlign: "left"
};

export const Plan =({ document }) => {
	
	const DegreePlan = get(document, "recipient.TransPlan",undefined);
	return DegreePlan ? (
    <div className="row">
       <div className="col-2"> <span style={Arial15pt}>Plan :</span></div>
        <div className="col-5">
          {" "}
          <span style={Arial15pt}><strong>{document.recipient.TransPlan}</strong></span>
        </div>
    </div>) : <br/>;
 	
};

export const SubjectGrades = ({ document }) => {
  const semesters = _(document.transcript)
    .groupBy(t => t.semester, t => t.cumGPA)
    .map((values, key) => ({
      semester: key,
      grades: values
    }))
    .orderBy(s => s.semester)
    .value();

  const semesterHeader = s => (
    <div className="row">
      <div className="semester-header exemption col-12"><span style={Arial15pt}>{s.semester}</span></div>
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
		<br/>
        {semesterSubjects}
        <br />

        <div className="row">
          <div className="col-3">
            <span style={Arial15pt}>Term Grade Point Average : </span>
          </div>
		  <div className="col-7">
			<span style={Arial15pt}><strong>{tgpa}</strong></span>
          </div>
          <div className="col-3">
            <span style={Arial15pt}>Cumulative Grade Point Average :</span>
          </div>
          <div className="col-7">
             <span style={Arial15pt}><strong>{cgpa}</strong></span>
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


export const RemarksFooter =({ document }) => {
	
	const Remarks = get(document, "additionalData.Remarks",undefined);
	return Remarks ? (
	<div>
		<hr align="center" width="100%" color="black" />
		<div className="row">
			<div className="col-5">
				<span style={Arial15pt}>Remarks:</span>
			</div>
		</div>
		<br/>
		<div className="row">
			<span style={Arial15ptp}>{document.additionalData.Remarks}</span>
		</div>
	</div>
  ) :null ;
	
};

export const ThesisFooter =({ document }) => {
	
	const Thesis = get(document, "additionalData.Thesis",undefined);
	return Thesis ? (
	<div>
		<div className="row">
			<div className="col-9">
				<span style={Arial15pt}>Thesis Title: {document.additionalData.Thesis}</span>
			</div>
		</div>
	<br/>
	</div>
  ) :null ;
	
};

export const DegreeFooter =({ document }) => {
	
	const Degree = get(document, "additionalData.Degree2",undefined);
	return Degree ? (
	<div>
		<div className="row">
			<div className="col-5">
				<span style={Arial15pt}>Conferred the degree(s) of:</span>
			</div>
		</div>
		<br/>
		<ul>
			<li><span style={Arial14ptp}>{document.additionalData.Degree}</span></li>
			<li><span style={Arial14ptp}>{document.additionalData.Degree2}</span></li>
		</ul>

		<div className="row">
			<div className="col-5">
				<span style={Arial15pt}>On: {formatDateFullMonthProper(document.issuedOn)}</span>
			</div>
		</div>
		
	</div>
  ) :(
	<div>
		<div className="row">
			<div className="col-5">
				<span style={Arial15pt}>Conferred the degree(s) of:</span>
			</div>
		</div>
		<br/>
		<ul>
			<li><span style={Arial14ptp}>{document.additionalData.Degree}</span></li>
		</ul>

		<div className="row">
			<div className="col-5">
				<span style={Arial15pt}>On: {formatDateFullMonthProper(document.issuedOn)}</span>
			</div>
		</div>
		
	</div>
  ) ;
	
};

const Transcript = ({ document }) => (
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
		font-family: Arial;
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

      .credit-unit {
        text-align: center
      }
	  
      .grade {
        text-align: left
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


      <div className="row">
        <div className="col-7">
          <span style={Arial12pt}>{document.recipient.name}</span>
        </div>
		<br/>
		<br/>
        <div className="col-7">
          <div className="row">
            <div className="col-7">
              <span style={Arial15pt}>SUTD ID :<strong>{document.recipient.studentId}</strong></span>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <span style={Arial15pt}>Date of Birth :{" "}
              <strong>
                {formatDateFullMonthProper(document.recipient.Birthdate)}
              </strong></span>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <span style={Arial15pt}>Date of Admission :{" "}
              <strong>
                {formatDateFullMonthProper(document.recipient.AdmissionDate)}
              </strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2" style={{ marginTop: "1rem" }}>
          {" "}
          <span style={Arial15pt}>Programme :</span>
        </div>
        <div className="col-5" style={{ marginTop: "1rem" }}>
          {" "}
          <span style={Arial15pt}><strong>{document.recipient.Programme}</strong></span>
        </div>
        <div className="col-3" style={{ marginTop: "1rem" }}>
          {" "}
          <span style={Arial15pt}>Status :</span>
        </div>
        <div className="col-2" style={{ marginTop: "1rem" }}>
          {" "}
          <span style={Arial15pt}><strong>{document.recipient.Status}</strong></span>
        </div>
      </div>
	  
	  <div>
        <Plan document={document} />
      </div>


      <br />

      <div className="exam-results-header row">
        <div className="col-4"><span style={Arial15pt}>Subject Code</span></div>
        <div className="col-5"><span style={Arial15pt}>Subject Title</span></div>
        <div className="col-1"><span style={Arial15pt}>Level</span></div>
        <div className="col-1"><span style={Arial15pt}>Credits</span></div>
        <div className="col-1"><span style={Arial15pt}>Grade</span></div>
      </div>

      <div>
        <SubjectGrades document={document} />
      </div>
	  
	  <div>
        <RemarksFooter document={document} />
      </div>  

	  <hr align="center" width="100%" color="black" />
	  
	  <div>
        <ThesisFooter document={document} />
      </div>	
	  
	  <div>
        <DegreeFooter document={document} />
      </div>	
	<hr align="center" width="100%" color="black" />
      <div className="row d-flex justify-content-center">
        <span style={Arial15pt}>
          <strong>-END OF RECORD-</strong>
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
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="row">
        <div className="col-5">
          <div>
            <img src={document.additionalData.footer[0].footer1} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div>
            <img src={document.additionalData.footer[1].footer2} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div>
            <img src={document.additionalData.footer[2].footer3} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

Transcript.propTypes = {
  document: PropTypes.object.isRequired
};

export default Transcript;
