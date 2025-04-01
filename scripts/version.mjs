import versionWriter from '@aurodesignsystem/auro-library/scripts/build/versionWriter.js';
import fs from "fs";
import path from "path";

versionWriter.writeDepVersionFile('@aurodesignsystem/auro-button');
versionWriter.writeDepVersionFile('@aurodesignsystem/auro-icon');

function writeSelfVersionFile() {
  const auroSubNameIndex = 5;

  const data = fs.readFileSync(path.join(process.cwd(), "./package.json"));
  const json = JSON.parse(data);
  const {version, name} = json;
  const elemSubName = name.substring(name.indexOf('auro-') + auroSubNameIndex);
  const versionFilePath = `./src/${elemSubName}Version.js`;

  fs.writeFileSync(versionFilePath, `export default '${version}'`);
}

writeSelfVersionFile();
