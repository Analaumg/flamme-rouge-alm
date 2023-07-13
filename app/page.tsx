import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "./components/card/card";
import { Mazo } from "./components/mazo/mazo";
import { Jugador } from "./components/jugador/jugador";
import { Juego } from "./components/juego/juego";

export default function Home() {
  return (
    <div>
      <h1>FLAMME ROUGE BY ALM</h1>

      <Juego numeroJugadores={4}></Juego>
    </div>
  );
}
