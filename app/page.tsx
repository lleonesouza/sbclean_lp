"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para higienização de estofados.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#problema", label: "O Problema" },
    { href: "#solucao", label: "A Solução" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#publico", label: "Para Quem" },
    { href: "#porque", label: "Por Que Escolher" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#duvidas", label: "Dúvidas" },
    { href: "#contato", label: "Contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-1.5">
          <div className="flex items-center justify-between">
            <Link href="#inicio" onClick={(e) => handleNavClick(e, "#inicio")}>
              <Image
                src="/logo-sbclean.png"
                alt="SBClean Logo"
                width={100}
                height={40}
                className="h-auto"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="hidden sm:inline">Fale Conosco</span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-2 pb-2 border-t border-gray-200">
              <div className="flex flex-col gap-1 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors px-3 py-2 rounded"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Higienização de Estofados"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-cyan-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              🛋️ Higienização Profissional de Estofados
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
              Limpeza profunda que elimina bactérias, ácaros e odores, deixando seu estofado limpo, seguro e renovado.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-lg md:text-xl text-white/90">
                👉 Mais saúde, conforto e tranquilidade para sua família
              </p>
              <p className="text-lg md:text-xl text-white/90">
                📲 Solicite agora seu orçamento pelo WhatsApp
              </p>
            </div>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25D366] hover:bg-[#20BA5A] text-white text-xl font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              📲 Solicitar Orçamento Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-16 px-4 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            ❌ Seu estofado parece limpo, mas você sente que não está?
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Você já percebeu que, mesmo passando pano ou usando produtos comuns, o estofado continua com:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span className="text-lg text-gray-700">Manchas que não saem</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span className="text-lg text-gray-700">Cheiro desagradável</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span className="text-lg text-gray-700">Sensação de sujeira invisível</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">•</span>
              <span className="text-lg text-gray-700">Medo de ácaros, bactérias e alergias</span>
            </li>
          </ul>
          <p className="text-lg text-gray-800 font-semibold leading-relaxed">
            Isso é normal. A sujeira mais perigosa não é visível e fica acumulada profundamente no tecido, colocando em risco a saúde da sua família — principalmente se você tem crianças, bebês ou pessoas alérgicas.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solucao" className="py-16 px-4 bg-blue-50 scroll-mt-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            ✅ A solução é uma higienização profissional e profunda
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nossa empresa oferece higienização profissional de estofados, indo muito além da limpeza superficial.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Utilizamos produtos específicos para cada tipo de tecido, mancha e nível de sujeira, garantindo:
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold text-gray-800">✨ Limpeza profunda</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold text-gray-800">🦠 Eliminação de bactérias, ácaros e microrganismos</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold text-gray-800">🌬️ Neutralização de odores</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="text-lg font-semibold text-gray-800">🛡️ Preservação do tecido</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/cleaning_sofa.jpg"
                alt="Processo de higienização profissional"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
          <p className="text-lg text-gray-800 font-semibold text-center">
            Tudo isso com segurança, eficiência e praticidade, direto na sua casa.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 px-4 bg-white scroll-mt-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            ✨ Benefícios que você sente na prática
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Após a higienização, você percebe:
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/sofa_clean_2.jpg"
                alt="Ambiente limpo e saudável após higienização"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="text-lg text-gray-700">Estofado realmente limpo e higienizado</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="text-lg text-gray-700">Ambiente mais saudável</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="text-lg text-gray-700">Redução de alergias e problemas respiratórios</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="text-lg text-gray-700">Cheiro agradável e sensação de frescor</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="text-lg text-gray-700">Aparência renovada</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="text-lg text-gray-700">Mais conforto no dia a dia</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <span className="text-green-600 text-xl">✔️</span>
                  <span className="text-lg text-gray-700">Economia, evitando a troca do estofado</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-800 font-bold text-center">
            Não é só limpeza. É qualidade de vida.
          </p>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="publico" className="py-16 px-4 bg-blue-50 scroll-mt-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            👨‍👩‍👧‍👦 Para quem esse serviço é ideal?
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Esse serviço é perfeito para:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-lg font-semibold text-gray-800">👶 Famílias com crianças ou bebês</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-lg font-semibold text-gray-800">🤧 Pessoas alérgicas ou sensíveis a ácaros</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-lg font-semibold text-gray-800">🏠 Quem deseja receber visitas sem preocupação</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <p className="text-lg font-semibold text-gray-800">💎 Quem quer conservar e prolongar a vida útil do estofado</p>
            </div>
          </div>
          <p className="text-lg text-gray-800 font-semibold text-center">
            Se você se identificou com algum desses pontos, esse serviço é para você.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="porque" className="py-16 px-4 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            ⭐ Por que escolher a nossa empresa?
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/cleaning_machine.jpg"
                alt="Equipamento profissional de limpeza"
                fill
                className="object-cover"
                quality={90}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-blue-600 text-xl flex-shrink-0">✔️</span>
                  <span className="text-lg text-gray-700">Higienização profunda e profissional</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-blue-600 text-xl flex-shrink-0">✔️</span>
                  <span className="text-lg text-gray-700">Produtos específicos para cada tipo de estofado</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-blue-600 text-xl flex-shrink-0">✔️</span>
                  <span className="text-lg text-gray-700">Tratamento personalizado para manchas e odores</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-blue-600 text-xl flex-shrink-0">✔️</span>
                  <span className="text-lg text-gray-700">Uso de sanitizante, ajudando a manter o estofado protegido</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-blue-600 text-xl flex-shrink-0">✔️</span>
                  <span className="text-lg text-gray-700">Produtos seguros para crianças e pets</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-blue-600 text-xl flex-shrink-0">✔️</span>
                  <span className="text-lg text-gray-700">Excelente custo-benefício</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-blue-600 text-xl flex-shrink-0">✔️</span>
                  <span className="text-lg text-gray-700">Atendimento profissional, transparente e de confiança</span>
                </div>
              </div>
              <p className="text-xl text-gray-800 font-bold text-center mt-8">
                Aqui, cada estofado recebe o cuidado que merece.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-16 px-4 bg-white scroll-mt-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            🔄 Como funciona o atendimento?
          </h2>
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-blue-600">1️⃣</span>
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Você entra em contato pelo WhatsApp</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-blue-600">2️⃣</span>
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Avaliamos seu estofado e sua necessidade</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-blue-600">3️⃣</span>
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Realizamos a higienização profissional no local</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-blue-600">4️⃣</span>
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Secagem rápida</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <span className="text-3xl font-bold text-blue-600">5️⃣</span>
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">Estofado limpo, higienizado e renovado</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-800 font-bold text-center">
            Simples, rápido e sem dor de cabeça.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="duvidas" className="py-16 px-4 bg-gray-50 scroll-mt-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            ❓ Dúvidas Frequentes
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                A limpeza remove bactérias e ácaros?
              </h3>
              <p className="text-lg text-gray-700">
                Sim. O processo é profundo e focado na eliminação de microrganismos invisíveis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                As manchas vão sair?
              </h3>
              <p className="text-lg text-gray-700">
                Muitas manchas são removidas ou significativamente suavizadas. Cada caso é avaliado individualmente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                É seguro para crianças e pets?
              </h3>
              <p className="text-lg text-gray-700">
                Sim. Utilizamos produtos adequados e seguros para o ambiente familiar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quanto tempo demora para secar?
              </h3>
              <p className="text-lg text-gray-700">
                O tempo de secagem é rápido e varia conforme o tecido e o ambiente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                O cheiro ruim volta?
              </h3>
              <p className="text-lg text-gray-700">
                Não. O processo remove a causa do odor, não apenas disfarça.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contato" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white scroll-mt-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            📲 Solicite seu orçamento agora mesmo
          </h2>
          <p className="text-xl mb-8">
            Garanta um estofado limpo, higienizado e seguro para sua família.
          </p>
          <p className="text-lg mb-8">
            👉 Clique no botão abaixo e fale conosco pelo WhatsApp
          </p>
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-blue-600 text-xl font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Falar no WhatsApp Agora
          </Link>
          <p className="text-xl mt-8 font-semibold">
            🛋️ Seu estofado merece esse cuidado.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Image
            src="/logo-sbclean.png"
            alt="SBClean Logo"
            width={150}
            height={60}
            className="mx-auto h-auto mb-4"
          />
          <p className="text-gray-400">
            © {new Date().getFullYear()} SBClean - Higienização Profissional de Estofados
          </p>
        </div>
      </footer>
    </div>
  );
}
