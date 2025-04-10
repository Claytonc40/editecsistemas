export interface CaseStudy {
  id: string;
  title: string;
  logo: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  content: string;
}

export const cases: CaseStudy[] = [
  {
    id: "conecta-atende",
    title: "Conecta Atende",
    logo: "/conecta-atende-logo.png",
    shortDescription:
      "Plataforma que combina automação do WhatsApp com um gerenciador de pedidos e produtos para atendimento ágil e eficiente.",
    fullDescription:
      "Conecta Atende é uma solução completa que integra automação de WhatsApp com gestão de pedidos, permitindo que empresas otimizem seu atendimento ao cliente e aumentem suas vendas.",
    content: `<div class="max-w-4xl mx-auto">
  <p class="text-lg text-center mb-12">
    A Conecta Atende é uma solução completa que integra automação de WhatsApp com gestão de pedidos, permitindo que empresas otimizem seu atendimento ao cliente e aumentem suas vendas.
  </p>

  <div class="space-y-16">
    <section>
      <h3 class="text-2xl font-semibold mb-6">Desafios</h3>
      <p class="text-lg">
        A Conecta Atende precisava de uma plataforma que combinasse automação do WhatsApp com um gerenciador de pedidos e produtos, garantindo um atendimento ágil e eficiente, além de integração com sistemas de comunicação em tempo real.
      </p>
    </section>

    <section>
      <h3 class="text-2xl font-semibold mb-6">Nossa Solução</h3>
      <div class="space-y-8">
        <div>
          <h4 class="text-xl font-medium mb-3">Integração com APIs do WhatsApp</h4>
          <p class="text-lg">
            Implementamos uma integração robusta com as APIs do WhatsApp, permitindo o envio e o recebimento de mensagens automáticas, além de oferecer suporte a mensagens personalizadas e fluxos automatizados de atendimento.
          </p>
        </div>

        <div>
          <h4 class="text-xl font-medium mb-3">Chat em Tempo Real</h4>
          <p class="text-lg">
            Criamos um sistema de chat em tempo real, permitindo que os atendentes interajam diretamente com os clientes enquanto gerenciam pedidos e produtos em uma única interface.
          </p>
        </div>

        <div>
          <h4 class="text-xl font-medium mb-3">Gerenciador de Pedidos e Produtos</h4>
          <p class="text-lg">
            Desenvolvemos um gerenciador integrado que possibilita:
          </p>
          <ul class="space-y-3 ml-6">
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Gestão Centralizada:</strong> Controle completo de pedidos e produtos em uma única plataforma.</span>
            </li>
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Automação de Processos:</strong> Fluxos automatizados para confirmação de pedidos e notificações aos clientes.</span>
            </li>
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Interface Intuitiva:</strong> Ferramentas fáceis de usar para empresas de todos os tamanhos.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-2xl font-semibold mb-6">Resultados</h3>
      <p class="text-lg mb-4">
        Com a solução desenvolvida pela Editec Sistemas, a Conecta Atende conseguiu:
      </p>
      <ul class="space-y-3 ml-6">
        <li class="text-lg flex items-start">
          <span class="text-primary mr-2">•</span>
          <span>Automatizar o atendimento pelo WhatsApp, aumentando a eficiência operacional.</span>
        </li>
        <li class="text-lg flex items-start">
          <span class="text-primary mr-2">•</span>
          <span>Melhorar a experiência do cliente com respostas rápidas e precisas.</span>
        </li>
        <li class="text-lg flex items-start">
          <span class="text-primary mr-2">•</span>
          <span>Integrar gestão de pedidos e comunicação em um único sistema.</span>
        </li>
      </ul>
    </section>
  </div>
</div>`,
    images: [
      "/conecta-atende-1.png",
      "/conecta-atende-2.png",
      "/conecta-atende-3.png",
    ],
  },
  {
    id: "savedate",
    title: "SaveDate",
    logo: "/logo-savedate.png",
    shortDescription:
      "Sistema inovador para controle de validade de produtos e impressão de etiquetas, otimizando a gestão de vencimentos em estabelecimentos comerciais.",
    fullDescription:
      "SaveDate é uma solução completa que revoluciona o controle de validade de produtos, permitindo que empresas gerenciem de forma eficiente seus prazos de vencimento e automatizem a impressão de etiquetas.",
    content: `<div class="max-w-4xl mx-auto">
      <p class="text-lg text-center mb-12">
        O SaveDate é uma plataforma especializada em gestão de validade de produtos, oferecendo controle preciso de vencimentos e impressão automatizada de etiquetas para estabelecimentos comerciais.
      </p>
      
      <div class="space-y-16">
        <section>
          <h3 class="text-2xl font-semibold mb-6">Desafios</h3>
          <p class="text-lg">
            O SaveDate surgiu da necessidade de estabelecimentos comerciais em ter um controle eficiente sobre a validade de seus produtos, evitando perdas e garantindo a segurança dos consumidores.
          </p>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-6">Nossa Solução</h3>
          <div class="space-y-8">
            <div>
              <h4 class="text-xl font-medium mb-3">Controle de Validade</h4>
              <p class="text-lg">
                Desenvolvemos um sistema completo que oferece:
              </p>
              <ul class="space-y-3 ml-6">
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Monitoramento em Tempo Real:</strong> Acompanhamento detalhado das datas de vencimento de todos os produtos.</span>
                </li>
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Alertas Automáticos:</strong> Notificações antecipadas sobre produtos próximos ao vencimento.</span>
                </li>
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Relatórios Gerenciais:</strong> Análises e estatísticas sobre o controle de validade.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-xl font-medium mb-3">Impressão de Etiquetas</h4>
              <p class="text-lg">
                Sistema de impressão inteligente com:
              </p>
              <ul class="space-y-3 ml-6">
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Etiquetas Personalizadas:</strong> Modelos adaptáveis às necessidades de cada estabelecimento.</span>
                </li>
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Impressão em Lote:</strong> Capacidade de gerar múltiplas etiquetas simultaneamente.</span>
                </li>
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Códigos de Barras:</strong> Geração automática para rastreamento eficiente.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-6">Resultados</h3>
          <p class="text-lg mb-4">
            Com a implementação do SaveDate, os estabelecimentos conseguiram:
          </p>
          <ul class="space-y-3 ml-6">
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span>Redução significativa de perdas por vencimento de produtos.</span>
            </li>
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span>Otimização do tempo da equipe com processos automatizados.</span>
            </li>
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span>Maior controle e segurança na gestão de produtos perecíveis.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>`,
    images: [
      "/savedate-dashboard.png",
      "/savedate-etiquetas.png",
      "/savedate-controle.png",
    ],
  },
];
