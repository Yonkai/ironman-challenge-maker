# gets item names without filtering non-unqiues
from osrsbox import items_api
all_db_items = items_api.load()
text_file = open("items.txt", "w")
text_file.write("[")
for item in all_db_items: text_file.write( '\'' + item.name.replace('\'','') + '\',')
text_file.write("]")
text_file.close()
