import{spawn}from'child_process'

const c=spawn(`f=\`find "$(pwd)" -name *.service\`;
b=\`basename $f\`;
sudo ln -sf $f /etc/systemd/system/$b;
sudo systemctl enable $b;
sudo systemctl restart $b;
sudo systemctl status $b;
sudo journalctl -fu $f`,[],{shell:true})
c.stdout.setEncoding('utf8').on('data',d=>console.log(d.split('\n').join('\n\r')))
c.stderr.setEncoding('utf8').on('data',d=>console.error(`\x1b[31m${d.split('\n').join('\n\r')}\x1b[0m`))