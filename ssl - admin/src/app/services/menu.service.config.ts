export const getMenuData: any[] = [
  {
    title: 'Inicio',
    key: 'inicio',
    icon: 'fe fe-home',
    url: '/inicio',
  },
  {
    title: 'Administrar',
    key: 'apps',
    icon: 'fe fe-settings',
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
    ],
  },
  {
    title: 'Estadisticas',
    key: 'estadisticas',
    icon: 'fe fe-pie-chart',
    url: '/estadisticas',
  },
  {
    title: 'Cartera',
    key: 'cartera',
    icon: 'fe fe-dollar-sign',
    url: '/cartera',
  },
  {
    title: 'Proyectos',
    key: 'proyectosAdmin',
    icon: 'fe fe-folder',
    url: '/proyectosAdmin',
  },

  {
    title: 'Proyectos',
    key: 'proyectos',
    icon: 'fe fe-folder',
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
  },
]
