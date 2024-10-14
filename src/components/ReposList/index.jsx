import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

Const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ) : (
        <ul className={styles.list}>
            {repos.map(({ id, name, language, html_url }) => (
                <li clasName={styles.listItem} key={id}>
                    <div clasName={styles.itemName}>
                        <b>Nome:</b>
                        {name}
                    </div>
                    <div clasName={styles.itemLanguage}>
                        <b>Linguagem:</b>
                        {language}
                    </div>
                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                </li>
            ))}
            <li>Repositório</li>
        </ul>
        )}
        </div>
    )
}

export default ReposList;