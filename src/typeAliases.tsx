// export type NavigationItem = {
// 	id: number;
// 	text: string;
// 	slug: string;
// 	style: string;
// 	parent: boolean;
// };

// export type HeaderProps = {
// 	globalContent: {
// 		logo: string;
// 		logoType: string;
// 		logoAltText: string;
// 		navigation: NavigationItem[];
// 	};
// };

// export type NavigationProps = {
// 	navigationItems: NavigationItem[];
// };

// export type HomepageProps = {
// 	homepageContent: {
// 		hero: {
// 			h1: string;
// 		};
// 	};
// };

export type NavigationItem = {
	id: number;
	text: string;
	slug: string;
	style: string;
	parent: boolean;
};

export type GlobalContent = {
	logo: string;
	logoType: string;
	logoAltText: string;
	navigation: NavigationItem[];
};

export type HomepageContent = {
	hero: {
		h1: string;
	};
};
