# gets item names without filtering non-unqiues
from osrsbox import monsters_api
all_db_monsters = monsters_api.load()
text_file = open("monsters.txt", "w")
text_file.write("[")
for monster in all_db_monsters: text_file.write( '\'' + monster.name.replace('\'','') + '\',')
text_file.write("]")
text_file.close()
