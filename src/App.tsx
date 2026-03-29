/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Zap, 
  Lock, 
  Globe, 
  MessageCircle, 
  X, 
  ChevronRight, 
  Smartphone, 
  Wifi, 
  Headphones,
  CheckCircle2,
  AlertCircle,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Constants ---
const CONTACTS = {
  ADM1: { name: 'ADM DARK 1', phone: '+258872824538' },
  ADM2: { name: 'ADM DARK 2', phone: '+258857753890' }
};

const PRICING_PLANS = [
  { id: '1w', duration: '1 Semana', price: '50 MT', popular: false },
  { id: '2w', duration: '2 Semanas', price: '70 MT', popular: false },
  { id: '3w', duration: '3 Semanas', price: '90 MT', popular: true },
  { id: '7m', duration: '7 Meses', price: '100 MT', popular: false },
];

const BOT_COMMANDS = [
  { id: 'what_is_vpn', label: 'O que é VPN?' },
  { id: 'unlimited_vpn', label: 'O que é VPN Ilimitado?' },
  { id: 'prices', label: 'Ver Preços' },
  { id: 'how_to_buy', label: 'Como Comprar?' },
  { id: 'contact_human', label: 'Falar com Humano' }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-600/20">
          <Shield className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tighter text-zinc-900">DARK VPN</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-600">
        <a href="#features" className="hover:text-orange-600 transition-colors">Funcionalidades</a>
        <a href="#about" className="hover:text-orange-600 transition-colors">O que é?</a>
        <a href="#pricing" className="hover:text-orange-600 transition-colors">Preços</a>
        <a href="#pricing" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full transition-all shadow-md shadow-orange-600/20">Comprar Agora</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-zinc-50">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-orange-600/10 border border-orange-600/20 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6">
          Acesso Ilimitado & Seguro
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 mb-6 tracking-tight leading-[0.9]">
          NAVEGUE SEM <br />
          <span className="text-orange-600">LIMITES</span> COM A <br />
          DARK VPN
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-600 text-lg mb-10">
          Proteja sua conexão, contorne bloqueios e navegue com velocidade máxima 24 horas por dia. A solução definitiva para sua liberdade digital.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#pricing" 
            className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2 group"
          >
            VER PLANOS DE ACESSO
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#about" 
            className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-900 font-bold rounded-xl border border-zinc-200 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            SABER MAIS
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 rounded-3xl bg-white border border-zinc-200 hover:border-orange-600/50 hover:shadow-xl hover:shadow-orange-600/5 transition-all group">
    <div className="w-14 h-14 rounded-2xl bg-orange-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-orange-600 w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
    <p className="text-zinc-500 leading-relaxed">{description}</p>
  </div>
);

