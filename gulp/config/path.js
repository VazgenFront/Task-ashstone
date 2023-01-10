import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const builderFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    js: `${builderFolder}/js/`,
    css: `${builderFolder}/css/`,
    html: `${builderFolder}/`,
    images: `${builderFolder}/img`,
    files: `${builderFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/app.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: builderFolder,
  builderFolder: builderFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``,
};
