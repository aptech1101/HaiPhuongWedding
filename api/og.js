export default function handler(req, res) {
  const { name = "Quý Khách" } = req.query;
  const decodedName = decodeURIComponent(name.replace(/-/g, " "));

  const html = `
<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <meta property="og:title" content="💖 Thiệp Cưới — Dũng & Mỹ 💌 Gửi: ${decodedName} 💖" />
    <meta property="og:description" content="Trân trọng kính mời ${decodedName} đến dự tiệc cưới của Dũng & Mỹ vào ngày 02/07/2025 ♡" />
    <meta property="og:image" content="https://dungmywedding.vercel.app/images/thiepmoi.jpg" />
    <meta property="og:url" content="https://dungmywedding.vercel.app/og?name=${name}" />
    <meta property="og:type" content="website" />
    <meta http-equiv="refresh" content="0; url=/?name=${name}" />
    <style>
      body {
        font-family: sans-serif;
        background: #fff5f8;
        color: #d63384;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    Đang chuyển bạn đến thiệp cưới...
  </body>
</html>
`;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