const Features = () => (
  <section id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Zap} 
          title="Velocidade Máxima" 
          description="Servidores otimizados para garantir que sua conexão não sofra lentidão, ideal para streaming e downloads."
        />
        <FeatureCard 
          icon={Lock} 
          title="Privacidade Total" 
          description="Criptografia de ponta a ponta. Seus dados e seu histórico de navegação ficam protegidos de curiosos."
        />
        <FeatureCard 
          icon={Globe} 
          title="Acesso Global" 
          description="Contorne bloqueios geográficos e acesse sites ou aplicativos que estão restritos na sua região ou operadora."
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-zinc-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-zinc-900 mb-8 leading-tight">
            O QUE É UM <br />
            <span className="text-orange-600">VPN ILIMITADO?</span>
          </h2>
          <div className="space-y-6 text-zinc-600">
            <p className="text-lg">
              VPN significa <span className="text-zinc-900 font-bold italic">Virtual Private Network</span> (Rede Privada Virtual).
            </p>
            <div className="p-6 rounded-2xl bg-white border-l-4 border-orange-600 shadow-sm">
              <p className="italic text-zinc-800">
                "👉 É um aplicativo que protege sua conexão e pode ajudar você a navegar com mais liberdade na internet."
              </p>
            </div>
            <p>
              Quando você usa internet normal de uma operadora como a Vodacom, tudo passa diretamente por ela. Isso significa que ela pode limitar sua velocidade, bloquear certos sites ou controlar o tipo de acesso que você tem.
            </p>
            <div className="space-y-4">
              <h4 className="text-zinc-900 font-bold flex items-center gap-2">
                <CheckCircle2 className="text-orange-600 w-5 h-5" />
                O que significa "Ilimitado"?
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2 bg-white p-3 rounded-xl border border-zinc-200 shadow-sm">
                  <Wifi className="w-4 h-4 text-orange-600" /> Uso 24H por dia
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded-xl border border-zinc-200 shadow-sm">
                  <Smartphone className="w-4 h-4 text-orange-600" /> Sem limite interno
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded-xl border border-zinc-200 shadow-sm">
                  <Zap className="w-4 h-4 text-orange-600" /> Conecte quando quiser
                </li>
                <li className="flex items-center gap-2 bg-white p-3 rounded-xl border border-zinc-200 shadow-sm">
                  <Globe className="w-4 h-4 text-orange-600" /> Redes sociais e downloads
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" 
              alt="Digital Security" 
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 p-6 bg-orange-600 rounded-2xl shadow-xl max-w-[240px]">
            <p className="text-white font-bold text-sm">
              "Os arquivos são difíceis de criar, por isso garantimos a melhor qualidade e estabilidade."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showAdminSelect, setShowAdminSelect] = useState(false);

  const handleBuyClick = (planId: string) => {
    setSelectedPlan(planId);
    setShowAdminSelect(true);
  };

  const openWhatsApp = (admin: keyof typeof CONTACTS) => {
    const plan = PRICING_PLANS.find(p => p.id === selectedPlan);
    const message = `Olá ${CONTACTS[admin].name}, gostaria de comprar o acesso DARK VPN de ${plan?.duration} por ${plan?.price}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACTS[admin].phone.replace('+', '')}?text=${encodedMessage}`, '_blank');
    setShowAdminSelect(false);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-zinc-900 mb-4">PLANOS DE ACESSO</h2>
          <p className="text-zinc-500">Escolha o plano que melhor se adapta às suas necessidades.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -10 }}
              className={cn(
                "relative p-8 rounded-3xl border transition-all flex flex-col",
                plan.popular 
                  ? "bg-orange-50 border-orange-600 shadow-xl shadow-orange-600/5" 
                  : "bg-white border-zinc-200"
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Mais Popular
                </span>
              )}
              <h3 className="text-zinc-500 font-bold mb-2 uppercase tracking-widest text-xs">{plan.duration}</h3>
              <div className="text-4xl font-black text-zinc-900 mb-8">{plan.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" /> Acesso Ilimitado 24H
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" /> Suporte Prioritário
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-600">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" /> Alta Velocidade
                </li>
              </ul>

              <button 
                onClick={() => handleBuyClick(plan.id)}
                className={cn(
                  "w-full py-4 rounded-xl font-bold transition-all",
                  plan.popular
                    ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900"
                )}
              >
                COMPRAR ACESSO
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Admin Selection Modal */}
      <AnimatePresence>
        {showAdminSelect && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAdminSelect(false)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white border border-zinc-200 rounded-3xl p-8 shadow-2xl"
            >
              <button 
                onClick={() => setShowAdminSelect(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-900"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-black text-zinc-900 mb-2">Escolha um Administrador</h3>
              <p className="text-zinc-500 mb-8 text-sm">Você será redirecionado para o WhatsApp para concluir a compra.</p>
              
              <div className="space-y-4">
                <button 
                  onClick={() => openWhatsApp('ADM1')}
                  className="w-full p-6 bg-zinc-50 hover:bg-orange-50 border border-zinc-200 hover:border-orange-600 rounded-2xl flex items-center justify-between group transition-all"
                >
                  <div className="text-left">
                    <div className="text-zinc-900 font-bold">{CONTACTS.ADM1.name}</div>
                    <div className="text-zinc-400 text-xs">Disponível agora</div>
                  </div>
                  <MessageCircle className="text-orange-600 group-hover:scale-110 transition-transform" />
                </button>
                
                <button 
                  onClick={() => openWhatsApp('ADM2')}
                  className="w-full p-6 bg-zinc-50 hover:bg-orange-50 border border-zinc-200 hover:border-orange-600 rounded-2xl flex items-center justify-between group transition-all"
                >
                  <div className="text-left">
                    <div className="text-zinc-900 font-bold">{CONTACTS.ADM2.name}</div>
                    <div className="text-zinc-400 text-xs">Disponível agora</div>
                  </div>
                  <MessageCircle className="text-orange-600 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'bot' | 'user', text: string }[]>([
    { role: 'bot', text: 'Olá! Sou o assistente virtual da DARK VPN. Como posso ajudar você hoje?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleCommand = (commandId: string, label: string) => {
    setMessages(prev => [...prev, { role: 'user', text: label }]);
    setIsTyping(true);

    setTimeout(() => {
      let response = "";
      switch (commandId) {
        case 'what_is_vpn':
          response = "VPN significa Virtual Private Network. É como um túnel seguro entre seu dispositivo e a internet. Ela protege seus dados e permite navegar sem que sua operadora controle o que você vê.";
          break;
        case 'unlimited_vpn':
          response = "VPN Ilimitado significa que você não tem limites de dados consumidos. Pode usar 24h por dia para downloads, vídeos e redes sociais sem interrupções.";
          break;
        case 'prices':
          response = "Temos planos incríveis:\n• 1 Semana: 50 MT\n• 2 Semanas: 70 MT\n• 3 Semanas: 90 MT\n• 7 Meses: 100 MT (Melhor oferta!)";
          break;
        case 'how_to_buy':
          response = "É simples! Escolha um plano na nossa seção de preços e clique em 'Comprar'. Você poderá escolher um de nossos administradores para finalizar via WhatsApp.";
          break;
        case 'contact_human':
          response = "Você pode falar diretamente com nossos ADMs pelos números:\n+258 87 282 4538\n+258 85 775 3890";
          break;
        default:
          response = "Desculpe, não entendi. Como posso ajudar?";
      }
      
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-orange-600 text-white rounded-full shadow-xl shadow-orange-600/30 flex items-center justify-center z-40 hover:scale-110 active:scale-95 transition-all"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 w-[350px] max-w-[calc(100vw-48px)] h-[500px] bg-white border border-zinc-200 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-orange-600 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Headphones className="text-white w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">DARK Assistente</div>
                  <div className="text-white/70 text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Online agora
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 scroll-smooth bg-zinc-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={cn(
                  "flex",
                  msg.role === 'user' ? "justify-end" : "justify-start"
                )}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-orange-600 text-white rounded-tr-none shadow-sm" 
                      : "bg-white text-zinc-800 border border-zinc-200 rounded-tl-none shadow-sm"
                  )}>
                    {msg.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i !== msg.text.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-zinc-200 flex gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Commands */}
            <div className="p-4 border-t border-zinc-100 bg-white">
              <p className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest mb-3">Sugestões</p>
              <div className="flex flex-wrap gap-2">
                {BOT_COMMANDS.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleCommand(cmd.id, cmd.label)}
                    className="px-3 py-1.5 bg-zinc-50 hover:bg-orange-50 border border-zinc-200 hover:border-orange-600 rounded-full text-xs text-zinc-600 hover:text-orange-600 transition-all"
                  >
                    {cmd.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => (
  <footer className="py-12 bg-white border-t border-zinc-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Shield className="text-orange-600 w-6 h-6" />
          <span className="text-xl font-bold text-zinc-900">DARK VPN</span>
        </div>
        <div className="text-zinc-400 text-sm">
          © 2026 DARK VPN. Todos os direitos reservados.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-zinc-400 hover:text-orange-600 transition-colors"><Smartphone className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-400 hover:text-orange-600 transition-colors"><Globe className="w-5 h-5" /></a>
          <a href="#" className="text-zinc-400 hover:text-orange-600 transition-colors"><Lock className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-orange-600 selection:text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Pricing />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
