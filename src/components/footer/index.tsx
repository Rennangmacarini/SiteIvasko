
import Link from "next/link";
import styles from "./styles.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="" />
      </div>
      <div className={styles.content}>
        <a>Sobre nós</a>
        <a>Nossas Lojas</a>
        <a>Pólitica de privacidade</a>
        <a>Sobre Cookies</a>
        <a>DPO</a>
      </div>

      <div className={styles.information}>
        <h1>Retirada e Entregas</h1>
        <h2>Horário de atendimento</h2>
      </div>

      <div className={styles.payment}>
        <h1>Forma de Pagamentos</h1>
        <div className={styles.card}>
          <img src="/icon/iconOne.png" alt="" />
          <img src="/icon/iconTwo.png" alt="" />
          <img src="/icon/iconThree.png" alt="" />
          <img src="/icon/iconFour.png" alt="" />
          <img src="/icon/iconFive.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="/icon/iconSex.png" alt="" />
          <img className={styles.icon} src="/icon/iconSeven.png" alt="" />
          <img src="/icon/iconEight.png" alt="" />
          <img className={styles.icon} src="/icon/iconNine.png" alt="" />
        </div>
      </div>

      <div className={styles.nets}>
        <h1>SIGA-NOS</h1>
        <div className={styles.netCard}>
          <div>
            <Link href="https://www.instagram.com/superivasko/"
              target={"_blank"}
              rel="noreferrer">
            <img src="/assets/insta.png" alt="" />
            </Link>
          </div>
          <div>
          <Link href="https://www.facebook.com/superivasko/"
              target={"_blank"}
              rel="noreferrer"> 
            <img src="/assets/face.png" alt="" />
            </Link>
          </div>
          
          <div>
            <Link href="https://br.linkedin.com/company/grupoivasko"
              target={"_blank"}
              rel="noreferrer"> 
            <img src="/assets/linkedin.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
