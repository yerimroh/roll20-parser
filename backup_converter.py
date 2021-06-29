from tkinter import*
import tkinter.ttk as ttk
import tkinter.messagebox as messagebox
import re
import sys


root = Tk()
root.title("converter")
root.geometry("800x600")




def convert():
    content = inputBox.get("1.0", "end-1c")
    content = changeWidth(content)
    content = changeColor(content)

    clear()
    # print(content)
    inputBox.insert(END, content)


############# change widths ###############
# change dice widths to 100% 
def changeWidth(content): 
    result = content
    
    if(result.find("background: rgb(255, 255, 255); width:") != -1):
        index = result.find("background: rgb(255, 255, 255); width:") + 38
        # print(index)

        endindex = result.find("px", index) + 2

        width = result[index:endindex]
        # print(result[index:endindex])
        
        return result.replace(width, "100%")
    else:
        return result


############## change colors #############
def changeColor(content):
    result = content
    # change color code of #d3e5f5 to #f1f1f1
    result = result.replace("d3e5f5", "f1f1f1")
    # change color code of #b1d9fa to #e1e1e1
    result = result.replace("b1d9fa", "e1e1e1")

    # change (211, 229, 245) to (241, 241, 241)
    result = result.replace("rgb(211, 229, 245)", "rgb(241, 241, 241)")
    # change to (177, 217, 250) to (225, 225, 225)
    result = result.replace("rgb(177, 217, 250)", "rgb(225, 225, 225)")

    return result 
    

def clear():
    inputBox.delete('1.0', END) # clear out the input box 
    

def copy(event):
    #cs = outputBox.curselection()

    root.clipboard_clear()
    root.clipboard_append(outputBox.get(outputBox.curselection()))







#######################
# frames 

#input box
inputFrame = LabelFrame(root, text = "Paste your html code", width = 10)
inputFrame.config(font = ("Arial", 10))
inputFrame.pack(side = "left", expand = True);

# scrollbar
scrollbar1 = Scrollbar(inputFrame)
scrollbar1.pack(side = "right", fill = "y")

# input box
inputBox = Text(inputFrame, yscrollcommand = scrollbar1.set) # input box is
inputBox.pack(side = "top", fill = "both")

scrollbar1.config(command = inputBox.yview)

# button
convertBtn = Button(inputFrame, text = "Convert", command = convert)
convertBtn.pack(side = "right")

clearBtn = Button(inputFrame, text = "Clear", command = clear)
clearBtn.pack(side = "left")



#print(sys.maxsize)

######################

# start executing
root.mainloop()