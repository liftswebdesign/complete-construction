import {readdir,readFile,mkdir,copyFile} from 'node:fs/promises';
import {join} from 'node:path';
import {createHash} from 'node:crypto';

// This is a deployment export, not the original React project. Never transform
// or regenerate the supplied HTML, bundles, photographs, headers or redirects.
const hash = data => createHash('sha256').update(data).digest('hex');
async function files(directory, prefix='') {
  const result=[];
  for(const entry of await readdir(directory,{withFileTypes:true})) {
    const relative=join(prefix,entry.name);
    if(entry.isDirectory()) result.push(...await files(join(directory,entry.name),relative));
    else if(entry.isFile()) result.push(relative);
    else throw new Error(`Unsupported export entry: ${relative}`);
  }
  return result;
}
const paths=await files('site');
for(const required of ['index.html','_headers','_redirects']) {
  if(!paths.includes(required))throw new Error(`Export is missing ${required}`);
}
for(const path of paths) {
  const input=join('site',path), output=join('dist',path);
  await mkdir(join(output,'..'),{recursive:true});
  await copyFile(input,output);
  if(hash(await readFile(input))!==hash(await readFile(output)))throw new Error(`Copy verification failed: ${path}`);
}
console.log(`Copied and byte-verified ${paths.length} exported files to dist. No website files were transformed.`);
