import { MenuItem } from '../interfaces/interfaces';
export const lista: MenuItem[] = [
    {
        name: 'articulo uno',
        iconName: 'albums-outline',
        component: 'Animacion01Screen',            
    },
    {
        name: 'articulo dos',
        iconName: 'cube-outline',
        component: 'Animacion02Screen', 
    },
    {
        name: 'Switches',
        iconName: 'toggle-outline',
        component: 'SwitchScreen', 
    },
    {
        name: 'Alerts',
        iconName: 'alert-circle-outline',
        component: 'AlertScreen', 
    },
    {
        name: 'Inputs',
        iconName: 'text-outline',
        component: 'InputTextScreen', 
    },
    {
        name: 'Pull2Refresh',
        iconName: 'refresh-circle-outline',
        component: 'Pull2RefreshScreen', 
    },
    {
        name: 'SectionList',
        iconName: 'list-outline',
        component: 'SectionListScreen'
    },
];