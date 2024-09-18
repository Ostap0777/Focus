export interface Post {
	id: string;
	title: string;
	excerpt: string;
	description: string
 }
export interface HomePageProps {
	posts: Post[];
 }