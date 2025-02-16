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
    id: "u4hero",
    title: "U4hero",
    logo: "/logo-u4hero.png",
    shortDescription:
      "Uma plataforma educacional que ajuda alunos a desenvolver habilidades emocionais e sociais para alcançar sucesso acadêmico e pessoal.",
    fullDescription:
      "U4hero é uma plataforma inovadora que revoluciona a forma como os estudantes desenvolvem suas habilidades socioemocionais. Através de uma abordagem gamificada e personalizada, ajudamos alunos a construir uma base sólida para o sucesso acadêmico e pessoal.",
    content: `<div class="max-w-4xl mx-auto">
      <p class="text-lg text-center mb-12">
        A U4Hero é uma startup educacional comprometida em ajudar alunos a desenvolver habilidades emocionais e sociais, transformando o aprendizado para alcançar sucesso acadêmico e pessoal. Em parceria com a Editec Sistemas, criamos uma solução digital completa para educadores e alunos.
      </p>
      
      <div class="space-y-16">
        <section>
          <h3 class="text-2xl font-semibold mb-6">Desafios</h3>
          <p class="text-lg">
            A U4Hero buscava uma plataforma que conectasse educadores e alunos, oferecendo funcionalidades robustas para monitorar, ensinar e engajar, promovendo o desenvolvimento socioemocional de forma dinâmica e intuitiva.
          </p>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-6">Nossa Solução</h3>
          <div class="space-y-8">
            <div>
              <h4 class="text-xl font-medium mb-3">Site Principal</h4>
              <p class="text-lg">
                Desenvolvemos um site principal moderno e informativo que apresenta a missão da U4Hero, suas soluções e benefícios, servindo como o ponto de entrada para as plataformas dedicadas.
              </p>
            </div>

            <div>
              <h4 class="text-xl font-medium mb-3">Plataforma para Educadores</h4>
              <p class="text-lg mb-4">
                Projetamos uma plataforma com funcionalidades como:
              </p>
              <ul class="space-y-3 ml-6">
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Indicadores de Conhecimento Socioemocional:</strong> Métricas detalhadas sobre o progresso dos alunos.</span>
                </li>
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Relatórios Personalizados:</strong> Ferramentas para geração de relatórios claros e visuais.</span>
                </li>
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Gerenciamento de Turmas e Alunos:</strong> Simplificação do processo de organização de turmas.</span>
                </li>
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Acesso a Conteúdos Socioemocionais:</strong> Repositório rico de materiais de aprendizado.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 class="text-xl font-medium mb-3">Plataforma para Alunos</h4>
              <p class="text-lg mb-4">
                Criamos uma plataforma interativa e envolvente com:
              </p>
              <ul class="space-y-3 ml-6">
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Jogos Educativos:</strong> Atividades que reforçam o aprendizado de habilidades socioemocionais.</span>
                </li>
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Perguntas e Desafios:</strong> Exercícios para incentivar pensamento crítico e autorreflexão.</span>
                </li>
                <li class="text-lg flex items-start">
                  <span class="text-primary mr-2">•</span>
                  <span><strong>Ambiente Intuitivo:</strong> Interface amigável que motiva os alunos.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-6">Resultados</h3>
          <p class="text-lg mb-4">
            Com a solução desenvolvida pela Editec Sistemas, a U4Hero conseguiu:
          </p>
          <ul class="space-y-3 ml-6">
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span>Oferecer ferramentas avançadas para educadores acompanharem o desenvolvimento socioemocional.</span>
            </li>
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span>Criar uma experiência única para os alunos, combinando aprendizado e diversão.</span>
            </li>
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span>Consolidar sua posição como referência em educação socioemocional.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>`,
    images: ["/u4hero-site.png", "/u4hero-smile.png", "/u4hero-app.png"],
  },
  {
    id: "szv-certificacoes",
    title: "SZV Certificações",
    logo: "/logo-szv.png",
    shortDescription:
      "Startup pioneira na emissão de selos verdes digitais para promover práticas sustentáveis e gestão eficiente de resíduos.",
    fullDescription:
      "SZV Certificações é uma startup pioneira que revoluciona o processo de certificação ambiental, tornando-o mais eficiente, transparente e acessível para empresas de todos os portes.",
    content: `<div class="max-w-4xl mx-auto">
  <p class="text-lg text-center mb-12">
    A SZV Certificações é uma startup pioneira na emissão de selos verdes digitais, promovendo práticas sustentáveis e gestão eficiente de resíduos.
  </p>

  <div class="space-y-16">
    <section>
      <h3 class="text-2xl font-semibold mb-6">Desafios</h3>
      <p class="text-lg">
        A SZV Certificações buscava uma plataforma capaz de integrar dados do Cadastro Ambiental Rural (CAR), monitorar alertas de queimadas e desmatamento, e fornecer selos verdes digitais de maneira automatizada e confiável.
      </p>
    </section>

    <section>
      <h3 class="text-2xl font-semibold mb-6">Nossa Solução</h3>
      <div class="space-y-8">
        <div>
          <h4 class="text-xl font-medium mb-3">Integração com Dados do CAR</h4>
          <p class="text-lg">
            Desenvolvemos uma integração robusta com o Cadastro Ambiental Rural, permitindo o acesso e o processamento automatizado de informações para facilitar a emissão de selos verdes.
          </p>
        </div>

        <div>
          <h4 class="text-xl font-medium mb-3">Monitoramento de Alertas Ambientais</h4>
          <p class="text-lg">
            Criamos um sistema de monitoramento em tempo real para:
          </p>
          <ul class="space-y-3 ml-6">
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Queimadas:</strong> Alertas automáticos sobre ocorrências de incêndios em áreas monitoradas.</span>
            </li>
            <li class="text-lg flex items-start">
              <span class="text-primary mr-2">•</span>
              <span><strong>Desmatamento:</strong> Identificação e notificação de atividades de desmatamento em regiões críticas.</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xl font-medium mb-3">Emissão de Selos Verdes Digitais</h4>
          <p class="text-lg">
            Desenvolvemos uma plataforma intuitiva que automatiza a emissão de selos verdes digitais com base em critérios personalizados, promovendo práticas sustentáveis e garantindo confiabilidade nos processos.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-2xl font-semibold mb-6">Resultados</h3>
      <p class="text-lg mb-4">
        Com a solução desenvolvida pela Editec Sistemas, a SZV Certificações alcançou:
      </p>
      <ul class="space-y-3 ml-6">
        <li class="text-lg flex items-start">
          <span class="text-primary mr-2">•</span>
          <span>Integração perfeita com dados do CAR, agilizando processos burocráticos.</span>
        </li>
        <li class="text-lg flex items-start">
          <span class="text-primary mr-2">•</span>
          <span>Monitoramento em tempo real, garantindo respostas rápidas a alertas ambientais.</span>
        </li>
        <li class="text-lg flex items-start">
          <span class="text-primary mr-2">•</span>
          <span>Maior reconhecimento no mercado como referência em práticas sustentáveis.</span>
        </li>
      </ul>
    </section>
  </div>
</div>`,
    images: ["/szv-imagem-1.jpg", "/szv-imagem-2.png"],
  },
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
