import type { ImageModel } from "./ClientModel";

export interface TeamModel {
  data: {
    nome: string;
    cargo: string;
    descricao: string;
    foto: ImageModel;
  };
}
