import { cvFileName, cvMarkdown } from "../../src/features/cv/cvContent";

export function GET() {
  return new Response(cvMarkdown, {
    headers: {
      "content-disposition": `attachment; filename="${cvFileName}"`,
      "content-type": "text/markdown; charset=utf-8",
    },
  });
}
