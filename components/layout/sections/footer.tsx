import { Separator } from '@/components/ui/separator';
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-16 sm:py-24">
      <div className="p-8 bg-card/50 backdrop-blur-sm border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-full.png"
                alt="Editec Sistemas Logo"
                width={190}
                height={75}
                className="w-[160px] md:w-[190px] h-auto"
              />
            </Link>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="text-sm">Rua Exemplo, 123 - Cidade, Estado</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-sm">+55 (11) 9999-9999</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-sm">contato@editec.com.br</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Menu</h3>
            <nav className="grid grid-cols-1 gap-3">
              <Link
                href="#methodology"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Metodologia
              </Link>
              <Link
                href="#testimonials"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Depoimentos
              </Link>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Projetos
              </Link>
              <Link
                href="#services"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Serviços
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Ajuda</h3>
            <nav className="grid grid-cols-1 gap-3">
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                Fale Conosco
              </Link>
              <Link
                href="#faq"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
              >
                FAQ
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Inscreva-se para receber atualizações e novidades sobre nossos
              serviços.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 text-sm rounded-lg bg-background border border-secondary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Editec Sistemas. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors duration-200"
            >
              Privacidade
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors duration-200"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
