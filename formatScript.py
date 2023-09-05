from bs4 import BeautifulSoup as bs
import os
import re

file_img = '<figure id="327caa5a-07b8-498f-bca9-097a8a9505ce" class="image"><svg width="240" height="240" viewBox="0 0 1278 1278" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M863.974 1004.06H414.997C414.997 1004.06 378.602 1004.38 361.503 983.558C347.462 966.458 346 947.403 346 947.403V329.713C346 329.713 353.339 299.013 367.003 286.058C382.48 271.384 414.997 273.058 414.997 273.058H863.974C863.974 273.058 897.606 276.567 914.503 296.558C928.786 313.455 931 329.713 931 329.713V947.403C931 947.403 931 966.058 908.5 984.058C883.5 1004.06 863.974 1004.06 863.974 1004.06Z" stroke="#75D573" stroke-width="60" stroke-linejoin="round"/><path d="M500.004 417.059L763.004 417.059" stroke="#75D573" stroke-width="60" stroke-linecap="round" stroke-linejoin="round"/><path d="M632.004 581.059L787.004 581.059" stroke="#75D573" stroke-width="60" stroke-linecap="round" stroke-linejoin="round"/><path d="M632.004 711.059L787.004 711.059" stroke="#75D573" stroke-width="60" stroke-linecap="round" stroke-linejoin="round"/><path d="M632.004 839.059L787.004 839.059" stroke="#75D573" stroke-width="60" stroke-linecap="round" stroke-linejoin="round"/><circle cx="493.004" cy="581.059" r="30" fill="#75D573"/><circle cx="493.004" cy="711.059" r="30" fill="#75D573"/><circle cx="493.004" cy="839.059" r="30" fill="#75D573"/></svg></figure>'

wrench_image = '<figure id="49eb8621-82bf-4807-994b-df33346adfa1" class="image"><svg width="240" height="240" viewBox="0 0 1278 1278" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M247.485 916.398C341.045 824.24 657.563 516.577 657.563 516.577C657.563 516.577 601.713 362.331 696.203 281.646C794.062 198.084 901.017 233.419 901.017 233.419L767.833 374.759L805.519 467.394L901.017 500.819L1042.79 368.074C1042.79 368.074 1065.65 511.325 989.303 572.445C864.686 672.201 756.854 611.6 756.854 611.6C756.854 611.6 447.498 922.13 351.549 1020.49C295.19 1078.27 193.066 970.001 247.485 916.398Z" stroke="#75D573" stroke-width="60" stroke-linejoin="round"/></svg></figure>'

current_dir = os.path.dirname(os.path.realpath(__file__))

for filename in os.listdir(current_dir):

    if os.path.isfile(os.path.join(current_dir, filename)) and filename.endswith(".html"):

        print(filename)
        
        f = open(filename, encoding='utf-8')
        soup=bs(f, 'html.parser')
        stylesheet = soup.new_tag("link")
        stylesheet['rel'] = "stylesheet"
        stylesheet['href'] = "style.css"
        soup.head.style.decompose()
        soup.head.append(stylesheet)

        for elem in soup.find_all("figure"):
            elem.next.unwrap()

        if soup.body.div.next.name == "figure":

            temp = soup.body.div.next.extract()
            temp.next['style'] = 'width:240px'            

        else: 

            temp = bs(file_img, 'html.parser')

        soup.body.header.insert(0, temp)

        with open(filename, 'w') as ff:
            ff.write(str(soup))
            ff.close()
        f.close()

