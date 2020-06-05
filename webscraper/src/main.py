import requests
import json

from bs4 import BeautifulSoup
from typing import Tuple


def get_tasks_table(master: str) -> Tuple[BeautifulSoup, bool]:
    response = requests.get(f'https://oldschool.runescape.wiki/w/{master}')

    tables = BeautifulSoup(
        response.text, 'html.parser'
    ).find_all('table')

    tasks_table = None

    for table in tables:
        header = table.find('tr')
        if "Monster" in header.text and "Weight" in header.text:
            tasks_table = table
            break

    if tasks_table is None:
        raise Exception("Tasks table not found")

    return tasks_table



def writeTableToJson(filename: str, table: BeautifulSoup):
    tasks_data = []

    rows = table.find_all("tr")
    for row in rows[1:]:
        data = list(map(
            lambda x: x.text.replace("\n", ""),
            row.find_all("td")
        ))

        if len(row) < 5:
            continue

        tasks_data.append({
            "monster": data[0],
            "weight": data[-1]
        })

    with open(f'../out/{filename}', 'w') as outfile:
        json.dump(tasks_data, outfile, indent=2)


masters = ["konar_quo_maten", "duradel"]

for master in masters:
    table = get_tasks_table(master)
    writeTableToJson(f'{master}.json', table)
