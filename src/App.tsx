import React, { useEffect, useState } from 'react';
import { Brain, Bot as Robot, Sparkles, BarChart, ChevronRight, MessageSquare, ArrowRight, Code, Zap, Shield, MessageCircle, Cog, LineChart, Share2, X, Send, Mail, User, Building2 } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'loading', message: 'Enviando mensaje...' });
    
    // Aquí iría la lógica de envío de email
    // Por ahora simulamos un envío exitoso después de 1 segundo
    setTimeout(() => {
      setFormStatus({ 
        type: 'success', 
        message: '¡Mensaje enviado! Nos pondremos en contacto pronto.' 
      });
      setTimeout(() => {
        setShowContactModal(false);
        setFormStatus({ type: '', message: '' });
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 2000);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Floating Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Brain className={`w-8 h-8 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}>AI Agency</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className={`${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'} transition-colors`}>Servicios</a>
            <a href="#" className={`${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'} transition-colors`}>Soluciones</a>
            <a href="#" className={`${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'} transition-colors`}>Contacto</a>
            <button className={`${
              scrolled 
                ? 'bg-gray-900 text-white hover:bg-gray-800' 
                : 'bg-white text-gray-900 hover:bg-gray-100'
            } px-6 py-2 rounded-lg transition-all duration-300`}>
              Iniciar Proyecto
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with dynamic background */}
      <header className="relative min-h-screen flex items-center px-6 py-32 sm:px-12 md:px-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90" />
          {/* Animated grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'gradient-shift 20s linear infinite'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-12 group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gray-200 via-white to-gray-200 opacity-75 group-hover:opacity-100 blur-lg transition-all duration-500" />
              <div className="relative bg-gray-900 p-4 rounded-full">
                <Brain className="w-24 h-24 text-white" />
              </div>
            </div>
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
              El Futuro de la<br />
              <span className="bg-gradient-to-r from-gray-100 via-white to-gray-100 text-transparent bg-clip-text animate-gradient">
                Automatización Inteligente
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Transformamos empresas con IA avanzada. Del caos a la eficiencia, 
              de la complejidad a la excelencia operativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="group bg-white text-gray-900 px-10 py-5 rounded-2xl flex items-center gap-3 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                <span className="text-lg font-semibold">Comenzar Ahora</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <a 
                href="https://tulink.com" // Reemplaza con tu enlace
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-10 py-5 text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-colors duration-300 flex items-center gap-3 w-full sm:w-auto"
              >
                <span className="text-lg font-semibold">Nuestro portafolio</span>
                <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
          </div>
        </div>
      </header>

      {/* Features Grid with hover effects */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:32px_32px]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Soluciones Innovadoras</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Potenciamos su negocio con tecnología de vanguardia y soluciones personalizadas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Robot />}
              title="Automatización IA"
              description="Optimizamos procesos complejos con inteligencia artificial avanzada, reduciendo costos y aumentando la productividad."
              color="from-blue-500/20 to-purple-500/20"
            />
            <FeatureCard 
              icon={<Code />}
              title="Desarrollo Smart"
              description="Creamos soluciones tecnológicas inteligentes que se adaptan y evolucionan con su negocio."
              color="from-green-500/20 to-teal-500/20"
            />
            <FeatureCard 
              icon={<Shield />}
              title="Seguridad Avanzada"
              description="Protegemos sus datos y operaciones con las últimas tecnologías en ciberseguridad."
              color="from-orange-500/20 to-red-500/20"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Nuestros Servicios</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Soluciones de IA personalizadas para transformar cada aspecto de su negocio
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<MessageCircle />}
              title="Chatbot AI Personalizado"
              description="Desarrollamos asistentes virtuales inteligentes que entienden el contexto de su negocio. Atención al cliente 24/7, respuestas precisas y personalización completa según su marca."
              features={[
                "Integración multicanal",
                "Aprendizaje continuo",
                "Personalización de marca",
                "Análisis de sentimientos"
              ]}
            />
            <ServiceCard 
              icon={<Cog />}
              title="Automatización de Procesos de Negocio"
              description="Optimizamos sus operaciones comerciales mediante la automatización inteligente. Desde gestión de documentos hasta flujos de trabajo complejos."
              features={[
                "Flujos de trabajo automatizados",
                "Procesamiento de documentos",
                "Integración con sistemas existentes",
                "Reportes en tiempo real"
              ]}
            />
            <ServiceCard 
              icon={<LineChart />}
              title="Automatización de Procesos Financieros"
              description="Transformamos sus operaciones financieras con soluciones de IA que automatizan facturación, contabilidad y análisis financiero."
              features={[
                "Facturación automática",
                "Conciliación bancaria",
                "Gestión de gastos",
                "Previsiones financieras"
              ]}
            />
            <ServiceCard 
              icon={<Share2 />}
              title="Automatización de Contenido en Redes"
              description="Potenciamos su presencia digital con IA que genera, programa y optimiza contenido para todas sus redes sociales."
              features={[
                "Generación de contenido",
                "Programación inteligente",
                "Análisis de engagement",
                "Optimización automática"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid md:grid-cols-3 gap-12">
            <StatCard number="98%" label="Satisfacción" />
            <StatCard number="500+" label="Proyectos" />
            <StatCard number="24/7" label="Soporte" />
          </div>
        </div>
      </section>

      {/* CTA Section with floating elements */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 relative">
          <div className="bg-white p-16 rounded-3xl shadow-2xl border border-gray-100 backdrop-blur-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                ¿Listo para el Siguiente Nivel?
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Únase a las empresas visionarias que ya están definiendo el futuro con nuestras soluciones de IA
              </p>
              <button 
                onClick={() => setShowContactModal(true)}
                className="group bg-gray-900 text-white px-12 py-6 rounded-2xl flex items-center gap-3 hover:bg-gray-800 transition-all duration-300 mx-auto text-xl font-medium"
              >
                Iniciar Conversación 
                <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white relative">
              <button 
                onClick={() => setShowContactModal(false)}
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-3xl font-bold mb-2">Iniciemos la Conversación</h3>
              <p className="text-gray-300">Cuéntanos sobre tu proyecto y te contactaremos pronto</p>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>
                </div>

                {formStatus.message && (
                  <div className={`p-4 rounded-xl ${
                    formStatus.type === 'success' 
                      ? 'bg-green-50 text-green-700' 
                      : formStatus.type === 'loading'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-red-50 text-red-700'
                  }`}>
                    {formStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus.type === 'loading'}
                  className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-gray-400 py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Brain className="w-10 h-10 text-white" />
                <span className="text-white font-bold text-2xl">AI Agency</span>
              </div>
              <p className="text-gray-400">
                Transformando el futuro de los negocios con inteligencia artificial
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Soluciones</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition-colors">Automatización</a>
                <a href="#" className="hover:text-white transition-colors">Machine Learning</a>
                <a href="#" className="hover:text-white transition-colors">Data Analytics</a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Empresa</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a>
                <a href="#" className="hover:text-white transition-colors">Casos de Éxito</a>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Contacto</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-white transition-colors">Soporte</a>
                <a href="#" className="hover:text-white transition-colors">Consultoría</a>
                <a href="#" className="hover:text-white transition-colors">Empleo</a>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-800 text-center">
            <p>© 2024 AI Agency. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }) {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative bg-white p-12 rounded-3xl hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div className="text-gray-900 w-16 h-16 mb-8 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
        <div className="flex items-center gap-2 text-gray-900 font-medium">
          <span>Explorar</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
        <div className="flex items-start gap-6">
          <div className="text-white w-12 h-12 shrink-0 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <Sparkles className="w-4 h-4 text-white/50" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
      <div className="text-5xl font-bold text-gray-900 mb-2">{number}</div>
      <div className="text-gray-600 text-lg">{label}</div>
    </div>
  );
}

export default App;
