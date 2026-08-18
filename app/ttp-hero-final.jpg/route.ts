import p0 from "./p0";
import p1 from "./p1";
import p2 from "./p2";
import p3 from "./p3";

export const dynamic = "force-static";

export async function GET() {
  const base64 = p0 + p1 + p2 + p3;
  const bytes = Buffer.from(base64, "base64");

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-TTP-Hero": "front-page-final-v1",
    },
  });
}
