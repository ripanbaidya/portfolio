import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { HiArrowTopRightOnSquare, HiDocumentText, HiEnvelope } from "react-icons/hi2";
import { SiLeetcode } from "react-icons/si";
import type { LinkIconName } from "../types/portfolio";

interface LinkIconProps {
  name: LinkIconName;
  className?: string;
}

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: HiEnvelope,
  x: FaXTwitter,
  instagram: FaInstagram,
  leetcode: SiLeetcode,
  youtube: FaYoutube,
  resume: HiDocumentText,
  external: HiArrowTopRightOnSquare,
};

export function LinkIcon({ name, className = "h-4 w-4" }: LinkIconProps) {
  const Icon = iconMap[name];

  return <Icon className={className} aria-hidden="true" />;
}
