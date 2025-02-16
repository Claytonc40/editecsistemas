import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Quais tipos de sistemas empresariais vocês desenvolvem?",
    answer:
      "Na Editec Sistemas Desenvolvimento, criamos sistemas personalizados para atender às necessidades específicas de cada negócio, incluindo ERP, CRM, sistemas de gerenciamento de estoque, plataformas de e-commerce, sistemas de automação de processos e muito mais.",
    value: "item-1",
  },
  {
    question: "Quanto tempo leva para desenvolver um sistema empresarial?",
    answer:
      "O tempo de desenvolvimento varia de acordo com a complexidade e os requisitos do projeto. Após entender suas necessidades, fornecemos um cronograma detalhado para cada etapa do desenvolvimento.",
    value: "item-2",
  },
  {
    question: "Como é feito o suporte após a entrega do sistema?",
    answer:
      "Oferecemos suporte técnico contínuo, garantindo que o sistema funcione corretamente e atenda às suas necessidades. Também disponibilizamos planos de manutenção para atualizações e melhorias.",
    value: "item-3",
  },
  {
    question:
      "Vocês oferecem consultoria para definir as necessidades do meu negócio?",
    answer:
      "Sim! Antes de começar qualquer projeto, realizamos uma análise detalhada do seu negócio para entender suas demandas e propor a melhor solução.",
    value: "item-4",
  },
  {
    question: "O sistema será compatível com dispositivos móveis?",
    answer:
      "Sim! Desenvolvemos sistemas responsivos, que funcionam perfeitamente em dispositivos móveis, desktops e tablets, garantindo acessibilidade e praticidade para os usuários.",
    value: "item-5",
  },
  {
    question: "Vocês trabalham com integração de sistemas existentes?",
    answer:
      "Sim, podemos integrar sistemas existentes para melhorar a eficiência dos seus processos, conectando diferentes ferramentas em uma solução unificada.",
    value: "item-6",
  },
  {
    question:
      "Meu negócio é pequeno. Vocês atendem empresas de qualquer porte?",
    answer:
      "Sim! Atendemos empresas de todos os tamanhos, desde pequenos negócios até grandes corporações, com soluções personalizadas que se adaptam às suas necessidades.",
    value: "item-8",
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer:
      "Você pode solicitar um orçamento preenchendo o formulário na nossa página de contato ou entrando em contato diretamente pelo WhatsApp ou e-mail. Responderemos o mais rápido possível!",
    value: "item-9",
  },
  {
    question: "Vocês oferecem garantia para os sistemas desenvolvidos?",
    answer:
      "Sim, garantimos a funcionalidade dos sistemas entregues e oferecemos um período de garantia para eventuais ajustes ou correções necessários.",
    value: "item-10",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[800px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Perguntas Frequentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
