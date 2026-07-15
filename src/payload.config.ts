import path from "node:path";
import { fileURLToPath } from "node:url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Admins } from "./collections/admins";
import { Media } from "./collections/media";
import { Projects } from "./collections/projects";
import { About } from "./globals/about";
import { Home } from "./globals/home";
import { Services } from "./globals/services";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Admins.slug,
  },
  collections: [Admins, Media, Projects],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI ?? "",
  }),
  editor: lexicalEditor(),
  globals: [Home, About, Services],
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      enabled: true,
      token: process.env.BLOB_READ_WRITE_TOKEN ?? "",
    }),
  ],
  secret: process.env.PAYLOAD_SECRET ?? "",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
