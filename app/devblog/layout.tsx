import SEO from "@/components/SEO";
import { Metadata } from "next";

export const metadata: Metadata = SEO({
	title: "Developer Blog | levdev",
	type: "website",
	additionalKeywords: ["levdev", "game", "unreal", "engine", "c++", "game", "developer"],
	clearDefaultKeywords: true,
	url: "/devblog",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
	return children;
};
export default Layout;
