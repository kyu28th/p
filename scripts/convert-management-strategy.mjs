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

const pdfjsPath = "C:/Users/ssysis8/AppData/Local/OpenAI/Codex/runtimes/cua_node/23828fd353da361d/bin/node_modules/pdfjs-dist/legacy/build/pdf.mjs";
const pdfjs = await import(pathToFileURL(pdfjsPath).href);

const docs = [
  {
    id: "MS-P1",
    title: "경영전략 Part I",
    document: "1. 경영전략_V5.3_Part I.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/1. 경영전략/1. 경영전략_V5.3_Part I.pdf",
    output: "sources/management-strategy/part-i.md",
  },
  {
    id: "MS-P2",
    title: "경영전략 Part II",
    document: "2. 경영전략_V4.7_Part II.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/1. 경영전략/2. 경영전략_V4.7_Part II.pdf",
    output: "sources/management-strategy/part-ii.md",
  },
];

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

async function extractDocument(docInfo) {
  const data = new Uint8Array(fs.readFileSync(docInfo.source));
  const loadingTask = pdfjs.getDocument({
    data,
    disableWorker: true,
    useSystemFonts: true,
  });
  const pdf = await loadingTask.promise;

  const sections = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent({ includeMarkedContent: false });
    const pageText = pageItemsToMarkdown(textContent.items);
    sections.push(`## Page ${pageNumber}\n\n${pageText || "_No extractable text found._"}`);
  }

  return `# ${docInfo.title}

\`\`\`yaml
source:
  id: ${docInfo.id}
  document: "${docInfo.document}"
  local_path: "${docInfo.source.replaceAll("/", "\\\\")}"
  repository_policy: "Original PDF is kept locally; Markdown extraction is stored in Git."
extraction:
  tool: "pdfjs-dist"
  pages: ${pdf.numPages}
  notes:
    - "Text was extracted page by page."
    - "Original images, charts, and exact visual layout are not embedded in this pass."
\`\`\`

${sections.join("\n\n---\n\n")}
`;
}

for (const doc of docs) {
  const markdown = await extractDocument(doc);
  fs.mkdirSync(path.dirname(doc.output), { recursive: true });
  fs.writeFileSync(doc.output, markdown, "utf8");
  console.log(`wrote ${doc.output}`);
}
