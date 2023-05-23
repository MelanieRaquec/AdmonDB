import { atom } from "recoil";

export const baseDeDatosState = atom({
    key: 'baseDeDatosState', // unique ID (with respect to other atoms/selectors)
    default: {
        seleccionada:null
    }, // default value (aka initial value)
  });