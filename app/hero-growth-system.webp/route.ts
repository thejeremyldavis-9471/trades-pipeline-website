import a0 from "./a0";
import a1 from "./a1";
import a2 from "./a2";
import c2 from "./c2";
import c3 from "./c3";
import c4 from "./c4";
import c5 from "./c5";

export const dynamic = "force-static";

export async function GET() {
  const base64 = a0 + a1 + a2 + c2 + c3 + c4 + c5;
  const bytes = Buffer.from(base64, "base64");

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=3600, must-revalidate",
      "X-TTP-Hero": "locked-2026-08-17",
    },
  });
}
