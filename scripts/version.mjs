import fs from "node:fs";
import path from "node:path";
import versionWriter from "@aurodesignsystem/auro-library/scripts/build/versionWriter.js";

versionWriter.writeDepVersionFile("@aurodesignsystem/auro-button");
versionWriter.writeDepVersionFile("@aurodesignsystem/auro-icon");

/**
 * Writes the package version of auro-drawer to a file.
 * This function reads the version from the package.json file and writes it to a version file in the src directory.
 * It supplements auro-library.versionWriter, which does not support self-versioning.
 */
function writeSelfVersionFile() {
  const auroSubNameIndex = 5;

  const data = fs.readFileSync(path.join(process.cwd(), "./package.json"));
  const json = JSON.parse(data);
  const { version, name } = json;
  const elemSubName = name.substring(name.indexOf("auro-") + auroSubNameIndex);
  const versionFilePath = `./src/${elemSubName}Version.js`;

  fs.writeFileSync(versionFilePath, `export default '${version}'`);
}

writeSelfVersionFile();
