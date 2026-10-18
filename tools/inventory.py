import hashlib, json, struct
from collections import Counter
from pathlib import Path
root = Path('vendor/original')
Path('docs/recovery').mkdir(parents=True,exist_ok=True)
entries=[]
for p in sorted(root.rglob('*')):
    if p.is_file():
        b=p.read_bytes()
        entries.append({'path':p.relative_to(root).as_posix(),'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
Path('docs/recovery/input-manifest.json').write_text(json.dumps(entries,indent=2)+'\n',encoding='utf8')
report={'originalFiles':len(entries),'originalBytes':sum(x['bytes'] for x in entries),'extensions':dict(Counter(Path(x['path']).suffix or '(none)' for x in entries)),'decodedResourcePackages':len(list(Path('data').rglob('*.json'))),'csharpFiles':len([p for p in Path('src/Peacock').rglob('*.cs') if 'obj' not in p.parts]),'portableExecutables':[]}
for name in ['PeacockPatcher.exe','nodedist/node.exe']:
    b=(root/name).read_bytes(); pe=struct.unpack_from('<I',b,60)[0]; opt=pe+24
    directory=opt+(112 if struct.unpack_from('<H',b,opt)[0]==0x20b else 96)
    clr=struct.unpack_from('<II',b,directory+14*8)
    report['portableExecutables'].append({'path':name,'machine':hex(struct.unpack_from('<H',b,pe+4)[0]),'managed':bool(clr[0]),'clrDirectoryRva':clr[0]})
Path('docs/recovery/inventory.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf8')
print(json.dumps(report,indent=2))
