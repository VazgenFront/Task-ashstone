import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
  del(`./${app.path.rootFolder}.zip`);
  return app.gulp
    .src(`./${app.path.builderFolder}/**/*.*`, {})
    .pipe(zipPlugin(`front-davtyan.zip`))
    .pipe(app.gulp.dest("./"));
};
