/* eslint-disable @next/next/no-img-element */
import { useState, FormEvent } from "react";
import styles from "./styles.module.scss";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState("carregando");

  const handleSubmit = async (e: FormEvent) => {
    setSent("carregando");
    setLoading(true);
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "") return;
    else {
      console.log("Sending");
      let data = {
        name,
        email,
      };
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.status === 200) {
          console.log("Response succeed");
          setSubmitted(true);
          setName("");
          setEmail("");
          setSent("enviado");
        }
      } catch {
        (error) => console.log(error);
        setSent("error");
      }
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Inscreva-se já e receba uma apostila com conteúdo EXCLUSIVO!</h1>

        <form onSubmit={handleSubmit}>
          <p>Digite seu nome:</p>
          <input
            type="text"
            placeholder="Digite seu nome"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <p>Digite seu e-mail:</p>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <div
            style={{
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {sent === "carregando" ? (
              <button type="submit">
                {loading === true ? (
                  <div className={styles.loading} />
                ) : (
                  "Quero receber"
                )}{" "}
              </button>
            ) : sent === "enviado" ? (
              <p>Cadastro feito com sucesso!</p>
            ) : (
              <p>Ocorreu um erro, tente novamente mais tarde!</p>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
