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

const materialNote = "이 자료는 과거 강의자료입니다. 2016~2017 버전명이 포함되어 있고 파일 수정일은 2019-03-13입니다. 최신 기술, 법/제도, 표준, 제품 동향은 반드시 별도 검증이 필요합니다.";

const docs = [
  {
    group: "management-strategy",
    id: "MS-P1",
    title: "경영전략 Part I",
    outputName: "part-i.md",
    document: "1. 경영전략_V5.3_Part I.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/1. 경영전략/1. 경영전략_V5.3_Part I.pdf",
  },
  {
    group: "management-strategy",
    id: "MS-P2",
    title: "경영전략 Part II",
    outputName: "part-ii.md",
    document: "2. 경영전략_V4.7_Part II.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/1. 경영전략/2. 경영전략_V4.7_Part II.pdf",
  },
  {
    group: "software-engineering",
    id: "SE-P1",
    title: "SW공학 Part I",
    outputName: "sw-engineering-part-i.md",
    document: "1. SW공학_Part I_V5.6_20170914.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/2. SW공학/1. SW공학_Part I_V5.6_20170914.pdf",
  },
  {
    group: "software-engineering",
    id: "SE-P2",
    title: "프로젝트관리",
    outputName: "project-management.md",
    document: "2. 프로젝트관리_V1.3_20170914.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/2. SW공학/2. 프로젝트관리_V1.3_20170914.pdf",
  },
  {
    group: "software-engineering",
    id: "SE-P3",
    title: "SW공학 Part II",
    outputName: "sw-engineering-part-ii.md",
    document: "2. SW공학_Part II_V6.2_20170920.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/3. SW공학ii/2. SW공학_Part II_V6.2_20170920.pdf",
  },
  {
    group: "digital-service",
    id: "DS-P1",
    title: "디지털서비스",
    outputName: "digital-service-i.md",
    document: "1. 디지털서비스_V6.0_I_20170718.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/4. 디지털서비스/1. 디지털서비스_V6.0_I_20170718.pdf",
  },
  {
    group: "digital-network",
    id: "DN-P1",
    title: "디지털네트워크 Part I",
    outputName: "digital-network-part-i.md",
    document: "1. 디지털네트워크_V6.1_Part I_20171014.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/5. 디지털네트워크/1. 디지털네트워크_V6.1_Part I_20171014.pdf",
  },
  {
    group: "digital-network",
    id: "DN-P2",
    title: "디지털네트워크 Part II",
    outputName: "digital-network-part-ii.md",
    document: "2. 디지털네트워크_V6.1_Part II.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/5. 디지털네트워크/2. 디지털네트워크_V6.1_Part II.pdf",
  },
  {
    group: "digital-security",
    id: "SEC-P1",
    title: "디지털시큐리티 Part I",
    outputName: "digital-security-part-i.md",
    document: "1. 디지털시큐리티_V5.7_Part I_20171021.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/6. 디지털 보안/1. 디지털시큐리티_V5.7_Part I_20171021.pdf",
  },
  {
    group: "digital-security",
    id: "SEC-P2",
    title: "디지털시큐리티 Part II",
    outputName: "digital-security-part-ii.md",
    document: "2. 디지털시큐리티_V5.2_Part II_20171021.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/6. 디지털 보안/2. 디지털시큐리티_V5.2_Part II_20171021.pdf",
  },
  {
    group: "database",
    id: "DB-P1",
    title: "데이터베이스 I",
    outputName: "database-i.md",
    document: "1. 데이터베이스 I_V6.7_20171027.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/7. 데이터베이스/1. 데이터베이스 I_V6.7_20171027.pdf",
  },
  {
    group: "computer-architecture",
    id: "CA-P1",
    title: "CA와 System I - 1번째 파일",
    outputName: "ca-system-i-file-1.md",
    document: "1. CA(Computer Architecture)와 System I_V4.0_20161223(수정본)_1번째 화일.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/8. CA/1. CA(Computer Architecture)와 System I_V4.0_20161223(수정본)_1번째 화일.pdf",
  },
  {
    group: "computer-architecture",
    id: "CA-P2",
    title: "CA와 System I - 2번째 파일",
    outputName: "ca-system-i-file-2.md",
    document: "2. CA(Computer Architecture)와 System I_V4.1_20161228_2번째 찍는 화일.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/8. CA/2. CA(Computer Architecture)와 System I_V4.1_20161228_2번째 찍는 화일.pdf",
  },
  {
    group: "operating-system",
    id: "OS-P1",
    title: "Operating System",
    outputName: "operating-system.md",
    document: "1. OS(Operating System)_V3.0_20161220(수정본).pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/9. OS/1. OS(Operating System)_V3.0_20161220(수정본).pdf",
  },
  {
    group: "fundamentals",
    id: "FD-P1",
    title: "Data Structure",
    outputName: "data-structure.md",
    document: "1. Data Structure_V3.9.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/10.기타(표지없이 전체 4쪽모아찍기)/1. Data Structure_V3.9.pdf",
  },
  {
    group: "fundamentals",
    id: "FD-P2",
    title: "Algorithm",
    outputName: "algorithm.md",
    document: "2. Algorithm V3.7.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/10.기타(표지없이 전체 4쪽모아찍기)/2. Algorithm V3.7.pdf",
  },
  {
    group: "fundamentals",
    id: "FD-P3",
    title: "AI",
    outputName: "ai.md",
    document: "3. AI V1.5.pdf",
    source: "C:/Users/ssysis8/Downloads/9주차_신규_pdf (2) (2)/10.기타(표지없이 전체 4쪽모아찍기)/3. AI V1.5.pdf",
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

  return {
    pageCount: pdf.numPages,
    markdown: `# ${docInfo.title}

\`\`\`yaml
source:
  id: ${docInfo.id}
  document: "${docInfo.document}"
  local_path: "${docInfo.source.replaceAll("/", "\\\\")}"
  repository_policy: "Original PDF is kept locally; Markdown extraction is stored in Git."
material_note: "${materialNote}"
extraction:
  tool: "pdfjs-dist"
  pages: ${pdf.numPages}
  notes:
    - "Text was extracted page by page."
    - "Original images, charts, and exact visual layout are not embedded in this pass."
\`\`\`

> 현행성 주의: ${materialNote}

${sections.join("\n\n---\n\n")}
`,
  };
}

function writeIndex(group, groupDocs, results) {
  const dir = `sources/${group}`;
  const rows = groupDocs.map((doc) => {
    const result = results.get(doc.id);
    return `| ${doc.id} | ${doc.document} | \`${doc.source.replaceAll("/", "\\")}\` | ${result?.pageCount ?? "?"} | 1차 텍스트 추출 완료 |`;
  });

  const index = `# ${group} Source Index

## 원본 자료

> 현행성 주의: ${materialNote}

| ID | Document | Local path | Pages | Status |
|---|---|---|---:|---|
${rows.join("\n")}

## 변환 원칙

- PDF의 페이지/장/절 구조를 유지해 Markdown으로 변환한다.
- 원본 PDF는 GitHub에 저장하지 않는다.
- 1차 변환은 원본 이미지, 차트, 정확한 시각 배치를 포함하지 않는다.
- 최신 기술, 표준, 법/제도, 제품 동향은 \`trends/\` 또는 별도 최신 자료로 보강한다.

## 변환 이력

- 2026-08-12: \`scripts/convert-pdf-sources.mjs\`로 PDF.js 기반 페이지별 텍스트 추출을 수행했다.
`;

  fs.writeFileSync(`${dir}/original-index.md`, index, "utf8");
}

const results = new Map();

for (const doc of docs) {
  const outputPath = `sources/${doc.group}/${doc.outputName}`;
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  const result = await extractDocument(doc);
  fs.writeFileSync(outputPath, result.markdown, "utf8");
  results.set(doc.id, { pageCount: result.pageCount, outputPath });
  console.log(`wrote ${outputPath} (${result.pageCount} pages)`);
}

const groups = new Map();
for (const doc of docs) {
  if (!groups.has(doc.group)) groups.set(doc.group, []);
  groups.get(doc.group).push(doc);
}
for (const [group, groupDocs] of groups) {
  writeIndex(group, groupDocs, results);
}
