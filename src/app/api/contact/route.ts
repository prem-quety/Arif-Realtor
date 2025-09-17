import { Resend } from "resend";

// ⚠️ Inline API key (unsafe in prod)
const resend = new Resend("re_btGsVdmi_94hgfDo6jiMTyaymzCuKQUy6");

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const name = form.get("name") || "—";
    const email = form.get("email") || "—";
    const phone = form.get("phone") || "—";
    const message = form.get("message") || "—";

    await resend.emails.send({
      from: "onboarding@resend.dev", // verified sender
      to: "prem.kumar@querytel.com", // your inbox
      subject: `New Inquiry from ${name}`,
      text: `
New contact form submission

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
          <h2 style="margin-bottom: 10px;">📩 New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          <hr style="margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return new Response("Email failed", { status: 500 });
  }
}
