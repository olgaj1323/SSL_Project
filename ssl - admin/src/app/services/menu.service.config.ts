export const getMenuData: any[] = [
  {
    title: 'Inicio',
    key: 'inicio',
    icon: 'fe fe-home',
    url: '/inicio',
    roles_menu: ['ROLE_SUPER_ADMIN', 'TECNICO', 'EMPRESA', 'FINANCIERO'],
  },
  {
    title: 'Administrar',
    key: 'apps',
    icon: 'fe fe-settings',
    roles_menu: ['ROLE_SUPER_ADMIN'],
    children: [
      {
        title: 'Usuarios',
        key: 'appsProfile',
        icon: 'fe fe-users',
        url: '/administrar/adminUsuario',
      },
      {
        title: 'Empresas',
        key: 'appsCalendar',
        icon: 'fe fe-briefcase',
        url: '/administrar/adminEmpresa',
      },
      {
        title: 'Términos y condiciones',
        key: 'terminos',
        icon: 'fe fe-book',
        url: '/administrar/adminTerminos',
      },
      {
        title: 'Proyectos',
        key: 'proyectos',
        icon: 'fe fe-folder',
        url: '/administrar/adminProyectos',
      },
    ],
  },
  {
    title: 'Estadisticas',
    key: 'estadisticas',
    icon: 'fe fe-pie-chart',
    url: '/estadisticas',
    roles_menu: ['EMPRESA'],
  },
  {
    title: 'Cartera',
    key: 'cartera',
    icon: 'fe fe-dollar-sign',
    url: '/cartera',
    roles_menu: ['ROLE_SUPER_ADMIN', 'FINANCIERO'],
  },
  {
    title: 'Proyectos',
    key: 'proyectos',
    icon: 'fe fe-folder',
    roles_menu: ['EMPRESA'],
    children: [
      {
        title: 'Agregar Nuevo',
        key: 'iconsFeatherIcons',
        icon: 'fe fe-folder-plus',
        url: '/proyectos/nuevoProyecto',
      },
      {
        title: 'Lista de Proyectos',
        key: 'iconsFontawesome',
        icon: 'fe fe-folder',
        url: '/proyectos/proyectoProceso',
      },
    ],
  },
  {
    title: 'Cuenta',
    key: 'cuenta',
    icon: 'icmn-coin-dollar',
    url: '/cuenta',
    roles_menu: ['EMPRESA'],
  },
  {
    title: 'Proyectos',
    key: 'proyectos',
    icon: 'fe fe-folder',
    url: '/proyectos',
    roles_menu: ['TECNICO'],
  },
]
