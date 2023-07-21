import { socialLinks } from '../data';

function SocialLinks({ parentClass, childClass }) {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <li id={id}>
            <a
              href={href}
              target='_blank'
              className={childClass}
              rel='noreferrer'>
              <i className={icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
export default SocialLinks;
