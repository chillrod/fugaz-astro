export interface ImageModel {
  src: ImageMetadata;
  alt: string;
}

export interface ClientModel {
  data: {
    nome: string;
    slug: string;
    descricao: string;
    imagemPaginaPrincipal: ImageModel;
    dataDoProjeto: string;
    instagram: string;
    detalhamentoImagemPrincipal: ImageModel;
    detalhamentoSecao1: {
      tituloSecao1: string;
      secao1Texto1: string;
      imagem1: ImageModel;
      imagem2: ImageModel;
      imagem3: ImageModel;
      secao1Texto2: string;
    };
    detalhamentoSecao2: {
      tituloDaSecao2: string;
      textoSecao2: string;
      texto2Secao2: string;
      image1Secao2: ImageModel;
      imagem2Secao2: ImageModel;
    };
    detalhamentoSecao3: {
      tituloDaSecao3: string;
      imagensGrandes: { imagem: ImageModel }[];
      imagensMenores: { imagens: ImageModel }[];
    };
  };
}
