import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Cpu",
    title: "Tecnologia de Ponta",
    description:
      "Utilizamos as tecnologias mais avançadas para garantir desempenho, segurança e inovação em cada projeto.",
  },
  {
    icon: "UserCheck",
    title: "Foco no Cliente",
    description:
      "Trabalhamos lado a lado com você, entendendo suas necessidades para entregar soluções personalizadas e eficazes.",
  },
  {
    icon: "Zap",
    title: "Agilidade nos Projetos",
    description:
      "Adotamos metodologias ágeis para garantir entregas rápidas sem comprometer a qualidade.",
  },
  {
    icon: "Layers",
    title: "Soluções Escaláveis",
    description:
      "Desenvolvemos sistemas que crescem junto com o seu negócio, acompanhando as mudanças do mercado.",
  },
  {
    icon: "Merge",
    title: "Integração Total",
    description:
      "Conectamos diferentes sistemas e tecnologias para criar soluções unificadas e eficientes.",
  },
  {
    icon: "LifeBuoy",
    title: "Suporte Contínuo",
    description:
      "Estamos sempre disponíveis para ajudar, oferecendo suporte técnico dedicado e manutenção contínua.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        O Que Nos Torna Diferentes
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Na Editec Sistemas, acreditamos que a diferença está nos detalhes. Nossa
        abordagem única, aliada ao compromisso com a excelência, nos permite
        entregar soluções que vão além das expectativas.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
