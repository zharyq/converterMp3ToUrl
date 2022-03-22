import fs from "fs";

function convertMp3ToBase64Url({ file, outfile }) {
  let musicFile = fs.readFileSync(file);
  let musicUrl = new Buffer.from(musicFile, "binary").toString(
    "base64"
  );
  fs.writeFileSync(outfile, "data:audio/mpeg;base64," + musicUrl);
}
