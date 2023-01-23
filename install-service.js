#!/usr/bin/env node
import{spawn}from'child_process'
import fs from'fs'
import path from'path'

const D=console.log
const x='.service'
fs.readdir(process.cwd(),(err,files)=>{
  files.filter(f=>f.endsWith(x)).forEach(f=>{
    const b=path.basename(f,x)
    D(`Installing ${b}${x}`)
    const c=spawn(`sudo ln -sf ${f} /etc/systemd/system/${b};
    sudo systemctl enable ${b};
    sudo systemctl restart ${b};
    sudo systemctl status ${b};
    sudo journalctl -fu ${f}`,[],{shell:true})
    c.stdout.setEncoding('utf8').on('data',d=>console.log(d.split('\n').join('\n\r')))
    c.stderr.setEncoding('utf8').on('data',d=>console.error(`\x1b[31m${d.split('\n').join('\n\r')}\x1b[0m`))    
  })
})