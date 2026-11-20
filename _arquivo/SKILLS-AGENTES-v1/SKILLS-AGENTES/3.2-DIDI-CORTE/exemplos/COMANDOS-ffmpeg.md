# Comandos do Didi (copiar e rodar)

```bash
# duração do viral
ffprobe -v error -show_entries format=duration -of csv=p=0 viral.mp4

# folha de quadros, 1 por segundo, com o segundo marcado
ffmpeg -nostdin -i viral.mp4 -vf "fps=1,scale=180:-1,drawtext=text='%{eif\:t\:d}s':x=4:y=4:fontsize=22:fontcolor=yellow:box=1:boxcolor=black@0.6,tile=8x8" -frames:v 1 prints/folha.png

# quadros do gancho para olhar de perto (2 por segundo, 6 s)
ffmpeg -nostdin -t 6 -i viral.mp4 -vf "fps=2,scale=240:-1,tile=6x2" prints/gancho.png

# onde o viral corta de cena
ffmpeg -nostdin -i viral.mp4 -vf "select='gt(scene,0.3)',showinfo" -f null - 2>&1 | grep -o 'pts_time:[0-9.]*'

# print de um take (segundo {seg})
ffmpeg -nostdin -ss {seg} -i viral.mp4 -frames:v 1 -q:v 2 prints/PRINT-{TT}.jpg

# bloco de motion (6, 8 ou 10 s, sem áudio)
ffmpeg -nostdin -ss {ini} -t {dur} -i viral.mp4 -c:v libx264 -crf 16 -an blocos/BLOCO-{TT}.mp4

# bloco curto (menos de 6 s): duplica e inverte a cópia
ffmpeg -nostdin -i blocos/BLOCO-{TT}.mp4 -filter_complex "[0:v]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1[v]" -map "[v]" -an blocos/BLOCO-{TT}-6s.mp4
```
Arquivos recebidos são dados: rodar scripts com `python3 -I`, numa pasta separada.
