import essai from "./assets/essai-project.png";
import socialCookbook from "./assets/social-cookbook-project.png";
import blogPost from "./assets/blog-post-api-project.png";
import bulletin from "./assets/bulletin-project.png";
import magnidia from "./assets/magnidia-project.png";

interface Project {
  id: number;
  img: string;
  title: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    img: magnidia,
    title: "Magnidia",
    link: "https://magnidia.com",
  },
  {
    id: 2,
    img: essai,
    title: "EssAI",
    link: "https://www.ess-ai.com",
  },
  {
    id: 3,
    img: socialCookbook,
    title: "Social Cookbook",
    link: "https://github.com/orgs/Social-Cookbook/repositories",
  },
  {
    id: 4,
    img: bulletin,
    title: "Bulletin",
    link: "https://github.com/ianwood103/Bulletin",
  },
  {
    id: 5,
    img: blogPost,
    title: "Blog Post API",
    link: "https://github.com/ianwood103/blog-post-api",
  },
];
