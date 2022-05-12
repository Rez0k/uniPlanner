import random
import string
import json

MIN_RANDOM_NUMBER = 0
MAX_RANDOM_NUMBER = 999999

def read_file():
    try:
        data = open("fake_data_input.txt", "r").read()
    except:
        print('error reading fake_data_input.txt file')
        print('make sure you are inide the fake_data_gen_tool folder')
        exit(1)
    return data


def filter_data(raw_data):
    fine_lines = []
    json_dict = {}
    for line in raw_data.split('{')[1].split('}')[0].strip().split('\n'):
        if len(line) > 4:
            try:
                key = line.strip().split(':')[0].strip()
                type = line.strip().split(':')[1].split()[0].strip()
            except:
                print('\n'+line+'\n')
            json_dict[key] = type
    return json_dict


def create_fake_data(filtered_data_dict):
    fake_data = {}
    for key, value in filtered_data_dict.items():
        print(value)
        if value == 'number':
            random.randint(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
            fake_data[key] = fake_data
        if value == 'string':
            letters = string.ascii_lowercase
            fake_data[key] = ''.join(random.choice(letters) for i in range(10))
    return fake_data


def write_fake_data_to_file(data):
    f = open("fake_data_output.txt", "a")
    print(data)
    data = json.dumps(data)
    f.write(data)
    f.close()

print('started')
size_of_data = int(input('enter size of fake data:'))
raw_data = read_file()
filtered_data_dict = filter_data(raw_data)
fake_data = create_fake_data(filtered_data_dict)
write_fake_data_to_file(fake_data)
print('done')
