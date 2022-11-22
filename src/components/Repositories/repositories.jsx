import { useState, useEffect } from "react";
import Axios from "axios";
import "./repositories.css";

export function Repositories() {
  const [repos, setRepos] = useState([]);
  const [termoBuscado, setTermoBuscado] = useState("");
  const [reposFiltrados, setReposFiltrados] = useState([]);
  const baseURL = "https://api.github.com/users/pati-rocha/repos";

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(baseURL);
      setRepos(response.data);
      console.log(response.data);
    }
    getData();
  }, []);

  function handleSearch(event) {
    setTermoBuscado(event.target.value);
  }

  useEffect(() => {
    const filtered = repos.filter((repo) => {
      return repo.name.includes(termoBuscado.toLowerCase());
    });
    setReposFiltrados(filtered);
  }, [repos, termoBuscado]);

  return (
    <div className="input">
      <input placeholder="Digite sua busca" onChange={handleSearch} />
      <div className="main">
        {reposFiltrados.map((repo) => {
          return (
            <a
              key={repo.id}
              className="card"
              href={repo.html_url}
              target="_blank"
            >
              <h3>{repo.name}</h3>
            </a>
          );
        })}
      </div>
    </div>
  );
}
