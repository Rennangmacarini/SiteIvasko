import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header>
      <div className={styles.header}>
        <img src="/images/logo.png" alt="Logo ivasko" />
        <div className={styles.menu}>
          <Link href={"/"}>Início</Link>
          <Link href={"/about"}>Quem Somos</Link>
          <Link href={"/stores"}>Lojas</Link>
          <Link href={"/books"}>Livro de Receitas</Link>
          <span>Delivery</span>
          <Link
            href="https://app.skeel.com.br/ivasko"
            target={"_blank"}
            rel="noreferrer"
          >
            Trabalhe Conosco
          </Link>
          <span>CARTÃO IVASKO</span>
        </div>
        <div className={styles.icon}>
          <div>
            <Link
              href="https://www.facebook.com/superivasko/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/face.png" alt="Logo  facebook" />
            </Link>
          </div>

          <div>
            <Link
              href="https://www.instagram.com/superivasko/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/insta.png" alt="Logo Instagram" />
            </Link>
          </div>

          <div>
            <Link
              href="https://br.linkedin.com/company/grupoivasko"
              target={"_blank"}
              rel="noreferrer"
            >
              <img src="/assets/linkedin.png" alt="Logo Linkdin" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
