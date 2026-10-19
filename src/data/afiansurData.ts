export interface Brand {
  id: string;
  name: string;
  category: 'tecnologia' | 'comunicacion' | 'talento' | 'medios' | 'educacion';
  categoryLabel: string;
  tagline: string;
  summary: string;
  fullDescription: string;
  url: string;
  founded: string;
  headquarters: string;
  leadership: string;
  keyMetrics: { label: string; value: string }[];
  tags: string[];
  imageUrl?: string;
}

export interface BusinessUnit {
  number: string;
  title: string;
  subtitle: string;
  headline: string;
  description: string;
  brands: string[];
  category: 'tecnologia' | 'comunicacion' | 'talento' | 'medios' | 'educacion';
}

export interface ArchitecturalSpace {
  id: string;
  code: string;
  title: string;
  location: string;
  description: string;
  surface: string;
  year: string;
  architects: string;
  imageUrl: string;
}

export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    number: '01',
    title: 'Tecnología',
    subtitle: 'Sistemas & Software',
    headline: 'Tecnología y productos digitales',
    description: 'Diseño, ingeniería y desarrollo de software. Creamos soluciones tecnológicas y desarrollamos productos digitales propios para distintos mercados.',
    brands: ['Agencia Gol', 'Agroconexiones', 'ReservaClick', 'Inmobiliosis'],
    category: 'tecnologia',
  },
  {
    number: '02',
    title: 'Comunicación',
    subtitle: 'Identidad & Audiovisual',
    headline: 'Comunicación y producción creativa',
    description: 'Publicidad, fotografía y producción audiovisual para marcas, empresas y proyectos narrativos de alto estándar estético.',
    brands: ['Krafyx', 'Hatrixa', 'Mandel Producciones'],
    category: 'comunicacion',
  },
  {
    number: '03',
    title: 'Talento',
    subtitle: 'Personas & Búsqueda',
    headline: 'Talento y capital humano',
    description: 'Selección y servicios de recursos humanos para conectar organizaciones con las personas que necesitan e impulsar su crecimiento.',
    brands: ['Consultora Contraluz', 'Grupo Mastech'],
    category: 'talento',
  },
  {
    number: '04',
    title: 'Medios',
    subtitle: 'Editorial & Crónica',
    headline: 'Medios y contenidos',
    description: 'Proyectos editoriales con identidad propia, orientados a temáticas, audiencias y comunidades específicas con rigor narrativo.',
    brands: ['Historias Narradas', 'Guía Sabor'],
    category: 'medios',
  },
  {
    number: '05',
    title: 'Educación',
    subtitle: 'Programas & Formación',
    headline: 'Educación y formación',
    description: 'Propuestas de aprendizaje y formación continua a través de entornos digitales accesibles y metodologías contemporáneas.',
    brands: ['Escuela Online'],
    category: 'educacion',
  },
];

