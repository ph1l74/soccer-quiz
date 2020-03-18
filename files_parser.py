import csv
import pathlib
import config

current_path = str(pathlib.Path(__file__).parent.absolute())
file_path = current_path + config.file_path


def list_formatter(question_list):
    result_dict = []
    i = 1
    while i < len(question_list):
        question_object = {}
        for index, value in enumerate(question_list[i]):
            cur_key = question_list[0][index]
            if cur_key == "answers":
                question_object[cur_key] = value.split("|")
            else:
                question_object[cur_key] = value
        result_dict.append(question_object)
        i += 1
    return result_dict


def csv_reader(path_to_file):
    result_list = []
    reader = csv.reader(path_to_file)
    for row in reader:
        for elem in row:
            elem = elem.replace('"', "")
            result_list.append(elem.split(';'))
    return result_list


def parse():
    with open(file_path, "r") as file:
        return list_formatter(csv_reader(file))
