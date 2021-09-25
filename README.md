# Homework-3---Random-Password-Generator-MLL
The purpose for this project was to create a random password generator. The user clicks the Generate Password button and is prompted with options for length and characters. Based on the user's responses, we create a password using randomly generated characters.

## Functionality
This tool features two buttons and a password container. The Generate Password button, when clicked, will trigger five prompts to the user. The first prompt asks the user for a numeric value to use as the length of the password. This must be between eight and one hundred twenty eight. If the user enters any number outside of this range the input is not accepted and the user gets the prompt again. If the user enters a word instead of a number, an alert reminds them that they need to enter only numbers. If the user clicks Cancel in the prompt, the prompt closes. If the user enters a number and submits, they are given a confirm box for each character type. For upper case letters, lower case letters, special characters/symbols, and numbers, the user is instructed to click Ok to include the characters or Cancel to exclude them. If no characters are included the user will be alerted that they need to include at least one character type.

If at least one character type is true, the code will randomly choose between the four character types once per character, and choose a random character from that type until the length is satisfied. The Copy to Clipboard button will copy the password automatically from the password box onto the user's clipboard. Once the password is copied the button text indicates "Copied!" to let the user know it was successful. When a new password is created the button text returns to "Copy to Clipboard".

If the user generates a subsequent password, the old password will be deleted from the box as soon as the criteria is entered for a new password so that the new password does not append to the old password.


This tool is deployed via github [here](https://mat-lundin.github.io/Homework-3---Random-Password-Generator-MLL/)

![Password Generator Screenshot](./Assets/pwdgen.png)