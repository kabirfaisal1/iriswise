import
{
    Newspaper,
    ImageIcon,
    LayoutDashboard,
    MessageSquare,
    AudioLines,
    VideoIcon,
    CodeIcon,
    SquareUser,
    ScanBarcode
} from 'lucide-react';

export const navLinks = [
    {
        label: "Dashboard",
        route: "/dashboard",
        icon: LayoutDashboard,
        isDisable: false,
        color: "#5C8374",
    },
    {
        label: "Conversation",
        route: "/conversation",
        icon: MessageSquare,
        isDisable: false,
        color: "#3EC70B",
    },
    {
        label: "Audio Generation",
        route: "/audioGeneration",
        icon: AudioLines,
        isDisable: false,
        color: "#7469B6",
    },
    {
        label: "Image Generation",
        route: "/imageGeneration",
        icon: ImageIcon,
        isDisable: false,
        color: "#F8B1A6",
    },
    {
        label: "Video Generation",
        route: "/videoGeneration",
        icon: VideoIcon,
        isDisable: false,
        color: "#662549",
    },

    {
        label: "Article Summarizer",
        route: "/articleSummarize",
        icon: Newspaper,
        isDisable: false,
        color: "#005B41",
    },
    {
        label: "Code Generation",
        route: "/codeGeneration",
        icon: CodeIcon,
        isDisable: false,
        color: "#D8D8D8",
    },
    {
        label: "Profile",
        route: "/profile",
        icon: SquareUser,
        isDisable: false,
        color: "#76549A",
    },
    {
        label: "Buy Credits",
        route: "/credits",
        icon: ScanBarcode,
        isDisable: false,
        color: "#76885B",
    },

];

export const plans = [
    {
        _id: 1,
        name: "Free",
        // icon: "/assets/icons/free-plan.svg",
        price: 0,
        credits: 20,
        inclusions: [
            {
                label: "20 Free Credits",
                isIncluded: false,
            },
            {
                label: "Basic Access to Services",
                isIncluded: false,
            },
            {
                label: "Priority Customer Support",
                isIncluded: false,
            },
            {
                label: "Priority Updates",
                isIncluded: false,
            },
        ],
    },
    {
        _id: 2,
        name: "Pro Package",
        // icon: "/assets/icons/free-plan.svg",
        price: 40,
        credits: 120,
        inclusions: [
            {
                label: "120 Credits",
                isIncluded: false,
            },
            {
                label: "Full Access to Services",
                isIncluded: false,
            },
            {
                label: "Priority Customer Support",
                isIncluded: false,
            },
            {
                label: "Priority Updates",
                isIncluded: false,
            },
        ],
    },
    {
        _id: 3,
        name: "Premium Package",
        // icon: "/assets/icons/free-plan.svg",
        price: 199,
        credits: 2000,
        inclusions: [
            {
                label: "2000 Credits",
                isIncluded: false,
            },
            {
                label: "Full Access to Services",
                isIncluded: false,
            },
            {
                label: "Priority Customer Support",
                isIncluded: false,
            },
            {
                label: "Priority Updates",
                isIncluded: false,
            },
        ],
    },
];

export const transformationTypes = {
    restore: {
        type: "restore",
        title: "Restore Image",
        subTitle: "Refine images by removing noise and imperfections",
        config: { restore: false },
        // icon: "image.svg",
    },
    removeBackground: {
        type: "removeBackground",
        title: "Background Remove",
        subTitle: "Removes the background of the image using AI",
        config: { removeBackground: false },
        // icon: "camera.svg",
    },
    fill: {
        type: "fill",
        title: "Generative Fill",
        subTitle: "Enhance an image's dimensions using AI outpainting",
        config: { fillBackground: false },
        // icon: "stars.svg",
    },
    remove: {
        type: "remove",
        title: "Object Remove",
        subTitle: "Identify and eliminate objects from images",
        config: {
            remove: { prompt: "", removeShadow: false, multiple: false },
        },
        // icon: "scan.svg",
    },
    recolor: {
        type: "recolor",
        title: "Object Recolor",
        subTitle: "Identify and recolor objects from the image",
        config: {
            recolor: { prompt: "", to: "", multiple: false },
        },
        // icon: "filter.svg",
    },
};

export const aspectRatioOptions = {
    "1:1": {
        aspectRatio: "1:1",
        label: "Square (1:1)",
        width: 1000,
        height: 1000,
    },
    "3:4": {
        aspectRatio: "3:4",
        label: "Standard Portrait (3:4)",
        width: 1000,
        height: 1334,
    },
    "9:16": {
        aspectRatio: "9:16",
        label: "Phone Portrait (9:16)",
        width: 1000,
        height: 1778,
    },
};

export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
};

export const creditFee = -1;
