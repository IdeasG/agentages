import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <img src="/agentera_logo.png" alt="AgentAges Logo" className="w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          <span className="text-xl font-bold tracking-tight">Agent<span className="text-cyan-400">Ages</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
          <a href="#features" className="hover:text-white transition-colors">Características</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">Cómo Funciona</a>
          <a href="#pricing" className="hover:text-white transition-colors">Precios</a>
        </div>
        <a 
          href="#pricing"
          className="px-5 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-300"
        >
          Comprar Ahora
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 md:px-16 max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium">
          🚀 AgentAges presenta: AntiGram v1.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Programa desde <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            <img src="/logo.png" alt="Antigram Logo" className="inline w-16 h-16 rounded-xl mx-2" /> Telegram
          </span> en tu Celular
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Convierte tu teléfono en el control maestro de <strong className="text-white">Antigravity</strong> en tu PC. Delega tareas de programación a tu Agente IA y revisa el código generado mientras estás <strong className="text-white">en el gimnasio, en la playa o en tu cafetería favorita</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#pricing"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] transform hover:-translate-y-1 transition-all duration-300"
          >
            Obtener Licencia Anual
          </a>
          <a 
            href="#how-it-works"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold text-lg text-white transition-all duration-300"
          >
            Ver cómo funciona
          </a>
        </div>
      </section>

      {/* Product Image / Demo App */}
      <section id="how-it-works" className="px-8 md:px-16 max-w-5xl mx-auto mb-32 perspective-1000 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trabaja desde Cualquier Lugar</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">La verdadera libertad de los desarrolladores imparables. Tu IDE y tu celular, conectados a kilómetros de distancia.</p>
        </div>
        <div className="relative rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden group transform hover:-translate-y-2 transition-transform duration-500">
          <img src="/workflow.png" alt="Flujo de trabajo remoto en la playa con Antigram" className="w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-8 md:px-16 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">El Eslabón Perdido</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Todo lo que necesitas para operar tu IA de forma remota, sin configuraciones de red complejas ni exponer tu IP.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🌍" 
              title="Sin VPS ni IP Pública" 
              desc="Funciona directamente desde tu PC local. Olvídate de alquilar servidores, configurar Ngrok o abrir puertos en tu router."
            />
            <FeatureCard 
              icon="🤖" 
              title="Integración con Antigravity" 
              desc="Diseñado nativamente para inyectar instrucciones directas a tu Agente IA (Antigravity) en tu PC, permitiéndole programar autónomamente."
            />
            <FeatureCard 
              icon="🔒" 
              title="Seguridad Zero-Trust" 
              desc="El puente corre en tu máquina. Tus llaves, tokens y tu código nunca pasan por nuestros servidores."
            />
          </div>
        </div>
      </section>

      {/* Security & Trust (Crucial for new products) */}
      <section className="py-24 px-8 md:px-16 bg-[#121212] border-t border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">La Seguridad es lo Primero</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Sabemos que el código es tu activo más valioso. Por eso diseñamos AntiBridge con una arquitectura Zero-Trust.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/5">
              <h4 className="text-lg font-bold mb-2 flex items-center gap-2"><span className="text-cyan-400">🕵️</span> Cero Telemetría</h4>
              <p className="text-sm text-gray-400">Nuestra app no envía ni un solo byte de tu código a nuestros servidores. Solo actúa como un túnel ciego entre Telegram y tu disco duro.</p>
            </div>
            <div className="bg-[#0a0a0a] p-6 rounded-xl border border-white/5">
              <h4 className="text-lg font-bold mb-2 flex items-center gap-2"><span className="text-cyan-400">🧠</span> Tú controlas a la IA</h4>
              <p className="text-sm text-gray-400">Al instalar la Habilidad, tú puedes ver exactamente el prompt que se ejecuta. Eres el dueño absoluto de los permisos de tu entorno.</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h3>
            
            <details className="bg-[#0a0a0a] border border-white/5 rounded-lg p-4 group cursor-pointer">
              <summary className="font-semibold text-gray-200 group-hover:text-cyan-400 outline-none">¿Cómo sé que no me van a hackear?</summary>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">El puente se comunica exclusivamente con la API oficial de Telegram usando el Token de *tu* propio bot. Nadie, ni siquiera nosotros, conoce tu token. Si algún día tienes dudas, simplemente revocas el token desde Telegram y el puente queda inservible.</p>
            </details>

            <details className="bg-[#0a0a0a] border border-white/5 rounded-lg p-4 group cursor-pointer">
              <summary className="font-semibold text-gray-200 group-hover:text-cyan-400 outline-none">¿Por qué es una suscripción anual?</summary>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">Porque el ecosistema de IA cambia todos los días. La suscripción anual nos permite mantener el puente compatible con las últimas versiones de los agentes de IA (Cursor, Claude, etc.) y asegurar que tu conexión satelital jamás se rompa con los cambios de API.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-8 md:px-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Suscripción Anual. <br/>Evolución Continua.</h2>
          <p className="text-xl text-gray-400 mb-12">Software de escritorio potente con un plan accesible. Mantente siempre al día con las nuevas versiones.</p>
          
          <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-12 max-w-md mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[50px]" />
            <h3 className="text-2xl font-bold mb-2 text-left">Licencia Pro</h3>
            <p className="text-gray-400 text-sm text-left mb-6">Para desarrolladores que exigen movilidad total.</p>
            
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-extrabold">$19</span>
              <span className="text-gray-500">USD / año</span>
            </div>

            <ul className="text-left space-y-4 mb-10">
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> App de Escritorio V2 (Windows)</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Skill Nativo V2 (Mac & Linux)</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Botones Interactivos y Archivos</li>
              <li className="flex items-center gap-3"><span className="text-cyan-400">✓</span> Actualizaciones y soporte continuo</li>
            </ul>

            <a 
              href="https://agentsage.lemonsqueezy.com/checkout/buy/ad1204ca-54bf-4915-a320-3ca7a6f24dab" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Comprar Licencia Segura
            </a>
            
            <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <p className="text-sm text-cyan-300 font-medium text-center flex items-center justify-center gap-2">
                <span>🛡️</span> Garantía Incondicional de 7 Días
              </p>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Si no acelera tu flujo de trabajo de inmediato, mándanos un correo y te devolveremos cada centavo. Sin preguntas.
              </p>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 text-center flex items-center justify-center gap-1">
              <span>🔒</span> Pagos 100% seguros procesados por LemonSqueezy
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-8 text-center text-gray-500 text-sm">
        <p>© 2026 AgentAges. Construido para desarrolladores imparables.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-cyan-500/30 hover:bg-[#151515] transition-all duration-300 group">
      <div className="text-4xl mb-6 bg-white/5 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
