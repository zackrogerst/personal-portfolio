export type GlobalContent = {
	logo: string;
	logoType: string;
	logoAltText: string;
	navigation: NavigationItem[];
};

export type NavigationItem = {
	id: number;
	text: string;
	slug: string;
	style: string;
	parent: boolean;
};

export type HeaderProps = {
	globalContent: GlobalContent;
};

export type NavigationProps = {
	navigationItems: NavigationItem[];
};
