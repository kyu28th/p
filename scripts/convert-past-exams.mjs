import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

globalThis.DOMMatrix = class DOMMatrix {
  constructor() {}
  multiplySelf() { return this; }
  preMultiplySelf() { return this; }
  translateSelf() { return this; }
  scaleSelf() { return this; }
  rotateSelf() { return this; }
  invertSelf() { return this; }
  transformPoint(point) { return point; }
};
globalThis.ImageData = class ImageData {
  constructor() {}
};
globalThis.Path2D = class Path2D {
  constructor() {}
  addPath() {}
};

const pdfjsPath = process.env.PDFJS_DIST_PATH ?? "node_modules/pdfjs-dist/legacy/build/pdf.mjs";
const pdfjs = await import(pathToFileURL(pdfjsPath).href);
const sourceRoot = process.env.LOCAL_SOURCE_ROOT ?? "LOCAL_SOURCE_ROOT";

const examFiles = [
  ["092", 2010, `${sourceRoot}/제92회_정보관리기술사(2010년).pdf`],
  ["093", 2011, `${sourceRoot}/제93회_정보관리기술사(2011년).pdf`],
  ["095", 2011, `${sourceRoot}/제95회_정보관리기술사(2011년).pdf`],
  ["096", 2012, `${sourceRoot}/제96회_정보관리기술사(2012년).pdf`],
  ["098", 2012, `${sourceRoot}/제98회_정보관리기술사(2012년).pdf`],
  ["099", 2013, `${sourceRoot}/제99회_정보관리기술사(2013년).pdf`],
  ["101", 2013, `${sourceRoot}/제101회 정보관리기술사(2013년).pdf`],
  ["102", 2014, `${sourceRoot}/제102회 정보관리기술사(2014년).pdf`],
  ["104", 2014, `${sourceRoot}/제104회 정보관리기술사(2014년).pdf`],
  ["105", 2015, `${sourceRoot}/제105회 정보관리기술사(2015).pdf`],
  ["107", 2015, `${sourceRoot}/제107회 정보관리기술사(2015년).pdf`],
  ["108", 2016, `${sourceRoot}/제108회 정보관리기술사(2016년).pdf`],
  ["110", 2016, `${sourceRoot}/제110회 정보관리기술사(2016년).pdf`],
  ["111", 2017, `${sourceRoot}/제111회 정보관리기술사(2017년).pdf`],
  ["113", 2017, `${sourceRoot}/제113회 정보관리기술사(2017년).pdf`],
  ["114", 2018, `${sourceRoot}/제114회 정보관리기술사(2018년).pdf`],
  ["117", 2019, `${sourceRoot}/제117회 정보관리기술사(2019년).pdf`],
  ["118", 2019, `${sourceRoot}/제118회 정보관리기술사(2019년).pdf`],
  ["119", 2019, `${sourceRoot}/제119회 정보관리기술사(2019년).pdf`],
  ["120", 2020, `${sourceRoot}/제120회 정보관리기술사(2020년).pdf`],
  ["121", 2020, `${sourceRoot}/제121회 정보관리기술사(2020년).pdf`],
  ["122", 2020, `${sourceRoot}/제122회 정보관리기술사(2020년).pdf`],
  ["123", 2021, `${sourceRoot}/제123회 정보관리기술사(2021년).pdf`],
  ["124", 2021, `${sourceRoot}/제124회 정보관리기술사(2021년).pdf`],
  ["125", 2021, `${sourceRoot}/제125회 정보관리기술사(2021년).pdf`],
  ["126", 2022, `${sourceRoot}/제126회 정보관리기술사(2022년).pdf`],
  ["127", 2022, `${sourceRoot}/제127회 정보관리기술사(2022년).pdf`],
  ["128", 2022, `${sourceRoot}/제128회 정보관리기술사 문제지.pdf`],
  ["129", 2023, `${sourceRoot}/★제129회 정보관리기술사 문제지.pdf`],
  ["130", 2023, `${sourceRoot}/★제130회 정보관리기술사 문제지.pdf`],
  ["131", 2023, `${sourceRoot}/★제131회 정보관리기술사 문제지.pdf`],
  ["132", 2024, `${sourceRoot}/★제132회 정보관리기술사 문제지.pdf`],
  ["133", 2024, `${sourceRoot}/★제133회 정보관리기술사 문제지.pdf`],
  ["134", 2024, `${sourceRoot}/★제134회 정보관리기술사 문제지.pdf`],
  ["135", 2025, `${sourceRoot}/★제135회 정보관리기술사 문제지.pdf`],
  ["136", 2025, `${sourceRoot}/★제136회 정보관리기술사 문제지.pdf`],
  ["137", 2025, `${sourceRoot}/★제137회 정보관리기술사 문제지.pdf`],
  ["138", 2026, `${sourceRoot}/★제138회 정보관리기술사 문제지.pdf`],
  ["139", 2026, `${sourceRoot}/★제139회 정보관리기술사 문제지.pdf`],
];

