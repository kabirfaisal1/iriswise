
// TODO: During clean up need to fix the coloring issue when importing from '@/constants/link_index'
import
{
    Newspaper,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    MusicIcon,
    VideoIcon,
    CodeIcon,
    SettingsIcon,
    ShoppingBag,
    Plane,
} from 'lucide-react';
// * this is for the sidebar while user in signed in
export const SidebarRoutes = [ {
    id: '01',
    label: 'Dashboard',
    icons: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',

},
{
    id: '02',
    label: 'Conversation',
    icons: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
},
{
    id: '03',
    label: 'Article Summarize',
    icons: Newspaper,
    href: '/articleSummarize',
    color: 'text-green-500',
},
{
    id: '04',
    label: 'Image Generation',
    icons: ImageIcon,
    href: '/imageGeneration',
    color: 'text-pink-500',
},
{
    id: '05',
    label: 'Music Generation',
    icons: MusicIcon,
    href: '/musicGeneration',
    color: 'text-yellow-800',
},
{
    id: '06',
    label: 'Video Generation',
    icons: VideoIcon,
    href: '/videoGeneration',
    color: 'text-orange-700',
},
{
    id: '07',
    label: 'Code Generation',
    icons: CodeIcon,
    href: '/codeGeneration',
    color: 'text-emerald-800',
},
    // {
    // 	id: '08',
    // 	label: 'Price Checker',
    // 	icons: ShoppingBag,
    // 	href: '/priceChecker',
    // 	color: 'text-emerald-800',
    // },
    // {
    // 	id: '09',
    // 	label: 'Travel Generation',
    // 	icons: Plane,
    // 	href: '/travel',
    // 	color: 'text-emerald-800',
    // },
    // {
    // 	id: '10',
    // 	label: 'Settings',
    // 	icons: SettingsIcon,
    // 	href: '/settings',
    // 	color: 'text-red-700',
    // },

];
// * this is for dashboard while user is not signed in
export const SystemToolsRoute = [
    {
        id: '02',
        label: 'Conversation',
        icons: MessageSquare,
        href: '/conversation',
        color: 'text-violet-500',
        bgColor: 'bg-violet-500/10',
    },
    {
        id: '03',
        label: 'Article Summarize',
        icons: Newspaper,
        href: '/articleSummarize',
        color: 'text-green-500',
    },
    {
        id: '04',
        label: 'Image Generation',
        icons: ImageIcon,
        href: '/imageGeneration',
        color: 'text-pink-500',
    },
    {
        id: '05',
        label: 'Music Generation',
        icons: MusicIcon,
        href: '/musicGeneration',
        color: 'text-yellow-800',
    },
    {
        id: '06',
        label: 'Video Generation',
        icons: VideoIcon,
        href: '/videoGeneration',
        color: 'text-orange-700',
    },
    {
        id: '07',
        label: 'Code Generation',
        icons: CodeIcon,
        href: '/codeGeneration',
        color: 'text-emerald-800',
    },
    // {
    // 	id: '08',
    // 	label: 'Price Checker',
    // 	icons: ShoppingBag,
    // 	href: '/priceChecker',
    // 	color: 'text-emerald-800',
    // },
    // {
    // 	id: '09',
    // 	label: 'Travel Generation',
    // 	icons: Plane,
    // 	href: '/travel',
    // 	color: 'text-emerald-800',
    // },
    // {
    // 	id: '10',
    // 	label: 'Settings',
    // 	icons: SettingsIcon,
    // 	href: '/settings',
    // 	color: 'text-red-700',
    // },
];
