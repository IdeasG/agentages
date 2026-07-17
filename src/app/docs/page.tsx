import React from 'react';

export const metadata = {
  title: 'Guía de Inicio Rápido — AntiGram by AngentAges',
  description: 'Aprende a configurar AntiGram en 5 minutos. Controla tu Agente de IA Antigravity desde Telegram.',
};

export default function Docs() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <a href="/" className="flex items-center gap-2">
          <img src="/agentera_logo.png" alt="AngentAges Logo" className="w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          <span className="text-xl font-bold tracking-tight">Angent<span className="text-cyan-400">Ages</span></span>
        </a>
        <a href="/#pricing" className="px-5 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-300">
          Comprar AntiGram
        </a>
      </nav>

      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium">
            📖 Documentación Oficial
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Guía de Inicio Rápido</h1>
          <p className="text-gray-400 text-lg">Configura AntiGram en menos de 5 minutos y empieza a programar desde tu celular.</p>
        </div>

        {/* Prerequisitos */}
        <DocSection number="0" title="Antes de empezar, necesitas:">
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✓</span> Una PC con <strong className="text-white">Antigravity</strong> instalado y funcionando</li>
            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✓</span> Una cuenta de <strong className="text-white">Telegram</strong> en tu celular</li>
            <li className="flex items-start gap-3"><span className="text-cyan-400 mt-1">✓</span> Tu descarga de LemonSqueezy: <code className="bg-white/10 px-2 py-0.5 rounded text-sm">Antigram Setup 1.0.0.exe</code> (Windows) o <code className="bg-white/10 px-2 py-0.5 rounded text-sm">antigram-skill.zip</code> (Mac/Linux)</li>
          </ul>
        </DocSection>

        {/* Paso 1 */}
        <DocSection number="1" title="Crea tu Bot de Telegram">
          <ol className="space-y-4 text-gray-300 list-none">
            <Step n={1}>Abre Telegram y busca <Code>@BotFather</Code></Step>
            <Step n={2}>Escríbele: <Code>/newbot</Code></Step>
            <Step n={3}>Ponle un <strong className="text-white">nombre</strong> (ej: <em>Mi Agente IA</em>)</Step>
            <Step n={4}>Ponle un <strong className="text-white">username</strong> que termine en "bot" (ej: <em>miagente_bot</em>)</Step>
            <Step n={5}>BotFather te dará un <strong className="text-cyan-400">Token</strong>. Cópialo, lo usarás en el siguiente paso.</Step>
          </ol>
          <div className="mt-4 bg-black/40 border border-white/10 rounded-lg p-4 font-mono text-sm text-green-400">
            123456789:ABCdefGHIjklMNOpqrSTUvwxYZ
          </div>
        </DocSection>

        {/* Paso 2 */}
        <DocSection number="2" title="Instala AntiGram en tu PC">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#121212] border border-white/10 rounded-xl p-5">
              <div className="text-2xl mb-3">🪟</div>
              <h4 className="font-bold mb-3 text-white">Windows</h4>
              <ol className="space-y-2 text-sm text-gray-400 list-none">
                <Step n={1}>Ejecuta <Code>Antigram Setup 1.0.0.exe</Code></Step>
                <Step n={2}>Sigue el instalador (Next → Install)</Step>
                <Step n={3}>AntiGram abre automáticamente</Step>
              </ol>
            </div>
            <div className="bg-[#121212] border border-white/10 rounded-xl p-5">
              <div className="text-2xl mb-3">🍎🐧</div>
              <h4 className="font-bold mb-3 text-white">Mac / Linux</h4>
              <ol className="space-y-2 text-sm text-gray-400 list-none">
                <Step n={1}>Descomprime <Code>antigram-skill.zip</Code></Step>
                <Step n={2}>Abre terminal en esa carpeta</Step>
                <Step n={3}>Ejecuta: <Code>npm install</Code></Step>
                <Step n={4}>Luego: <Code>node bridge.js</Code></Step>
              </ol>
            </div>
          </div>
        </DocSection>

        {/* Paso 3 */}
        <DocSection number="3" title="Conecta tu Bot a AntiGram">
          <p className="text-gray-400 mb-4">En la app de escritorio (Windows), pega tu Token en el campo correspondiente y haz clic en <strong className="text-white">"Conectar Agente"</strong>.</p>
          <div className="bg-black/40 border border-green-500/20 rounded-lg p-4 font-mono text-sm text-green-400">
            [Sistema] Conectando con Telegram...<br/>
            [Sistema] ✅ Puente activado exitosamente (V2).
          </div>
        </DocSection>

        {/* Paso 4 */}
        <DocSection number="4" title="Activa el Skill en Antigravity">
          <p className="text-gray-400 mb-4">En el chat de <strong className="text-white">Antigravity</strong> escribe exactamente:</p>
          <div className="bg-black/40 border border-cyan-500/20 rounded-lg p-4 font-mono text-lg text-cyan-400 text-center">
            Activa el enlace remoto
          </div>
          <p className="text-sm text-gray-500 mt-3">Antigravity instalará el Skill automáticamente y comenzará a escuchar los mensajes de tu celular.</p>
        </DocSection>

        {/* Paso 5 */}
        <DocSection number="5" title="¡Prueba desde tu celular!">
          <p className="text-gray-400 mb-4">Abre Telegram, busca tu bot y envíale una orden:</p>
          <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-5 space-y-3">
            <div className="flex justify-end">
              <div className="bg-cyan-600 text-white text-sm px-4 py-2 rounded-2xl rounded-tr-sm max-w-xs">
                analiza el proyecto actual y dime qué errores hay
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white/10 text-gray-200 text-sm px-4 py-2 rounded-2xl rounded-tl-sm max-w-xs">
                🤖 Analizando proyecto... He encontrado 2 advertencias en app.js línea 34 y 67...
              </div>
            </div>
          </div>
        </DocSection>

        {/* Comandos */}
        <DocSection number="★" title="Comandos Disponibles">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="text-left py-3 pr-6">Comando</th>
                  <th className="text-left py-3">Qué hace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['/menu', 'Muestra el panel con botones interactivos'],
                  ['📊 Reporte de Estado', 'Tu IA te dice en qué está trabajando'],
                  ['🔍 Buscar Errores', 'Escanea el proyecto en busca de bugs'],
                  ['🛑 Detener Agente', 'Pausa el monitoreo del Skill'],
                  ['/send ruta/archivo.py', 'Envía un archivo de tu PC a Telegram'],
                  ['Cualquier texto', 'Tu IA lo recibe como orden directa'],
                ].map(([cmd, desc]) => (
                  <tr key={cmd} className="text-gray-300">
                    <td className="py-3 pr-6"><code className="bg-white/5 px-2 py-1 rounded text-cyan-400 text-xs">{cmd}</code></td>
                    <td className="py-3 text-gray-400">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DocSection>

        {/* FAQ */}
        <DocSection number="?" title="Preguntas Frecuentes">
          <div className="space-y-4">
            {[
              ['¿Funciona si cierro AntiGram?', 'No. AntiGram debe estar corriendo en tu PC para que el puente funcione. Puedes minimizarlo.'],
              ['¿Funciona si mi PC está suspendida?', 'No. Tu PC debe estar encendida y con AntiGram activo.'],
              ['¿Varios dispositivos pueden usar el mismo bot?', 'Sí, cualquier dispositivo con tu cuenta de Telegram puede enviar comandos.'],
              ['¿Cómo detengo el Skill?', 'Envía /stop desde Telegram o usa el botón 🛑 Detener Agente del menú.'],
            ].map(([q, a]) => (
              <details key={q} className="bg-[#0a0a0a] border border-white/5 rounded-lg p-4 group cursor-pointer">
                <summary className="font-semibold text-gray-200 group-hover:text-cyan-400 outline-none">{q}</summary>
                <p className="text-sm text-gray-400 mt-3">{a}</p>
              </details>
            ))}
          </div>
        </DocSection>

        {/* Soporte */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 text-center">
          <div className="text-4xl mb-4">✈️</div>
          <h3 className="text-xl font-bold mb-2">¿Necesitas ayuda?</h3>
          <p className="text-gray-400 mb-6">Únete a nuestra comunidad en Telegram. Te respondemos en menos de 24 horas.</p>
          <a href="https://t.me/AgentAges" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all duration-300">
            Unirse a t.me/AgentAges
          </a>
        </div>
      </div>

      <footer className="border-t border-white/5 py-8 px-8 text-center text-gray-500 text-sm mt-8">
        <p>© 2026 AngentAges. <a href="/" className="hover:text-cyan-400 transition-colors">Volver al inicio</a></p>
      </footer>
    </main>
  );
}

function DocSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm flex-shrink-0">
          {number}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="pl-14">{children}</div>
    </div>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400 flex-shrink-0 mt-0.5">{n}</span>
      <span>{children}</span>
    </li>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return <code className="bg-white/10 px-2 py-0.5 rounded text-cyan-300 text-sm">{children}</code>;
}
