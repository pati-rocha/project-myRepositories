import "./section.css";
import foto from "../../../public/pati.jpeg";

export function Section() {
  return (
    <section className="section-container">
      <p className="section-paragraph">
        Desenvolvedora Frontend participante do Bootcamp Todas em Tech da
        Reprograma. Curiosa legítima e apreciadora de tecnologia invisto no
        aprendizado contínuo como forma de aprimorar meus conhecimentos
        iniciados de forma autônoma.Tenho como objetivo me tornar desenvolvedora
        especialista com uma pitada generalista.
      </p>
      <img className="section-img" src={foto} alt="logo" />
    </section>
  );
}
