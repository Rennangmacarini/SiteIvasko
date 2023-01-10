import styles from "./styles.module.scss";
import Link from "next/link";


function meuEvento()
{
    
}
export function Evento() {
  return (
    <div className={styles.globalMobile}>
      <div className={styles.menuMobile}>
        <div className={styles.contentMenu}>
          <Link href={"/"}>Início</Link>
          <Link href={"/about"}>Quem Somos</Link>
          <Link href={"/stores"}>Lojas</Link>
          <Link href={"/books"}>Livro de Receitas</Link>
          <Link href="/">Delivery</Link>
          <Link
            href="https://app.skeel.com.br/ivasko"
            target={"_blank"}
            rel="noreferrer"
          >
            Trabalhe Conosco
          </Link>
          <Link
            href="https://meucartao.senff.com.br/ivasko/bem-vindo"
            target={"_blank"}
            rel="noreferrer"
          >
            CARTÃO IVASKO
          </Link>
        </div>
      </div>
    </div>
  );
}
