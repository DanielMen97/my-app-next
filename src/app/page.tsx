"use client"
import {
  Button,
  Input,
  Checkbox,
  RadioNative,
  Switch,
  Select,
  Tabs,
  BackButton,
  HomeButton,
  LogoutButton,
} from "@ui-library/react";
import styles from "./page.module.css";
import { TextField } from "@mui/material";
import { SubmitEvent } from "react";

const paises = [
  { label: "Argentina", value: "ar" },
  { label: "Brasil", value: "br" },
  { label: "Chile", value: "cl" },
  { label: "Colombia", value: "co" },
  { label: "México", value: "mx" },
  { label: "Uruguay", value: "uy" },
];

const estadoCivilOptions = [
  { label: "Soltero/a", value: "soltero" },
  { label: "Casado/a", value: "casado" },
  { label: "Divorciado/a", value: "divorciado" },
  { label: "Viudo/a", value: "viudo" },
];

const tabs = [
  { value: "datos", label: "Datos Personales" },
  { value: "preferencias", label: "Preferencias" },
  { value: "navegacion", label: "Navegación" },
];

function onHandleSubmit (event:SubmitEvent<HTMLFormElement>) {
  event.preventDefault()
  const form = new FormData(event.currentTarget)

  const objetoDatos = Object.fromEntries(form.entries())

  console.log(objetoDatos)
}

export default function Home() {
  return (
    <form className={styles.form} onSubmit={onHandleSubmit} autoComplete="off">
      <Tabs tabs={tabs} defaultValue="datos"></Tabs>
      <Input label="Nombre" showCounter maxLength={200} name="name" autoComplete="off"/>
      <Input label="Apellido" name="lastname"/>
      <Input label="Email" type="email" name="email" autoComplete="off"/>
      <Input label="Teléfono" type="tel" name="phone"/>
      <Select label="País" options={paises} placeholder="Selecciona un país" name="country" />
      <Input label="Ciudad" disabled />
      <div className={styles.radioGroup}>
        <RadioNative name="document" label="Pasaporte"  value="passport"/>
        <RadioNative name="document" label="Cedula" value="id"/>
      </div>
      <Select
        label="Estado Civil"
        options={estadoCivilOptions}
        placeholder="Selecciona estado civil"
        name="civil"
      />
      <div className={styles.checkboxGroup}>
        <Checkbox label="Recibir newsletter" name="newsletter"/>
        <Checkbox label="Aceptar términos y condiciones" name="terms"/>
      </div>
      <Switch label="Notificaciones por email" name="noti"/>
      <Button type="submit" variant="main">
        Enviar Formulario
      </Button>
      <Button type="button" variant="main">
        Limpiar
      </Button>
    </form>
  );
}
