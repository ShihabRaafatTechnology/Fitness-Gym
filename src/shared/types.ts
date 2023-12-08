export enum selectedPageIndex {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}

export interface navbarPagesType {
    id: number;
    title: string;
}

export interface benefitsType {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ourClassesType {
    name: string;
    description?: string;
    image: string;
}