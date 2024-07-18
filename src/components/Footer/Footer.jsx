import "./Footer.css";
import { useTheme } from "../../contexts/ContextTheme";
import { useData } from "../../contexts/ContextData";

export function FooterMsg({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
}

export function FooterLink({ children, ...rest }) {
  return <a {...rest}>{children}</a>;
}

//eTheme ve theme temayla ilgili verileri içerirken, data genel verileri içerir.
export default function Footer(params) {
  const { eTheme, theme } = useTheme();
  const { data } = useData();
  const { footerData } = data;

  //Bu fonksiyon, temaya göre bir nesnenin hangi renk sınıfını kullanması gerektiğini belirler.
  function getClassClr(obj) {
    return eTheme.dark === theme && obj.colorThemeDark
      ? obj.colorThemeDark
      : obj.color;
  }

  return (
    <div className="footer-wrapper">
      <footer className="footer custom-container">
        <FooterMsg className="footer__msg">{footerData.msg}</FooterMsg>

        <div className="footer__links">
          {footerData.links.map((link) => (
            <FooterLink
              className={`link ${getClassClr(link)}`} // fonksiyon, temaya göre doğru renk sınıfını belirler.
              key={link.name} //benzersiz anahtar
              href={link.to} //baglanti url
            >
              {link.name}
            </FooterLink>
          ))}
        </div>
      </footer>
    </div>
  );
}
