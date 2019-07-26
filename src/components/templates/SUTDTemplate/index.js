import PropTypes from "prop-types";
import SUTDCert from "./certificate";
import SUTDTranscript from "./transcript";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: SUTDCert
  },
  {
    id: "transcript",
    label: "transcript",
    template: SUTDTranscript
  }
];

const addresses = [
  "0x2456FC81C1342fB79D7C58A4682F031208A44d7F",
  "0x96a7bEefb0A7fb6B9d2101B0A27a734fA97E7221"
];



export default templates;
