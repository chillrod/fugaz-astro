const BUILDER_API_PUBLIC_KEY = import.meta.env.BUILDER_API_PUBLIC_KEY;

export const BUILDER_URLS = {
  clients: "clients",
  home: {
    header: "header",
  },
  common: "textos-comuns",
  info: "informacoes-fugaz",
  services: "servicos",
  about: "sobre",
  equipe: "equipe",
};

const baseURL = "https://cdn.builder.io/api/v3/content/";

export const fetchBuilderContent = async (url: string) => {
  const fetchURL = `${baseURL}${url}?apiKey=${BUILDER_API_PUBLIC_KEY}&cachebust=true`;

  const { results } = await fetch(fetchURL)
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return results;
};
