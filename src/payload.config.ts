import path from "node:path";
import { fileURLToPath } from "node:url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig, type SharpDependency } from "payload";
import sharp from "sharp";
import { Admins } from "./collections/admins";
import { Media } from "./collections/media";
import { Pages } from "./collections/pages";
import { Projects } from "./collections/projects";
import { Technologies } from "./collections/technologies";
import { Footer } from "./globals/footer";
import { Navigation } from "./globals/navigation";
import { seo } from "./plugins/seo";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Admins.slug,
  },
  collections: [Admins, Media, Pages, Projects, Technologies],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI ?? "",
  }),
  editor: lexicalEditor(),
  globals: [Navigation, Footer],
  plugins: [
    seo,
    vercelBlobStorage({
      collections: {
        media: true,
      },
      enabled: true,
      token: process.env.BLOB_READ_WRITE_TOKEN ?? "",
    }),
  ],
  secret: process.env.PAYLOAD_SECRET ?? "",
  sharp: sharp as unknown as SharpDependency,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
