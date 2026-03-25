import React, { useState, useEffect } from 'react';
import { FaUserMd, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaPlay, FaArrowRight, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdHealthAndSafety, MdTrendingUp, MdGroups, MdStars } from 'react-icons/md';
import { RiHeart3Fill, RiShieldCheckFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ModalPortafolio from './ModalInicial';
import { RedesSocialesSection } from '../components/RedesSociales';
import { NoticiasDestacadas } from '../components/NoticiasDestacadas';
import { SEOHelmet } from '../components/SEO';

/* estilos globales */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');

    :root {
      --ink:        #0a0f1e;
      --ink-soft:   #1e2740;
      --sky:        #0057ff;
      --sky-light:  #3d82ff;
      --sky-pale:   #e8f0ff;
      --teal:       #00c9a7;
      --teal-dark:  #009f85;
      --amber:      #ffb347;
      --surface:    #f4f7fc;
      --white:      #ffffff;
    }

    .font-syne { font-family: 'Syne', sans-serif; }
    .font-dm   { font-family: 'DM Sans', sans-serif; }

    @keyframes meshMove {
      0%,100% { background-position: 0% 50%; }
      50%      { background-position: 100% 50%; }
    }
    .mesh-bg {
      background: linear-gradient(135deg,#0a1628,#0c2150,#061535,#0a1628);
      background-size: 300% 300%;
      animation: meshMove 14s ease infinite;
    }

    @keyframes fadeUp {
      from { opacity:0; transform:translateY(28px); }
      to   { opacity:1; transform:translateY(0); }
    }
    .fade-up { animation: fadeUp 0.7s ease both; }

    @keyframes pingSlow {
      0%,100% { transform:scale(1);    opacity:.6; }
      50%     { transform:scale(1.15); opacity:1;  }
    }
    .ping-slow { animation: pingSlow 3s ease-in-out infinite; }

    @keyframes scrollX {
      from { transform:translateX(0); }
      to   { transform:translateX(-50%); }
    }
    .scroll-x { animation: scrollX 28s linear infinite; }

    .card-tilt { transition: transform .35s ease, box-shadow .35s ease; }
    .card-tilt:hover { transform: translateY(-7px) rotate(-.3deg); box-shadow: 0 24px 60px rgba(0,87,255,.12); }

    .pill {
      display:inline-flex; align-items:center; gap:6px;
      font-family:'DM Sans',sans-serif; font-size:.72rem; font-weight:600;
      letter-spacing:.08em; text-transform:uppercase;
      padding:5px 14px; border-radius:999px;
    }

    .clip-diag { clip-path: polygon(0 0,100% 0,100% 92%,0 100%); }
  `}</style>
);

/* ── helpers ── */
const Pill = ({ children, color = 'sky' }: { children: React.ReactNode; color?: string }) => {
  const map: Record<string,string> = {
    sky:  'bg-[#0057ff]/10 text-[#3d82ff] border border-[#0057ff]/20',
    teal: 'bg-[#00c9a7]/10 text-[#00c9a7] border border-[#00c9a7]/20',
    amber:'bg-[#ffb347]/10 text-[#ffb347] border border-[#ffb347]/20',
    white:'bg-white/10 text-white border border-white/20',
  };
  return <span className={`pill ${map[color]}`}>{children}</span>;
};

/* ═══════════════════════════════════════════
   COMPONENTE PRINCIPAL
═══════════════════════════════════════════ */
const Inicio: React.FC = () => {
  const [showPortafolioModal, setShowPortafolioModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial]   = useState(0);
  const [currentSlide, setCurrentSlide]               = useState(0);

  /* YouTube */
  const youtubeVideos = [
    { id:'VT0SHXu2vS8', title:'Docente elige tu prestador',       description:'Conoce cómo hacerlo',           thumbnail:`https://img.youtube.com/vi/VT0SHXu2vS8/maxresdefault.jpg` },
    { id:'AcRy3TqP_DA', title:'FOMAG y Red Medicron IPS',         description:'Conoce nuestra alianza',        thumbnail:`https://img.youtube.com/vi/AcRy3TqP_DA/maxresdefault.jpg` },
    { id:'xFMYKF5lgho', title:'Plan Padrino Fundación Valle Lili', description:'Programa de apoyo social',      thumbnail:`https://img.youtube.com/vi/xFMYKF5lgho/maxresdefault.jpg` },
    { id:'fbFa74Kt61A', title:'Día del Trabajador',                description:'Celebración y reconocimiento', thumbnail:`https://img.youtube.com/vi/fbFa74Kt61A/maxresdefault.jpg` },
  ];

  /* modal auto */
  useEffect(() => {
    const t = setTimeout(() => setShowPortafolioModal(true), 3000);
    return () => clearTimeout(t);
  }, []);

  /* carrusel */
  const carruselData = [
    { id:1, gr:'from-[#0057ff] to-[#0c2150]', img:'/images/doctora.jpg',
      titulo:'¿Eres docente activo, pensionado o beneficiario del magisterio en Nariño?',
      desc:'Sabemos que dedicas tu vida a la educación. En Red Medicron IPS queremos apoyarte con atención integral de primera calidad.',
      acciones:[
        { label:'Elige a Red Medicron IPS', type:'primary', fn:()=>window.open('http://200.116.57.140:8080/formulario_primaria/public/formulario','_blank') },
        { label:'Conoce más', type:'secondary', fn:()=>window.location.href='/quienes-somos' },
      ],
    },
    { id:2, gr:'from-[#00c9a7] to-[#0057ff]', img:'/images/sliderValores-1.jpg',
      titulo:'Propuesta de valor',
      desc:'Hacemos grata la experiencia de la persona y su familia durante todo el ciclo de atención en salud, siendo resolutivos y promoviendo su bienestar.',
      acciones:[{ label:'Acerca de nosotros', type:'primary', fn:()=>window.location.href='/quienes-somos' }],
    },
    { id:3, gr:'from-[#1e2740] to-[#0057ff]', img:'/images/sliderCitas-1.jpg',
      titulo:'Líneas telefónicas para solicitar citas',
      desc:'Citas en Nariño al 602 738 2377 y en Tuquerres al 321 666 0990.',
      acciones:[{ label:'Contacto', type:'primary', fn:()=>window.location.href='/contacto' }],
    },
    { id:4, gr:'from-[#0a1628] to-[#00c9a7]', img:'/images/seguridad.jpg',
      titulo:'Protocolos de Vigilancia',
      desc:'Descarga los protocolos y las fichas de notificación de vigilancia en salud pública.',
      acciones:[{ label:'Descargar Protocolos', type:'primary', fn:()=>window.open('/portafolio-servicios.pdf','_blank') }],
    },
    { id:5, gr:'from-[#0c2150] to-[#ffb347]/80', img:'/images/imgPortafolioiz.jpg',
      titulo:'Portafolio de Servicios',
      desc:'Hemos puesto a tu disposición nuestro portafolio completo para que consultes todo lo que tenemos para ti.',
      acciones:[{ label:'Descargar Portafolio', type:'primary', fn:()=>window.open('/portafolio-servicios.pdf','_blank') }],
    },
  ];

  useEffect(() => {
    const iv = setInterval(() => setCurrentSlide(p => (p+1) % carruselData.length), 6000);
    return () => clearInterval(iv);
  }, [carruselData.length]);

  const nextSlide = () => setCurrentSlide(p => (p+1) % carruselData.length);
  const prevSlide = () => setCurrentSlide(p => (p-1+carruselData.length) % carruselData.length);

  /* testimonios */
  const testimonios = [
    { nombre:'María González', ubicacion:'Pasto, Nariño',     texto:'La atención en Red Medicron IPS es excepcional. Me trataron con mucho cariño y profesionalismo.', stars:5 },
    { nombre:'Carlos Ruiz',    ubicacion:'Tuquerres, Nariño', texto:'Excelente servicio de urgencias. Personal muy capacitado e instalaciones modernas.',              stars:5 },
    { nombre:'Ana Martínez',  ubicacion:'Ipiales, Nariño',   texto:'El programa de nefroprotección me ha cambiado la vida. Gracias por el cuidado especializado.',    stars:5 },
  ];
  useEffect(() => {
    const iv = setInterval(() => setCurrentTestimonial(p => (p+1) % testimonios.length), 5000);
    return () => clearInterval(iv);
  }, [testimonios.length]);

  /* stats */
  const stats = [
    { num:'100K+', label:'Pacientes atendidos',  Icon:MdGroups,          color:'#3d82ff'  },
    { num:'98%',   label:'Satisfacción',          Icon:MdStars,           color:'#00c9a7'  },
    { num:'24/7',  label:'Urgencias',             Icon:MdHealthAndSafety, color:'#ffb347'  },
    { num:'8',     label:'Sedes estratégicas',    Icon:FaMapMarkerAlt,    color:'#a78bfa'  },
  ];

  /* ticker */
  const ticker = ['8 Sedes en Nariño','UCI Tuquerres','Atención 24/7','Nefroprotección','Odontología','Terapias','Laboratorio','+15 Especialidades','Telemedicina'];

  return (
    <>
      <GlobalStyles />
      <SEOHelmet
        title="Red Medicron IPS - Institución de Salud Integral en Nariño"
        description="Red Medicron IPS ofrece servicios de salud integral en Nariño, Colombia."
        keywords="red medicron ips, salud nariño, ips túquerres, medicina pasto"
        canonical="/"
      />
      <ModalPortafolio showPortafolioModal={showPortafolioModal} setShowPortafolioModal={setShowPortafolioModal} />

      {/* ══ HERO ══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg font-dm">
        <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity"
          style={{ backgroundImage:"url('/images/hero-bg.jpg')", backgroundAttachment:'fixed' }} />
        {/* rings */}
        <div className="absolute top-[-130px] right-[-130px] w-[520px] h-[520px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-[-65px]  right-[-65px]  w-[340px] h-[340px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-[#00c9a7]/6 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#0057ff]/8 blur-3xl pointer-events-none ping-slow" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 py-28 grid lg:grid-cols-2 gap-16 items-center">
          {/* izquierda */}
          <div>
            <div className="fade-up mb-6" style={{animationDelay:'.05s'}}>
              <Pill color="teal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00c9a7] inline-block" />
                Institución de Salud en Nariño
              </Pill>
            </div>

            <h1 className="font-syne fade-up leading-[1.05] mb-6" style={{animationDelay:'.15s'}}>
              <span className="block text-white text-5xl sm:text-6xl xl:text-7xl font-extrabold">Red</span>
              <span className="block text-5xl sm:text-6xl xl:text-7xl font-extrabold"
                style={{WebkitTextStroke:'2px rgba(0,201,167,.75)', color:'transparent'}}>
                Medicron
              </span>
              <span className="block text-white/85 text-4xl sm:text-5xl xl:text-6xl font-bold mt-1">IPS</span>
            </h1>

            <p className="fade-up text-white/65 text-lg leading-relaxed max-w-lg mb-10" style={{animationDelay:'.28s'}}>
              Más de <span className="text-white font-semibold">20 años</span> transformando vidas en el sur de Colombia con tecnología de vanguardia, atención humanizada y{' '}
              <span className="text-[#00c9a7]">compromiso absoluto</span> con tu salud.
            </p>

            <div className="fade-up flex flex-wrap gap-4" style={{animationDelay:'.38s'}}>
              <button onClick={() => setShowPortafolioModal(true)}
                className="group flex items-center gap-3 bg-[#0057ff] hover:bg-[#3d82ff] text-white font-syne font-bold px-7 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,87,255,.45)] text-sm tracking-wide">
                <MdHealthAndSafety size={20} />
                NUESTROS SERVICIOS
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/sedes"
                className="flex items-center gap-3 bg-white/8 hover:bg-white/14 text-white font-syne font-semibold px-7 py-4 rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 text-sm tracking-wide backdrop-blur-sm">
                <FaMapMarkerAlt size={13} />
                ENCUENTRA TU SEDE
              </Link>
            </div>
          </div>

          {/* derecha — stats */}
          <div className="fade-up grid grid-cols-2 gap-4" style={{animationDelay:'.45s'}}>
            {stats.map((s, i) => (
              <div key={i}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-400 cursor-default overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{background:`radial-gradient(circle at 70% 30%,${s.color}1a,transparent 70%)`}} />
                <s.Icon className="mb-4 transition-transform duration-300 group-hover:scale-110" size={28} style={{color:s.color}} />
                <div className="font-syne text-3xl font-extrabold text-white mb-1">{s.num}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full" style={{background:s.color}} />
              </div>
            ))}
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-90 transition-opacity"
          onClick={() => window.scrollTo({top:window.innerHeight, behavior:'smooth'})}>
          <div className="w-5 h-8 border border-white/35 rounded-full flex justify-center pt-1.5">
            <div className="w-0.5 h-2.5 bg-white/65 rounded-full ping-slow" />
          </div>
          <span className="text-white/40 text-[10px] font-dm uppercase tracking-widest">Explora</span>
        </div>
      </section>

      {/* ══ TICKER ══════════════════════════════════ */}
      <div className="bg-[#0057ff] py-3 overflow-hidden font-dm">
        <div className="flex scroll-x whitespace-nowrap">
          {[...ticker,...ticker].map((item,i) => (
            <span key={i} className="text-white/85 text-xs font-semibold uppercase tracking-widest mx-8 flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-white/40 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══ CARRUSEL ══════════════════════════════════ */}
      <section className="relative bg-[var(--ink,#0a0f1e)] py-16 px-4 overflow-hidden font-dm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Pill color="sky">Campañas · Propuestas · Protocolos</Pill>
            <h2 className="font-syne text-white text-3xl sm:text-4xl font-extrabold mt-4">Información para ti</h2>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,.5)]">
            <div className="flex transition-transform duration-700 ease-in-out"
              style={{transform:`translateX(-${currentSlide*100}%)`}}>
              {carruselData.map(slide => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`relative h-[360px] sm:h-[430px] lg:h-[490px] bg-gradient-to-br ${slide.gr} overflow-hidden`}>
                    <img src={slide.img} alt={slide.titulo}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 hover:scale-100 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                    <div className="relative z-10 h-full flex items-end p-8 sm:p-12 lg:p-16">
                      <div className="max-w-xl">
                        <h3 className="font-syne text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">{slide.titulo}</h3>
                        <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6 max-w-md">{slide.desc}</p>
                        <div className="flex flex-wrap gap-3">
                          {slide.acciones.map((btn,idx) => (
                            <button key={idx} onClick={btn.fn}
                              className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-dm font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                                btn.type==='primary'
                                  ? 'bg-white text-[#0a0f1e] hover:bg-[#e8f0ff]'
                                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm'
                              }`}>
                              {btn.label}
                              <FaArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center">
              <FaChevronLeft size={13} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/25 border border-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center">
              <FaChevronRight size={13} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {carruselData.map((_,i) => (
              <button key={i} onClick={() => setCurrentSlide(i)}
                className={`rounded-full transition-all duration-300 ${i===currentSlide?'w-8 h-2 bg-[#0057ff]':'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTAFOLIO ══════════════════════════════════ */}
      <section className="relative bg-[#f4f7fc] py-28 px-6 overflow-hidden font-dm clip-diag">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-[#0057ff]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-[#00c9a7]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* texto */}
            <div>
              <Pill color="sky">Portafolio de Servicios</Pill>
              <h2 className="font-syne text-[#0a0f1e] text-4xl sm:text-5xl font-extrabold mt-5 mb-6 leading-tight">
                Descubre todo lo que<br/>
                <span className="text-[#0057ff]">tenemos para ti</span>
              </h2>
              <p className="text-[#1e2740]/65 text-lg leading-relaxed mb-8 max-w-lg">
                Servicios médicos especializados, tecnología de vanguardia y atención integral. Todo en un solo lugar, diseñado para tu bienestar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => setShowPortafolioModal(true)}
                  className="group flex items-center justify-center gap-3 bg-[#0057ff] hover:bg-[#3d82ff] text-white font-syne font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,87,255,.3)] text-sm tracking-wide">
                  <FaDownload size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                  DESCARGAR PORTAFOLIO
                </button>
                <Link to="/servicios"
                  className="flex items-center justify-center gap-3 text-[#0057ff] font-syne font-semibold px-8 py-4 rounded-2xl border-2 border-[#0057ff]/25 hover:border-[#0057ff] hover:bg-[#e8f0ff] transition-all duration-300 text-sm tracking-wide">
                  <FaPlay size={11} />
                  VER SERVICIOS ONLINE
                </Link>
              </div>
              <p className="text-[#1e2740]/40 text-xs mt-5">
                💼 PDF completo &nbsp;·&nbsp; 🏥 Info detallada &nbsp;·&nbsp; 📍 Ubicaciones y contactos
              </p>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { Icon:FaUserMd,           c:'#0057ff', bg:'#e8f0ff',              title:'Hospital Tuquerres',    body:'Urgencias 24/7, UCI, Cirugía y hospitalización con tecnología avanzada.',       to:'/sedes',         cta:'Ver detalles'   },
                { Icon:MdHealthAndSafety,  c:'#00c9a7', bg:'rgba(0,201,167,.1)',   title:'7 Sedes Especializadas',body:'Consulta externa, nefroprotección, P&P en toda la región.',                    to:'/sedes',         cta:'Ubicaciones'    },
                { Icon:RiShieldCheckFill,  c:'#7c3aed', bg:'rgba(124,58,237,.08)', title:'Programas Especiales',  body:'Telemedicina, nefroprotección, rehabilitación y medicina preventiva.',          to:'/servicios',     cta:'Conoce más'     },
                { Icon:MdTrendingUp,       c:'#ffb347', bg:'rgba(255,179,71,.1)',  title:'Innovación Continua',   body:'Procesos optimizados, mejora continua y tecnología de vanguardia.',             to:'/quienes-somos', cta:'Ver más'        },
              ].map((card,i) => (
                <div key={i} className="card-tilt bg-white rounded-2xl p-6 border border-gray-100 shadow-sm group cursor-pointer">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{background:card.bg}}>
                    <card.Icon size={20} style={{color:card.c}} />
                  </div>
                  <h3 className="font-syne font-bold text-[#0a0f1e] text-base mb-2">{card.title}</h3>
                  <p className="text-[#1e2740]/55 text-sm leading-relaxed mb-4">{card.body}</p>
                  <Link to={card.to} className="inline-flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all duration-200"
                    style={{color:card.c}}>
                    {card.cta} <FaArrowRight size={10} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* stats fila */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200">
            {[['30+','Servicios Médicos','#0057ff'],['20+','Años de Experiencia','#00c9a7'],['100K+','Pacientes Atendidos','#0a0f1e'],['98%','Satisfacción','#ffb347']].map(([n,l,c],i)=>(
              <div key={i} className="text-center">
                <div className="font-syne text-4xl font-extrabold mb-1" style={{color:c as string}}>{n}</div>
                <div className="text-[#1e2740]/55 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POR QUÉ NOSOTROS ══════════════════════════════════ */}
      <section className="bg-white py-24 px-6 font-dm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Pill color="teal">¿Por qué elegirnos?</Pill>
            <h2 className="font-syne text-[#0a0f1e] text-4xl sm:text-5xl font-extrabold mt-5 mb-4">
              Tu IPS de <span className="text-[#00c9a7]">Confianza</span>
            </h2>
            <p className="text-[#1e2740]/55 text-lg max-w-2xl mx-auto leading-relaxed">
              Innovación tecnológica, atención humanizada y excelencia médica nos posicionan como líderes en salud en el sur de Colombia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon:FaUserMd,     c:'#0057ff', bg:'#e8f0ff',             title:'Profesionales de Elite', body:'Equipo médico altamente especializado con formación continua en las mejores instituciones del país y el exterior.',   cta:'Conoce nuestro equipo' },
              { Icon:RiHeart3Fill, c:'#00c9a7', bg:'rgba(0,201,167,.1)',  title:'Atención Humanizada',    body:'Tratamiento integral centrado en la persona, con calidez humana y respeto por la dignidad de cada paciente.',         cta:'Ver testimonios'       },
              { Icon:MdTrendingUp, c:'#ffb347', bg:'rgba(255,179,71,.1)', title:'Innovación Constante',   body:'Tecnología de vanguardia, procesos optimizados y mejora continua en todos nuestros servicios médicos.',               cta:'Ver innovaciones'      },
            ].map((card,i) => (
              <div key={i} className="card-tilt group bg-[#f4f7fc] rounded-3xl p-8 border border-gray-100 relative overflow-hidden cursor-default">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-150"
                  style={{background:card.bg}} />
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10"
                  style={{background:card.bg}}>
                  <card.Icon size={28} style={{color:card.c}} />
                </div>
                <h3 className="font-syne font-bold text-[#0a0f1e] text-xl mb-3 relative z-10">{card.title}</h3>
                <p className="text-[#1e2740]/60 leading-relaxed mb-5 relative z-10 text-sm">{card.body}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold relative z-10 transition-all duration-200 group-hover:gap-3"
                  style={{color:card.c}}>
                  {card.cta} <FaArrowRight size={12} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIOS ══════════════════════════════════ */}
      <section className="mesh-bg py-24 px-6 font-dm relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity"
          style={{backgroundImage:"url('/images/hero-bg.jpg')"}} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Pill color="white">Testimonios</Pill>
          <h2 className="font-syne text-white text-4xl sm:text-5xl font-extrabold mt-5 mb-4">
            Lo que dicen nuestros <span className="text-[#00c9a7]">Pacientes</span>
          </h2>
          <p className="text-white/55 mb-14 text-lg">La confianza de nuestros usuarios es nuestro mayor logro</p>

          <div className="relative bg-white/6 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-14 shadow-[0_30px_80px_rgba(0,0,0,.4)]">
            <div className="absolute top-8 left-10 font-syne text-8xl text-white/5 leading-none select-none">"</div>
            <div className="flex justify-center mb-5 gap-1">
              {[...Array(testimonios[currentTestimonial].stars)].map((_,i) => (
                <MdStars key={i} size={24} className="text-[#ffb347]" />
              ))}
            </div>
            <blockquote className="font-syne text-white text-xl sm:text-2xl font-semibold leading-relaxed mb-8 italic relative z-10">
              "{testimonios[currentTestimonial].texto}"
            </blockquote>
            <div className="font-syne font-bold text-[#00c9a7] text-base">{testimonios[currentTestimonial].nombre}</div>
            <div className="text-white/45 text-sm mt-1">{testimonios[currentTestimonial].ubicacion}</div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonios.map((_,i) => (
                <button key={i} onClick={() => setCurrentTestimonial(i)}
                  className={`rounded-full transition-all duration-300 ${i===currentTestimonial?'w-8 h-2 bg-[#00c9a7]':'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ NOTICIAS + REDES ══════════════════════════════════ */}
      <NoticiasDestacadas />
      <RedesSocialesSection videos={youtubeVideos} />

      {/* ══ CTA FINAL ══════════════════════════════════ */}
      <section className="relative bg-[#0a0f1e] py-24 px-6 overflow-hidden font-dm">
        <div className="absolute inset-0 mesh-bg opacity-55" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Pill color="white">¿Listo para cuidar tu salud?</Pill>
            <h2 className="font-syne text-white text-4xl sm:text-5xl font-extrabold mt-5 mb-5">
              Estamos aquí para <span className="text-[#00c9a7]">ayudarte</span>
            </h2>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              Únete a miles de pacientes que confían en Red Medicron IPS. Tu bienestar es nuestra prioridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {[
              { Icon:FaPhone,       c:'#3d82ff', bg:'rgba(0,87,255,.15)',   title:'Llámanos',  body:'Atención telefónica.',  sub:<a href="tel:+576027382377" className="font-bold text-[#3d82ff]">602 738 2377</a> },
              { Icon:FaWhatsapp,    c:'#25d366', bg:'rgba(37,211,102,.12)', title:'WhatsApp',  body:'Respuesta inmediata',    sub:<a href="https://wa.me/573183380107" className="font-bold text-green-400">Enviar mensaje</a> },
              { Icon:FaMapMarkerAlt,c:'#00c9a7', bg:'rgba(0,201,167,.12)', title:'Visítanos', body:'7 sedes disponibles',    sub:<Link to="/sedes" className="font-bold text-[#00c9a7]">Ver ubicaciones</Link> },
            ].map((card,i) => (
              <div key={i} className="group bg-white/5 hover:bg-white/9 border border-white/10 hover:border-white/20 rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{background:card.bg}}>
                  <card.Icon size={22} style={{color:card.c}} />
                </div>
                <h3 className="font-syne font-bold text-white text-lg mb-1">{card.title}</h3>
                <p className="text-white/45 text-sm mb-3">{card.body}</p>
                {card.sub}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contacto"
              className="group flex items-center justify-center gap-3 bg-[#00c9a7] hover:bg-[#009f85] text-[#0a0f1e] font-syne font-extrabold px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,201,167,.35)] text-sm tracking-wide">
              <MdHealthAndSafety size={22} />
              AGENDAR CITA
            </Link>
            <button onClick={() => setShowPortafolioModal(true)}
              className="flex items-center justify-center gap-3 bg-white/8 hover:bg-white/14 text-white font-syne font-semibold px-10 py-5 rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 text-sm tracking-wide backdrop-blur-sm">
              <FaDownload size={15} />
              DESCARGAR PORTAFOLIO
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Inicio;