import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: 'CalendarDays',
    title: 'Planejamento',
    description:
      'Definimos os objetivos do sprint e priorizamos as tarefas no backlog, garantindo clareza para toda a equipe.',
  },
  {
    icon: 'Code',
    title: 'Execução',
    description:
      'Desenvolvemos as funcionalidades planejadas, mantendo o foco na entrega incremental de valor.',
  },
  {
    icon: 'CircleCheck',
    title: 'Revisão',
    description:
      'Apresentamos o que foi desenvolvido durante o sprint e coletamos feedbacks para ajustes e melhorias.',
  },
  {
    icon: 'RotateCw',
    title: 'Retrospectiva',
    description:
      'Analisamos o que funcionou bem e o que pode ser melhorado para aumentar a eficiência nos próximos sprints.',
  },
];

export const BenefitsSection = () => {
  return (
    <section id="methodology" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            Metodologia
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa Abordagem com SCRUM
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Adotamos a metodologia SCRUM para garantir agilidade, colaboração e
            entrega contínua de valor. Dividimos o desenvolvimento em etapas
            claras e iterativas, permitindo ajustes rápidos e maior alinhamento
            com os objetivos do cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
