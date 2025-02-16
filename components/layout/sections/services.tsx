import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Link,
  Network,
  MessageCircle,
  Smile,
  Monitor,
  Lightbulb,
  Layout,
  Code,
  Smartphone,
  AppWindow,
  Bot,
  Repeat,
  LifeBuoy,
  Wrench,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
  icons: LucideIcon[];
}

const serviceList: ServiceProps[] = [
  {
    title: 'Desenvolvimento de Sistemas Sob Demanda',
    description:
      'Criamos sistemas personalizados para atender às necessidades específicas do seu negócio. De ERPs a CRMs e soluções únicas, nossos sistemas são projetados para otimizar processos, integrar operações e impulsionar resultados.',
    pro: 0,
    icons: [Code],
  },
  {
    title: 'Integração de Sistemas',
    description:
      'Conectamos diferentes sistemas e ferramentas para criar soluções unificadas que melhoram a eficiência e a comunicação entre departamentos.',
    pro: 0,
    icons: [Network],
  },
  {
    title: 'Chatbots e Assistentes Virtuais',
    description:
      'Desenvolvemos assistentes virtuais para atendimento ao cliente, capazes de operar 24/7 e responder a dúvidas ou processar solicitações de forma ágil e eficiente.',
    pro: 0,
    icons: [MessageCircle],
  },
  {
    title: 'Consultoria em Transformação Digital',
    description:
      'Ajudamos empresas a modernizar seus processos e se adaptar ao ambiente digital, identificando oportunidades de inovação tecnológica e otimizando recursos.',
    pro: 0,
    icons: [Lightbulb],
  },

  {
    title: 'Aplicativos Móveis',
    description:
      'Desenvolvemos aplicativos intuitivos e de alta performance para Android e iOS, garantindo uma experiência de usuário excelente e soluções que conectam empresas aos seus clientes, onde quer que estejam.',
    pro: 0,
    icons: [Smartphone],
  },
  {
    title: 'Automação de Processos (RPA)',
    description:
      'Implementamos soluções de automação com Robotic Process Automation (RPA) para reduzir tarefas manuais repetitivas, aumentar a eficiência operacional e permitir que sua equipe foque no que realmente importa.',
    pro: 0,
    icons: [Bot],
  },
  {
    title: 'Suporte e Manutenção',
    description:
      'Oferecemos suporte técnico contínuo e planos de manutenção para garantir que seus sistemas e aplicativos estejam sempre atualizados, seguros e funcionando perfeitamente.',
    pro: 0,
    icons: [Wrench],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Serviços
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Cresça seu negócio
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Oferecemos soluções completas e personalizadas para impulsionar a
        transformação digital do seu negócio.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro, icons }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <div className="flex gap-2 mb-2">
                {icons.map((Icon, index) => (
                  <Icon key={index} className="w-8 h-8 text-primary" />
                ))}
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="text-md">
                {description}
              </CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