const hwpPending = {
  round: "116",
  year: 2018,
  source: `${sourceRoot}/제116회 정보관리기술사(2018년).hwp`,
};

function cleanText(value) {
  return value
    .replace(/\u0000/g, "")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function pageItemsToMarkdown(items) {
  const rows = new Map();

  for (const item of items) {
    const text = cleanText(item.str || "");
    if (!text) continue;

    const x = Math.round(item.transform?.[4] ?? 0);
    const y = Math.round(item.transform?.[5] ?? 0);
    const key = String(y);
    if (!rows.has(key)) rows.set(key, []);
    rows.get(key).push({ x, text });
  }

  return [...rows.entries()]
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([, row]) => row.sort((a, b) => a.x - b.x).map((item) => item.text).join(" "))
    .map(cleanText)
    .filter(Boolean)
    .join("\n");
}

function extractQuestions(markdown) {
  const lines = markdown.split(/\r?\n/);
  const questions = [];
  let currentPeriod = "unknown";
  const periodPattern = /([1-4])\s*교시/;
  const qPattern = /^\s*(?:문제\s*)?([0-9]{1,2})[\.\)]\s*(.+)$/;

  for (const raw of lines) {
    const line = cleanText(raw);
    const period = line.match(periodPattern);
    if (period) currentPeriod = `${period[1]}교시`;

    const q = line.match(qPattern);
    if (q && q[2].length >= 2) {
      questions.push({
        period: currentPeriod,
        number: Number(q[1]),
        text: q[2],
      });
    }
  }

  return questions;
}

async function extractPdf(round, year, source) {
  const data = new Uint8Array(fs.readFileSync(source));
  const loadingTask = pdfjs.getDocument({
    data,
    disableWorker: true,
    useSystemFonts: true,
  });
  const pdf = await loadingTask.promise;

  const pages = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent({ includeMarkedContent: false });
    const pageText = pageItemsToMarkdown(textContent.items);
    pages.push(`## Page ${pageNumber}\n\n${pageText || "_No extractable text found._"}`);
  }

  const body = pages.join("\n\n---\n\n");
  const questions = extractQuestions(body);

  const markdown = `# 제${Number(round)}회 정보관리기술사 문제지

\`\`\`yaml
exam: "정보관리기술사"
round: ${Number(round)}
year: ${year}
source:
  document: "${path.basename(source)}"
  local_path: "${source.replaceAll("/", "\\\\")}"
  repository_policy: "Original exam file is kept locally; Markdown extraction is stored in Git."
extraction:
  tool: "pdfjs-dist"
  pages: ${pdf.numPages}
  extracted_question_candidates: ${questions.length}
  notes:
    - "Text was extracted page by page."
    - "Question candidate extraction is heuristic and requires review."
\`\`\`

## Question Candidates

${questions.length ? questions.map((q) => `- ${q.period} ${q.number}. ${q.text}`).join("\n") : "_No question candidates extracted._"}

---

## Page Text

${body}
`;

  return { pages: pdf.numPages, questions: questions.length, markdown };
}

const outDir = "past-exams/information-management";
fs.mkdirSync(outDir, { recursive: true });

const indexRows = [];

for (const [round, year, source] of examFiles) {
  const result = await extractPdf(round, year, source);
  const output = `${outDir}/${round}.md`;
  fs.writeFileSync(output, result.markdown, "utf8");
  indexRows.push(`| ${Number(round)} | ${year} | PDF | ${result.pages} | ${result.questions} | converted | \`${source.replaceAll("/", "\\")}\` |`);
  console.log(`wrote ${output} (${result.pages} pages, ${result.questions} question candidates)`);
}

indexRows.push(`| ${Number(hwpPending.round)} | ${hwpPending.year} | HWP | - | - | pending conversion | \`${hwpPending.source.replaceAll("/", "\\")}\` |`);

const index = `# Information Management Past Exam Index

## Scope

This directory stores Markdown extractions of user-provided 정보관리기술사 past exam files. Original PDFs/HWP files are kept locally and are not committed to Git.

## Files

| Round | Year | Type | Pages | Question candidates | Status | Local path |
|---:|---:|---|---:|---:|---|---|
${indexRows.join("\n")}

## Notes

- Question candidates are extracted heuristically from the PDF text.
- Each round file preserves page-level text using \`## Page N\` headings.
- Round 116 is currently HWP and requires a separate HWP conversion path.
`;

fs.writeFileSync(`${outDir}/index.md`, index, "utf8");
