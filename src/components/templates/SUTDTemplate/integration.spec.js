// eslint-disable-next-line import/no-extraneous-dependencies
import { Selector } from "testcafe";

// eslint-disable-next-line
fixture("Singapore University of Technology and Design").page`http://localhost:3000`;

const Certificate = "./sutd_sample.opencert";

const TemplateTabList = Selector("#template-tabs-list");
const RenderedCertificate = Selector("#rendered-certificate");

const validateTextContent = async (t, component, texts) =>
  texts.reduce(
    async (prev, curr) => t.expect(component.textContent).contains(curr),
    Promise.resolve()
  );

test("SUTD certificate is rendered correctly", async t => {
  // Uploads certificate via dropzone
  await t.setFilesToUpload("input[type=file]", [Certificate]);

  // Certificate tabs rendered
  await t.expect(TemplateTabList.textContent).contains("Certificate");
  // await t.expect(TemplateTabList.textContent).contains("Transcript");

  // Certificate tab content
  await validateTextContent(t, RenderedCertificate, [
    "Abc Glma Iammb Hib",
    "Bachelor of Engineering",
    "SUMMA CUM LAUDE",
    "1247"
  ]);

  // Navigate to Transcript tab
  const transcriptTab = TemplateTabList.find(":nth-child(2)");
  await t.click(transcriptTab);

  // Transcript tab content
  await validateTextContent(t, RenderedCertificate, [
    "Undergraduate",
    "Abc Glma Iammb Hib",
    "1002000",
    "Advanced Math I",
    "P"
  ]);
});