export const BRANDS: Brand[] = [
  {
    id: 'agencia-gol',
    name: 'Agencia Gol',
    category: 'tecnologia',
    categoryLabel: 'Desarrollo e Ingeniería de Software',
    tagline: 'Centro de Diseño, Arquitectura de Software y Soluciones a Medida',
    summary: 'Ingeniería, software a medida y arquitectura de producto.',
    fullDescription: 'Opera como el motor tecnológico transversal de Grupo Afiansur. Desarrolla la infraestructura, los sistemas distribuidos y la experiencia interactiva que nutren tanto a clientes externos como al ecosistema interno del grupo, combinando estándares rigurosos de ingeniería con diseño de interacción.',
    url: 'https://www.agenciagol.com.ar/',
    founded: '2019',
    headquarters: 'Buenos Aires · Sede Central',
    leadership: 'Dirección de Tecnología & Arquitectura',
    keyMetrics: [
      { label: 'Proyectos implementados', value: '+140' },
      { label: 'Disponibilidad de infraestructura', value: '99.98%' },
      { label: 'Ingenieros y especialistas', value: '38+' },
    ],
    tags: ['Ingeniería de Software', 'Arquitectura Cloud', 'Sistemas Distribuidos', 'UI/UX'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCblhGt609dnZksgT3QQqxEdc1V09G4iRdJWkH-f9y0CjTI0P2XTgGu9Q-R1R2sb3B8JwP79by3DbAW7YM0JXQlLldDDtwzPx6pxQlKLtReQgcY9qbP5-HVaBJ-BV5bwWDY81Hhoe7Zs18xOYilkbAKpzF2NiWcIAyvOyBl3XgLjyXfEFcO0tf1YgbCXVlh2pShOoCEUeOSIUimrGZdl23askrGc30zbofySeY3fSkUVw-nnmJbNVwxmQ',
  },
  {
    id: 'agroconexiones',
    name: 'Agroconexiones',
    category: 'tecnologia',
    categoryLabel: 'Sector Agropecuario & AgTech',
    tagline: 'Plataforma especializada en la cadena de valor agroindustrial',
    summary: 'Red transaccional y operativa para el sector agropecuario.',
    fullDescription: 'Plataforma especializada en la vinculación, análisis y transaccionalidad de la cadena de valor agroindustrial, optimizando la articulación entre productores, acopios, corredores y prestadores logísticos para garantizar trazabilidad y eficiencia de mercado.',
    url: 'https://agroconexiones.com/',
    founded: '2021',
    headquarters: 'Rosario / Buenos Aires',
    leadership: 'Gerencia de Negocios Agroindustriales',
    keyMetrics: [
      { label: 'Productores vinculados', value: '+3,200' },
      { label: 'Puntos de acopio conectados', value: '185' },
      { label: 'Toneladas coordinadas', value: '+850K' },
    ],
    tags: ['AgTech', 'Transaccional', 'Cadena Agroindustrial', 'Logística'],
  },
  {
    id: 'reservaclick',
    name: 'ReservaClick',
    category: 'tecnologia',
    categoryLabel: 'Gestión de Turnos y Servicios',
    tagline: 'Sistema de reserva, asignación de citas y cobros integrados',
    summary: 'Gestión y reserva digital automatizada de agendas.',
    fullDescription: 'Sistema integral de reserva, asignación de citas y cobros sincronizados para empresas de servicios, instituciones médicas y espacios gastronómicos con alta concurrencia, reduciendo el ausentismo y agilizando la experiencia del usuario final.',
    url: 'https://reservaclick.com/',
    founded: '2022',
    headquarters: 'Buenos Aires / Asunción',
    leadership: 'Dirección de Operaciones y Producto',
    keyMetrics: [
      { label: 'Reservas procesadas al mes', value: '+180K' },
      { label: 'Tasa de reducción de ausencias', value: '42%' },
      { label: 'Establecimientos activos', value: '+620' },
    ],
    tags: ['SaaS', 'Agendamiento', 'Automatización', 'Cobros Digitales'],
  },
  {
    id: 'inmobiliosis',
    name: 'Inmobiliosis',
    category: 'tecnologia',
    categoryLabel: 'Sector Inmobiliario & PropTech',
    tagline: 'Software de gestión y administración de carteras inmobiliarias',
    summary: 'Plataforma integral para administración de carteras de inmuebles.',
    fullDescription: 'Software de gestión, catalogación y administración de carteras inmobiliarias de alta escala, facilitando la publicación multicanal, el seguimiento comercial y el control de transacciones de alquiler y compraventa con rigor documental.',
    url: 'https://inmobiliosis.com/',
    founded: '2020',
    headquarters: 'Buenos Aires · Madrid',
    leadership: 'Dirección Comercial y PropTech',
    keyMetrics: [
      { label: 'Propiedades administradas', value: '+45,000' },
      { label: 'Agencias y brokers afiliados', value: '410+' },
      { label: 'Portales sincronizados', value: '12' },
    ],
    tags: ['PropTech', 'Multicanal', 'Gestión Patrimonial', 'CRM Inmobiliario'],
  },
  {
    id: 'krafyx',
    name: 'Krafyx',
    category: 'comunicacion',
    categoryLabel: 'Diseño e Identidad Corporativa',
    tagline: 'Identidad visual y diseño estratégico para organizaciones',
    summary: 'Identidad visual y diseño estratégico para organizaciones.',
    fullDescription: 'Estudio de diseño enfocado en la concepción y consolidación de marcas. Diseñamos identidades visuales, manuales normativos y sistemas de diseño corporativo que transmiten orden, carácter y solidez institucional para organizaciones con ambición de permanencia.',
    url: 'https://www.krafyx.com/',
    founded: '2018',
    headquarters: 'Buenos Aires',
    leadership: 'Dirección de Arte y Diseño',
    keyMetrics: [
      { label: 'Marcas e identidades creadas', value: '+95' },
      { label: 'Premios y reconocimientos', value: '8' },
      { label: 'Sistemas corporativos vigentes', value: '60+' },
    ],
    tags: ['Brand Identity', 'Sistemas Visuales', 'Tipografía', 'Editorial'],
  },
  {
    id: 'hatrixa',
    name: 'Hatrixa',
    category: 'comunicacion',
    categoryLabel: 'Publicidad & Estrategia de Difusión',
    tagline: 'Estrategias de comunicación publicitaria y campañas de difusión',
    summary: 'Estrategias de comunicación publicitaria y campañas de difusión.',
    fullDescription: 'Agencia de estrategia publicitaria y comunicación integrada. Desarrolla campañas institucionales, posicionamiento en medios clave y estrategias de penetración de mercado con análisis de datos y sensibilidad cultural.',
    url: 'https://www.hatrixa.com/',
    founded: '2019',
    headquarters: 'Buenos Aires · Asunción',
    leadership: 'Dirección de Cuentas y Planificación',
    keyMetrics: [
      { label: 'Campañas activas regionales', value: '30+' },
      { label: 'Alcance anual consolidado', value: '+14M' },
      { label: 'Retención de cuentas clave', value: '94%' },
    ],
    tags: ['Publicidad', 'Estrategia de Medios', 'Brand Positioning', 'Performance'],
  },
  {
    id: 'mandel-producciones',
    name: 'Mandel Producciones',
    category: 'comunicacion',
    categoryLabel: 'Producción Audiovisual & Cinematográfica',
    tagline: 'Producción fotográfica y cinematográfica institucional y comercial',
    summary: 'Producción fotográfica y cinematográfica institucional y comercial.',
    fullDescription: 'Productora audiovisual especializada en piezas de alto estándar estético. Desde cortometrajes y documentales institucionales hasta campañas comerciales de gran formato con un tratamiento sobrio de la luz, el color y la narrativa sonora.',
    url: 'https://www.mandelproducciones.com.ar/',
    founded: '2017',
    headquarters: 'Buenos Aires',
    leadership: 'Dirección Cinematográfica y Producción Ejecutiva',
    keyMetrics: [
      { label: 'Producciones completadas', value: '+220' },
      { label: 'Sets de grabación propios', value: '2' },
      { label: 'Festivales seleccionados', value: '11' },
    ],
    tags: ['Cine Institucional', 'Dirección Fotográfica', 'Postproducción 4K', 'Sonido Directo'],
  },
  {
    id: 'consultora-contraluz',
    name: 'Consultora Contraluz',
    category: 'talento',
    categoryLabel: 'Capital Humano & Búsqueda Ejecutiva',
    tagline: 'Búsqueda ejecutiva y consultoría de personas',
    summary: 'Búsqueda ejecutiva y consultoría de personas.',
    fullDescription: 'Firma de consultoría especializada en la identificación y selección de líderes de alta dirección, mandos medios y perfiles estratégicos. Aplica metodologías de evaluación de competencias y compatibilidad cultural para asegurar la longevidad de las incorporaciones.',
    url: 'https://www.consultoracontraluz.com/',
    founded: '2018',
    headquarters: 'Buenos Aires · Asunción',
    leadership: 'Socia Directora de Talento y Personas',
    keyMetrics: [
      { label: 'Búsquedas ejecutivas cerradas', value: '+540' },
      { label: 'Índice de permanencia (+2 años)', value: '91%' },
      { label: 'Sectores atendidos', value: '14' },
    ],
    tags: ['Executive Search', 'Headhunting', 'Organización', 'Liderazgo'],
  },
  {
    id: 'grupo-mastech',
    name: 'Grupo Mastech',
    category: 'talento',
    categoryLabel: 'Reclutamiento Tecnológico & Especializado',
    tagline: 'Selección especializada en tecnología y perfiles técnicos',
    summary: 'Selección especializada en tecnología y perfiles técnicos.',
    fullDescription: 'Estructura dedicada exclusivamente al scouting y contratación de desarrolladores, arquitectos de software, especialistas en ciberseguridad e ingenieros de datos para hubs de tecnología en América Latina, Europa y Estados Unidos.',
    url: 'https://grupomastech.com/',
    founded: '2020',
    headquarters: 'Buenos Aires · Madrid',
    leadership: 'Líder de Scouting Técnico y RPO',
    keyMetrics: [
      { label: 'Talentos técnicos ubicados', value: '+780' },
      { label: 'Tiempo promedio de cobertura', value: '18 días' },
      { label: 'Red activa de desarrolladores', value: '+12,000' },
    ],
    tags: ['Tech Recruiting', 'Staff Augmentation', 'Ingeniería IT', 'Perfiles Senior'],
  },
  {
    id: 'historias-narradas',
    name: 'Historias Narradas',
    category: 'medios',
    categoryLabel: 'Publicación Cultural & Crónica',
    tagline: 'Publicación cultural y crónicas contemporáneas',
    summary: 'Publicación cultural y crónicas contemporáneas.',
    fullDescription: 'Medio editorial independiente dedicado al periodismo narrativo, los ensayos culturales y la crónica en profundidad. Aborda transformaciones urbanas, arquitectura, literatura y pensamiento crítico con un cuidado diseño de página e ilustraciones originales.',
    url: 'https://historiasnarradas.com/',
    founded: '2021',
    headquarters: 'Buenos Aires',
    leadership: 'Editor General y Consejo Editorial',
    keyMetrics: [
      { label: 'Lectores únicos mensuales', value: '+95,000' },
      { label: 'Ediciones monográficas impresas', value: '14' },
      { label: 'Columnistas y Ensayistas', value: 'Red Iberoamericana' },
    ],
    tags: ['Crónica Literaria', 'Editorial Impresa', 'Cultura Visual', 'Ensayos'],
  },
  {
    id: 'guia-sabor',
    name: 'Guía Sabor',
    category: 'medios',
    categoryLabel: 'Gastronomía & Cultura Culinaria',
    tagline: 'Contenidos sobre gastronomía, productos y cultura culinaria',
    summary: 'Contenidos sobre gastronomía, productos y cultura culinaria.',
    fullDescription: 'Plataforma y publicación de curaduría gastronómica. Reseña establecimientos, bodegas, pequeños productores y tradiciones culinarias del Cono Sur y la Península Ibérica, preservando el rigor y el criterio independiente en cada evaluación.',
    url: 'https://www.guiasabor.com/',
    founded: '2021',
    headquarters: 'Buenos Aires · Madrid',
    leadership: 'Dirección Editorial Gastronómica',
    keyMetrics: [
      { label: 'Establecimientos evaluados', value: '+1,400' },
      { label: 'Comunidad de lectores y gourmets', value: '+110K' },
      { label: 'Guías anuales publicadas', value: '4' },
    ],
    tags: ['Gastronomía', 'Curaduría', 'Crítica Culinaria', 'Enología'],
  },
  {
    id: 'escuela-online',
    name: 'Escuela Online',
    category: 'educacion',
    categoryLabel: 'Formación Continua & Certificaciones',
    tagline: 'Formación a distancia y programas ejecutivos certificados',
    summary: 'Formación a distancia y programas ejecutivos certificados.',
    fullDescription: 'Institución de formación ejecutiva y profesional a distancia. Imparte diplomaturas y programas intensivos en gestión tecnológica, liderazgo de equipos y diseño contemporáneo con docentes en activo en la industria y acompañamiento individualizado.',
    url: 'https://www.escuelaonline.com.ar/',
    founded: '2020',
    headquarters: 'Buenos Aires · Modalidad 100% Digital',
    leadership: 'Dirección Académica y Programas',
    keyMetrics: [
      { label: 'Estudiantes graduados', value: '+6,400' },
      { label: 'Programas certificados', value: '26' },
      { label: 'Índice de satisfacción estudiantil', value: '4.8/5.0' },
    ],
    tags: ['E-Learning', 'Programas Ejecutivos', 'Certificación', 'Formación Continua'],
  },
];

export const ARCHITECTURAL_SPACES: ArchitecturalSpace[] = [
  {
    id: 'arq-01',
    code: 'REF. ARQ-01',
    title: 'Sede Corporativa · Espacios de Dirección',
    location: 'Buenos Aires, Distrito Financiero',
    description: 'Instalaciones centrales concebidas bajo criterios de sobriedad espacial, maderas nobles y luz natural filtrada. Alberga el directorio del grupo, las salas de deliberación estratégica y la secretaría general corporativa.',
    surface: '1,450 m²',
    year: '2023',
    architects: 'Estudio Clorindo & Asociados',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AEtjO1VdhwK2z2bxwe8HruMd0H08Hw-n_CBgfmTrMEEeGpNOz97CajbyuPNJZQ6H9ITCifR3J71ovT1OVtebyzcpNbZDc59kiaQYLFyesL7LHqU8DiBhFjpM679dLwy2L1arp7DWBH3LiTQJ-KhqOsCbNvxry4PFDa0lrMdg2J8BzGZCtZD1r9D7oW615f8Kd2g3qWUtpxYarRyn905k9WuEMXgi2Fn_ybMcAtPPT5eapQqCGfQOfV15XnpHAgqv',
  },
  {
    id: 'arq-02',
    code: 'REF. ARQ-02',
    title: 'Estudio Central de Ingeniería · Agencia Gol',
    location: 'Buenos Aires, Distrito Tecnológico',
    description: 'Espacio diáfano equipado para ingeniería de alta concurrencia, salas de pruebas de producto, estaciones de despliegue continuo y laboratorios de experiencia interactiva.',
    surface: '920 m²',
    year: '2022',
    architects: 'Taller Modular Sur',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCblhGt609dnZksgT3QQqxEdc1V09G4iRdJWkH-f9y0CjTI0P2XTgGu9Q-R1R2sb3B8JwP79by3DbAW7YM0JXQlLldDDtwzPx6pxQlKLtReQgcY9qbP5-HVaBJ-BV5bwWDY81Hhoe7Zs18xOYilkbAKpzF2NiWcIAyvOyBl3XgLjyXfEFcO0tf1YgbCXVlh2pShOoCEUeOSIUimrGZdl23askrGc30zbofySeY3fSkUVw-nnmJbNVwxmQ',
  },
  {
    id: 'arq-03',
    code: 'REF. ARQ-03',
    title: 'Delegación Asunción · Nodo Mercosur',
    location: 'Asunción, Eje Corporativo Aviadores',
    description: 'Pabellón de operaciones institucionales y articulación de negocios para la región norte del Cono Sur, focalizado en negocios agropecuarios y servicios logísticos.',
    surface: '640 m²',
    year: '2024',
    architects: 'Brizuela & Co. Arquitectura',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
];

export const CORPORATE_OFFICES = [
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    address: 'Av. Leandro N. Alem 855, Piso 18',
    postalCode: 'C1001AAQ',
    email: 'buenosaires@grupoafiansur.com',
    phone: '+54 11 5289-4400',
    role: 'Sede Central y Órgano de Dirección',
  },
  {
    city: 'Asunción',
    country: 'Paraguay',
    address: 'Av. Aviadores del Chaco 2050, Torre 2',
    postalCode: '1429',
    email: 'asuncion@grupoafiansur.com',
    phone: '+595 21 688-3000',
    role: 'Coordinación Regional Cono Sur',
  },
  {
    city: 'Madrid',
    country: 'España',
    address: 'Paseo de la Castellana 95, Planta 12',
    postalCode: '28046',
    email: 'madrid@grupoafiansur.com',
    phone: '+34 91 790-1200',
    role: 'Vínculo Internacional e Inversiones',
  },
];
