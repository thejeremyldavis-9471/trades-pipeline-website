"use client";

import Script from "next/script";

export function GhlForm() {
  return (
    <div className="w-full">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/mtB1ZdLuPr7QjqdLeGDF"
        style={{ width: "100%", height: "1218px", border: "none", borderRadius: "8px" }}
        id="inline-mtB1ZdLuPr7QjqdLeGDF"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Contact Form"
        data-height="1218"
        data-layout-iframe-id="inline-mtB1ZdLuPr7QjqdLeGDF"
        data-form-id="mtB1ZdLuPr7QjqdLeGDF"
        title="Website Contact Form"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  );
}
