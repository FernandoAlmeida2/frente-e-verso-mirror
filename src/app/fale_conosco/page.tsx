"use client";

import styles from "./page.module.css";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function FaleConosco() {

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData]: [
    FormData,
    Dispatch<SetStateAction<FormData>>
  ] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      }
    })
  }

  return (
    <div className={styles.container}>
      <h1>Fale Conosco</h1>

      <form onSubmit={onSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.formControl}
            placeholder="Escreva seu nome"
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Escreva seu e-mail"
            className={styles.formControl}
            onChange={handleInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            className={styles.formControl}
            placeholder="Sua mensagem..."
            onChange={handleInput}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.formBtn}>
          Enviar mensagem
        </button>
        <label className={styles.agreementBox}>
          <input type="checkbox" required />
          Eu permito que o Escritório de Dados processe
          <br />
          meus dados pessoais fornecidos acima
        </label>
      </form>
      {submitted && <div>Mensagem enviada</div>}
    </div>
  );
}
