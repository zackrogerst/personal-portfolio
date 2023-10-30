import { createContext, ReactNode, useContext } from "react";

import { HomepageContent, GlobalContent } from "../typeAliases";

type AppContextType = {
	globalContent: GlobalContent;
	homepageContent: HomepageContent;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

type AppContextProviderProps = {
	children: ReactNode;
	value: AppContextType;
};

export function AppContextProvider({ children, value }: AppContextProviderProps) {
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within a AppContextProvider");
	}
	return context;
}
