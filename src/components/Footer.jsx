/**
 * @copyright 2024 Aung Chan Myae
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";

/**
 * Components
 */

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/chanmyae97",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewithsadee",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/codewithsadee",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos; work together today!
            </h2>

            <ButtonPrimary
              href="mailto:acm.fullstack@gmail.com"
              label="Start Project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 lg:pl-20 ">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Social</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8 ">
          <a href="/" className="logo reveal-up">
            <img src="/favicon-32x32.png" width={40} height={40} alt="Logo" />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2024 <span className="text-zinc-200">chanmyae97</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
