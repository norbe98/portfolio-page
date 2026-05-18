import { SiGithub, SiInstagram } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Links() {

    return (
            <div className="flex gap-6 text-2xl mt-10">
              <a href="https://github.com/norbe98" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-transform hover:-translate-y-1">
              <SiGithub title="GitHub" /></a>
              <a href="https://hu.linkedin.com/in/norbert-szoke" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-transform hover:-translate-y-1">
                <SlSocialLinkedin title="LinkedIn" /></a>
              <a href="https://www.instagram.com/szoszo_norbi" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-transform hover:-translate-y-1">
                <SiInstagram title="Instagram" /></a>
            </div>
    )
}