import logoNetflix from '../../assets/img/logo-netflix.svg';
import separatorSection from '../../assets/img/separator-section-big.svg';
import "./start.css"

export const Start = () => {
  return (
    <section className="date-release">
      <h2>Now Available on</h2>
      <a
        className="date-release__link-netflix"
        href="https://www.netflix.com/cl/title/81054853"
        target="_blank">
        <img src={logoNetflix} alt="logo Netflix" />
      </a>
      <img
        className="date-release__separator"
        src={separatorSection}
        alt="separator sections"
      />
    </section>
  );
};