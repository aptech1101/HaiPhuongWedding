export default function handler(req, res) {
  const { name = "Quý Khách" } = req.query;
  const decodedName = decodeURIComponent(name.replace(/-/g, " "));

  const html = `
      <!DOCTYPE html>
      <html lang="vi">
        <head>
          <meta charset="UTF-8">
          <meta property="og:title" content="💖 Thiệp cưới — Dũng & Mỹ 💖" />
          <meta property="og:description" content="Trân trọng kính mời ${decodedName} đến dự tiệc cưới vào ngày 02/07/2025." />
          <meta property="og:image" content="https://dungmywedding.vercel.app/images/thiepmoi.jpg" />
          <meta property="og:url" content="https://dungmywedding.vercel.app/og?name=${name}" />
          <meta property="og:type" content="website" />
        </head>
        <body></body>
      </html>
    `;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(html);
}
