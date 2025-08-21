import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const secondaryLinks = [
	{ to: '/organigrama', label: 'Organigrama' },
	{ to: '/capacitaciones', label: 'Capacitaciones' },
	{ to: '/enlaces-externos', label: 'Enlaces Externos' },
	{ to: '/habeas-data', label: 'Habeas Data' },
	{ to: '/confidencialidad', label: 'Confidencialidad' },
	{ to: '/noticias', label: 'Noticias' },
	{ to: '/roadmap', label: 'Roadmap' },
	{ to: '/asociados', label: 'Asociados' },
	{ to: '/derechos-deberes', label: 'Derechos y Deberes' },
	{ to: '/linea-etica', label: 'Línea Ética' },
	{ to: '/contacto', label: 'Contacto' },
	{ to: '/accesibilidad', label: 'Accesibilidad' },
	{ to: '/habeas-data', label: 'Habeas Data' },
	{ to: '/confidencialidad', label: 'Confidencialidad' },
	{ to: '/transparencia', label: 'Transparencia' }
];

const Footer: React.FC = () => {
	return (
		<footer className="bg-gradient-to-br from-verdeOscuro via-verdeOscuro-dark to-negro text-white mt-16">
			{/* Main footer content */}
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div className="w-10 h-10 bg-gradient-to-br from-white to-white rounded-lg flex items-center justify-center">
								<img src="/iconoRMIPS.png" alt="Red Medicron IPS" />
							</div>
							<h3 className="text-xl font-bold "><span className="text-azul">Red Medicron</span> IPS</h3>
						</div>
						<p className="text-white/80 text-sm leading-relaxed">
							Excelencia, humanización e innovación en salud para el sur de Colombia. 
							Más de 12 años transformando vidas.
						</p>
						<div className="flex space-x-3">
							<a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-verdeLima/80 transition-colors">
								<FaFacebookF size={14} />
							</a>
							<a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-verdeLima/80 transition-colors">
								<FaTwitter size={14} />
							</a>
							<a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-verdeLima/80 transition-colors">
								<FaInstagram size={14} />
							</a>
						</div>
					</div>

					{/* Contact Info */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-verdeLima">Contacto</h4>
						<div className="space-y-3 text-sm">
							<div className="flex items-start gap-3">
								<FaMapMarkerAlt className="text-verdeLima mt-1 flex-shrink-0" size={14} />
								<span className="text-white/80">Nariño, Colombia<br />7 sedes en el sur del país</span>
							</div>
							<div className="flex items-center gap-3">
								<FaPhone className="text-verdeLima flex-shrink-0" size={14} />
								<span className="text-white/80">+57 (2) 123-4567</span>
							</div>
							<div className="flex items-center gap-3">
								<FaEnvelope className="text-verdeLima flex-shrink-0" size={14} />
								<span className="text-white/80">info@redmedicron.com</span>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-verdeLima">Enlaces Rápidos</h4>
						<div className="grid grid-cols-1 gap-2 text-sm">
							{secondaryLinks.slice(0, 6).map(link => (
								<Link 
									key={link.to} 
									to={link.to} 
									className="text-white/80 hover:text-verdeLima transition-colors duration-200"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>

					{/* More Links */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-verdeLima">Más Información</h4>
						<div className="grid grid-cols-1 gap-2 text-sm">
							{secondaryLinks.slice(6).map(link => (
								<Link 
									key={link.to} 
									to={link.to} 
									className="text-white/80 hover:text-verdeLima transition-colors duration-200"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-white/10">
				<div className="max-w-7xl mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
						<div>
							© {new Date().getFullYear()} Red Medicron IPS. Todos los derechos reservados.
						</div>
						<div className="flex gap-6">
							<Link to="/habeas-data" className="hover:text-verdeLima transition-colors">Habeas Data</Link>
							<Link to="/confidencialidad" className="hover:text-verdeLima transition-colors">Privacidad</Link>
							<Link to="/accesibilidad" className="hover:text-verdeLima transition-colors">Accesibilidad</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
