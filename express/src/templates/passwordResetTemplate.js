export const passwordResetTemplate = (resetLink) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
          
          <tr>
            <td align="center" style="padding:32px;background:#2563eb;">
              <h1 style="margin:0;color:#ffffff;font-size:28px;">
                Password Reset
              </h1>
            </td>
          </tr>

          <tr>
            <td style="padding:40px;">
              <h2 style="margin-top:0;color:#111827;">
                Forgot your password?
              </h2>

              <p style="font-size:16px;line-height:24px;color:#4b5563;">
                We received a request to reset your password. Click the button below to create a new one.
              </p>

              <div style="text-align:center;margin:35px 0;">
                <a
                  href="${resetLink}"
                  style="
                    display:inline-block;
                    background:#2563eb;
                    color:#ffffff;
                    text-decoration:none;
                    padding:14px 30px;
                    border-radius:8px;
                    font-weight:bold;
                    font-size:16px;
                  "
                >
                  Reset Password
                </a>
              </div>

              <p style="font-size:14px;line-height:22px;color:#6b7280;">
                This link will expire in <strong>1 hour</strong>.
              </p>

              <p style="font-size:14px;line-height:22px;color:#6b7280;">
                If the button doesn't work, copy and paste this URL into your browser:
              </p>

              <p style="word-break:break-all;">
                <a href="${resetLink}" style="color:#2563eb;">
                  ${resetLink}
                </a>
              </p>

              <hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0;" />

              <p style="font-size:14px;line-height:22px;color:#6b7280;">
                If you didn't request a password reset, you can safely ignore this email.
              </p>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:20px;background:#f9fafb;color:#9ca3af;font-size:12px;">
              © ${new Date().getFullYear()} Nexora. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
