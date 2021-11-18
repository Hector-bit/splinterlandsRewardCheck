
my_dict = {}

with open("cards.txt") as raw_input:
    for i in raw_input:
        splitted = i.split(",")
        num = splitted[0].split("(")[1]
        name = splitted[1][1:-3]
        print('"',num,'"',":", name, ",")




