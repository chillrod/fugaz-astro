import type { ImageModel } from "./ClientModel";

export interface AboutModel {
  data: {
    tituloSecao1: string;
    textoSecao1: string;
    imagem1: ImageModel;
    imagem2: ImageModel;
    imagem3: ImageModel;
    imagem4: ImageModel;
    tituloSecao2: string;
    textoSecao2: string;
    listaCompetenciasSecao2: {
      titulo: string;
      desc: string;
    }[];
    tituloSecao3: string;
    textoSecao3: string;
    listaCompetenciasSecao3: {
      titulo: string;
      skills: {
        competencia: string;
      }[];
    }[];
    tituloNossaEquipe: string;
    textoNossaEquipe: string;
  };
}
