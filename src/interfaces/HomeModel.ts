import type { ImageModel } from "./ClientModel";

export interface HomeModel {
  data: {
    title: string;
    desc: string;
    textoClientes: string;
    textoServicos: string;
    textoContato: string;
    fotoAbaixoClientes: ImageModel;
    fotoAcimaservicos: {
      Default: {
        imagens: ImageModel;
      }[];
    };
  };
}
