# Installation
In order to run this project, execute in the project directory following commands:

`npm install`

`npm start`

This will run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Endpoint
In order to get random password with all option set as default you just need to send **GET** request to the folowing endpoint:
```
/api
```

# Optional query parameters

## min
This parameter indicates the lowest possible length of generated password

*default value: 6*
```
/api?min=8
```

## max
This parameter indicates the highest possible length of generated password

*default value: 12*
```
/api?max=16
```

## caseSensitive
This parameter indicates if password should be caseSensitive. In case of false, password will be lowercase, otherwise cases will be randomly mixed.

*default value: true*
```
/api?caseSensitive=false
```

## numbersIncluded
This parameter indicates if password should contain numbers.

*default value: true*
```
/api?numbersIncluded=false
```

## howManyNumbers
In case previous parameter is true, here you can specify how many numbers should be included in password.

*default value: 2*
```
/api?howManyNumbers=4
```

## specialCharsIncluded
This parameter indicates if password should contain special characters from following list `";,/?:@&=+$-_.!~*'()#"`.

*default value: false*
```
/api?specialCharsIncluded=true
```

## howManySpecialChars
In case previous parameter is true, here you can specify how many special characters should be included in password.

*default value: 1*
```
/api?howManySpecialChars=3
```

## Combining parameters
In order to combine multiple parameters please use ampersand character `&`.
```
/api?min=5&max=10&numbersIncluded=false&specialCharsIncluded=true
```
