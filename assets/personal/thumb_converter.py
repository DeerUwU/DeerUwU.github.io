from PIL import Image
import os
import PIL
import glob
 
####################################################################################
# Parent Directory path
parent_dir_2d = "2d art\\"
thumb_path_2d = "2d art\\thumb\\"
fetchfile_2d  = "2d art\\fetchfile_2d"
parent_dir_3d = "3d art\\"
thumb_path_3d = "3d art\\thumb\\"
fetchfile_3d  = "3d art\\fetchfile_3d"

global here
here = os.path.dirname(os.path.abspath(__file__)) #filepath of this file
####################################################################################

def generate_dir(parent_dir): 
    print("############ generate directories ##############")
    path = os.path.join(here, parent_dir)

    if os.path.exists(path):
        print('path already exists')
    else:
        os.mkdir(path) 
        print(f'created path: {path}')

####################################################################################

def generate_fetchfile(parent_dir, fetchfile): 
    print("############ generate fetchfile ##############")
    path = os.path.join(here, fetchfile) #current filepath + /thumb path
    print("fetchfile path: ", path)

    if os.path.exists(path):
        print('fetchfile already exists')
    else:
        with open(path, 'w') as fp:
            pass
        print(f'created fetchfile: {path}')

####################################################################################

def generate_thumbnails(parent_dir, thumb_path, fetchfile):
    print("############ generate thumbnails ##############")
    parent_dir = os.path.join(here, parent_dir) #append the full filepath bc functions stinky
    print("parent_dir: ", parent_dir)
    thumb_path = os.path.join(here, thumb_path)
    print("thumb_path: ", thumb_path)
    fetchfile = os.path.join(here, fetchfile)
    print("fetchfile: ", fetchfile)


    full_res_art = os.listdir(parent_dir) #turns directory into a list
    f = open(f"{fetchfile}", "a")   # opens fetchfile
    f.truncate(0) # wipes the file first

    for file in full_res_art:
        isFile = os.path.isfile(f"{parent_dir}{file}") #checks if its a file

        if isFile:
            filename_no_ext = os.path.splitext(file)[0] #removes the file extension
            filename_ext = os.path.splitext(file)[1]

            if filename_ext == ".png" or  filename_ext == ".jpg" or  filename_ext == "jpeg" or  filename_ext == ".gif": #only converts to thumbnail if one of the file types
                # print(filename_ext + " filetype is image")
                f.write(f"{file}\n")                   # writes filepath
                print(f"filepath added {file}")
                
                if os.path.exists(f"{thumb_path}{filename_no_ext}.jpg"):
                    print(f"{filename_no_ext}.jpg already exists")
                else:
                    img = Image.open(f'{parent_dir}{file}').convert("RGB")
                    print(f"thumb created for {file}")
                    img.thumbnail(size=(500,500))
                    img.save(f'{thumb_path}{filename_no_ext}.jpg', optimize=True, quality=85)
            else:
                print(file + " not an image")
        else:
            print("not a file")

    f.close()                       # closes fetchfile
        
####################################################################################

generate_dir(thumb_path_2d)
generate_dir(thumb_path_3d)
generate_fetchfile(parent_dir_2d, fetchfile_2d)
generate_fetchfile(parent_dir_3d, fetchfile_3d)
generate_thumbnails(parent_dir_2d, thumb_path_2d, fetchfile_2d)
generate_thumbnails(parent_dir_3d, thumb_path_3d, fetchfile_3d)