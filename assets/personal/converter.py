from PIL import Image
import os
import PIL
import glob
 
####################################################################################
# Parent Directory path
parent_dir = "./2d art/"
thumb_path = "./2d art/thumb/"
full_res_art = os.listdir(parent_dir) #turns directory into a list

# Directory
directory = "thumb"
path = os.path.join(parent_dir, directory)
try: 
    os.mkdir(path) 
except OSError as error: 
    print(error)
####################################################################################

for file in full_res_art:
    isFile = os.path.isfile(f"{parent_dir}{file}") #checks if its a file

    if isFile:
        filename_no_ext = os.path.splitext(file)[0] #removes the file extension
        filename_ext = os.path.splitext(file)[1]

        if os.path.exists(f"{thumb_path}{filename_no_ext}.jpg"):
        #if f"{thumb_path}{filename_ext}" == ".png" or ".jpg" or "jpeg":
            print(f"{filename_no_ext}.jpg already exists in {thumb_path}; skipping")
        else:
            img = Image.open(f'{parent_dir}{file}').convert("RGB")
            print(f"thumb created for {file}")
            img.thumbnail(size=(400,400))
            img.save(f'{thumb_path}{filename_no_ext}.jpg', optimize=True, quality=65)
    else:
        print("not a file")
        
