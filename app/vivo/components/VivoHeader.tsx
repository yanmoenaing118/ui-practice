import styles from "@/app/styles/vivo/modules/VivoHeader.module.scss";
import Link from "next/link";

export default function VivoHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_menu}>
          <button>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="更多"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="编组-40">
                  <path
                    d="M20.5,17 C20.7761424,17 21,17.2238576 21,17.5 L21,18.5 C21,18.7761424 20.7761424,19 20.5,19 L3.5,19 C3.22385763,19 3,18.7761424 3,18.5 L3,17.5 C3,17.2238576 3.22385763,17 3.5,17 L20.5,17 Z M20.5,11 C20.7761424,11 21,11.2238576 21,11.5 L21,12.5 C21,12.7761424 20.7761424,13 20.5,13 L3.5,13 C3.22385763,13 3,12.7761424 3,12.5 L3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L20.5,11 Z M20.5,5 C20.7761424,5 21,5.22385763 21,5.5 L21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 L3,5.5 C3,5.22385763 3.22385763,5 3.5,5 L20.5,5 Z"
                    id="形状结合"
                    fill="#242933"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>

        <div className={styles.logo}>LOGO</div>

        <ul>
          <li>
            <Link href="">Home </Link>
          </li>
          <li>
            <Link href=""> Products</Link>
          </li>
          <li>
            <Link href="">Retail Stores</Link>
          </li>
          <li>
            <Link href="">Support</Link>
          </li>
          <li>
            <Link href="">Funtouch OS</Link>
          </li>
          <li>
            <Link href="">Explore ViVo</Link>
          </li>
        </ul>

        <div className={styles.nav_search}>
          <button>search</button>
        </div>
      </nav>
    </header>
  );
}
