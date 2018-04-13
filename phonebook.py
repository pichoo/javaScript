# Writing a function to present the phone book menu 

def phonebook_menu():
    print('Option 1. Add a Phone Number Entry')
    print('Option 2. Delete a Phone Number Entry')
    print('Option 3. Edit a Phone Number Entry')
    print('Option 4. View all Contact Information')
    print('Option 5. Quit')
    print()
    
import re
def isValidEmail(email):
    if len(email) > 7:
        if re.match(r"^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$", email) != None:
            return True
        else:
            return False

#The phone book entries will be dictionaries. 
contact_info = {}

menu_choice = 0
phonebook_menu()

while menu_choice != 5:
    menu_choice = int(input("Select a menu Option (1-5): "))

        
    

#When choosing option 1 it should accept a first name, last name and a phone number

    if menu_choice == 1:
        print("Add a new Phone Book Entry:")
        
        first_name = str(input("First Name: "))
        if not first_name.isalpha():
            print("\nYou have entered a wrong first name. Please try again with letters only with no spaces and special characters")
            continue
            
        last_name  = str(input("Last Name: "))
        if not last_name.isalpha():
            print("\nYou have entered a wrong last name. Please try again with letters only with no spaces and special characters")
            continue
        
        phone = input("Phone Number: ")
        if not phone.isdigit():
            print("\nYou have entered a wrong Phone Number. Please try again with numbers only")
            continue
        
        email = str(input("Email Address: "))  
        if isValidEmail(email) == True:
            email = email
        else:
            email = input("Please enter a valid email id: ")
            continue
            
        name = first_name + "_" +last_name
        if name in contact_info:
            contact_info[name]['phone_number'].append(phone)     
        else:
            tempdict = {}
            tempdict['phone_number']  = []
            tempdict['email_address'] = []
            tempdict['phone_number'].append(phone)
            tempdict['email_address'].append(email)
            contact_info[name] = tempdict

#[phone,email] #nested hash format should be contact_info=['name': {'Phone Number':phone, 'Email address':email }]
       


        
    elif menu_choice == 2:
        print("\nType the Full Name to remove from the Phone Book")
        name = input ("Name: ")
        if name in contact_info:
            del contact_info[name]['phone_number']
        else:
            print("Name was not found")
    
    elif menu_choice == 4:
        print("\nLookup Contact Information")
        name = input("\nName: ")
        if name in contact_info:
            print(contact_info)
            #print(contact_info[name][phone_number])
            #print(contact_info[name][email_address]) #, "\nPhone: " + contact_info[name]['phone_number'], "\nEmail: " + contact_info[name]['email_address'])
        else:
            print(name, "was not found")

    elif menu_choice != 5:
        phonebook_menu()
    