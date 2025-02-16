import { mailOptions, transporter } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message, phone } =
      await req.json();

    await transporter.sendMail({
      ...mailOptions,
      to: "contato@editecsistema.com.br",
      replyTo: email,
      subject: `Novo contato via site: ${subject}`,
      text: "",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">Novo contato através do site</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone}</p>
            <p><strong>Assunto:</strong> ${subject}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      ...mailOptions,
      to: email,
      subject: "Recebemos sua mensagem - Editec Sistemas",
      text: "",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #333;">Olá ${firstName}!</h2>
          <p>Obrigado por entrar em contato com a Editec Sistemas.</p>
          <p>Recebemos sua mensagem e retornaremos em breve.</p>
          <p>Atenciosamente,<br>Equipe Editec Sistemas</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { message: "Erro ao enviar mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
