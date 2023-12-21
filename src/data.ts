import essai from "./assets/essai-project.png";
import socialCookbook from "./assets/social-cookbook-project.png";
import blogPost from "./assets/blog-post-api-project.png";
import bulletin from "./assets/bulletin-project.png";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "other",
    img: bulletin,
    title: "Bulletin",
    link: "https://github.com/ianwood103/Bulletin",
  },
  {
    id: 3,
    category: "web",
    img: essai,
    title: "EssAI",
    link: "https://www.ess-ai.com",
  },
  {
    id: 4,
    category: "web",
    img: socialCookbook,
    title: "Social Cookbook",
    link: "https://github.com/orgs/Social-Cookbook/repositories",
  },
  {
    id: 5,
    category: "web",
    img: blogPost,
    title: "Blog Post API",
    link: "https://github.com/ianwood103/blog-post-api",
  },
];
