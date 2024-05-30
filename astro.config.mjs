import { defineConfig, passthroughImageService} from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    tailwind(),
    icon({
      include: {
        "ant-design": ["*"],
      },
    }),
  ],
});
