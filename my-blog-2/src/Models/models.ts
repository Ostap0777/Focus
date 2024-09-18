export interface Post {
	id: string;
	title: string;

	description: string
 }
export interface HomePageProps {
	posts: Post[];
 }