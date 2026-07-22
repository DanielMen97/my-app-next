'use client';

import {
  Button,
  Input,
  Checkbox,
  Radio,
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

const paises = [
  { label: "Argentina", value: "ar" },
  { label: "Brasil", value: "br" },
  { label: "Chile", value: "cl" },
  { label: "Colombia", value: "co" },
  { label: "México", value: "mx" },
  { label: "Uruguay", value: "uy" },
];

const planes = [
  { label: "Básico", value: "basico" },
  { label: "Estándar", value: "estandar" },
  { label: "Premium", value: "premium" },
];

const tabs = [
  { value: "datos", label: "Datos Personales" },
  { value: "preferencias", label: "Preferencias" },
  { value: "navegacion", label: "Navegación" },
];

export default function Home() {
  return (
    <form className={styles.page}>
      <div className={styles.header}>
        <BackButton onClick={() => alert("Volver")} />
        <h1>Formulario de Prueba</h1>
      </div>

      <div className={styles.tabs}>
        <Tabs tabs={tabs} defaultValue="datos" />
      </div>

      <div className={styles.fields}>
        <Input label="Nombre completo" maxLength={50} showCounter />
        <Input label="Correo electrónico" type="email" />
         {/* <Input label="Contraseña" type="password" error="Mínimo 8 caracteres" /> */}
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
        />

        <Select label="País" options={paises} placeholder="Selecciona tu país" />

        <div>
          <p className={styles.genderLabel}>Género</p>
          <RadioNative label="Masculino" name="genero" value="m" />
          <RadioNative label="Femenino" name="genero" value="f" />
          <RadioNative label="Otro" name="genero" value="o" />
        </div>

        <Radio options={planes} defaultValue="estandar" />

        <Checkbox label="Acepto los términos y condiciones" />

        <Switch label="Recibir notificaciones por correo" />

        <div className={styles.actions}>
          <Button type="submit" variant="main">Enviar</Button>
          <Button type="button" variant="secondary">Cancelar</Button>
          <Button type="button" pressed>Presionado</Button>
          <Button type="button" disabled>Deshabilitado</Button>
        </div>
      </div>

      <div className={styles.navigation}>
        <HomeButton tooltip="Inicio" side="top" />
        <LogoutButton tooltip="Cerrar sesión" side="top" />
      </div>
    </form>
  );
}
