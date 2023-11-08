export type Repository = {
	id: number;
	name: string;
	html_url: string;
	description: string;
	homepage: string;
	language: string;
	topics: string[];
	readme: string;
};

export type ApiResponse = {
	total_count: number;
	incomplete_results: boolean;
	items: Repository[];
};
