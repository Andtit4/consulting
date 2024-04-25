
export interface menu {
    header?: string;
    title?: string;
    children?: menu[];
    to?: string;
}

const sidebarItem: menu[] = [
    {
        title: 'Accueil',
        to: '/'
    },
    {
        title: 'financial',
        to: '/basic-components'
    },
];

export default sidebarItem;
