import { Header } from "./components/header/Header";
import { Post } from './Post';

import styles from './App.module.css'

import './global.css'
import { Sidebar } from "./components/Sidebar/Sidebar";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Hugo Romerito"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto suscipit eius ratione veniam modi beatae velit porro fuga veritatis exercitationem adipisci perferendis possimus assumenda culpa quasi, dolorem molestiae hic quo!"
          />

          <Post
            author="Romerito Queiroz"
            content="um novo post muito legal!"
          />
        </main>
      </div>
    </>
  );
}