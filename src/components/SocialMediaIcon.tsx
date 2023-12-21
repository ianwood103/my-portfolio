// mui
import { Tooltip } from "@mui/material";

// react
import { FC } from "react";

interface SocialMediaIconProps {
  imgSrc: string;
  href: string;
  title: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({ imgSrc, href, title }) => {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      <a href={href} target={title}>
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-icons cursor-pointer hover:bg-secondary transition-all ease-linear duration-300">
          <img src={imgSrc} alt="" />
        </div>
      </a>
    </Tooltip>
  );
};

export default SocialMediaIcon;
