-----Project Name: Todo-App-------

-----OVERVEW-------
This is a Todo application developed using nodeJS, expressJS, mongodb and ejs template engine.
In this project, you can create a list of todos that you want to do on daily basis. 
Now, if you could see in the screen, there is title, description and due date for the todo. So you can add that and then press add todo. This will add a list below the input box. And this todo will be stored in the Mongodb database.
now when the todo is added, you can delete it, edit it or mark as complete.
once you have marked it as complete you cannot mark it again.
todo title cannot be empty as there is validation for it. 
the description and due date can be empty as not everyone wants to add description and due date.
if the decription is not inserted, there will be text called empty inside it.
there is a message column as well. in this column you can get important messages of due date. if the due date of todo matches with current day, then the message shows 'due date today'.
if the due date is 1 day before the current day, then the message shows 'due date far'.
if the due date is passed, then the message shows "due date passed".
if the user doesnt put due date, then it shows "no due date".
in the edit page as well, you cannot keep the title empty as there is validation on that as well.
enjoy!

----Pre-requisites-----
install the below softwares:
- nodeJS - https://nodejs.org/en
- mongodb compass - https://www.mongodb.com/products/tools/compass
- mongodb shell - https://www.mongodb.com/try/download/shell - choose msi option while downloading and install it.
- vscode - https://code.visualstudio.com/

-----how to run the project ----
-download the project from the link
-unzip it and keep it in documents
-open the project and right click inside the project and choose open with vscode option
- now press the windows key to search you softwares. search 'mongosh' and open it.
- you will get a terminal window after this, type 'mongod' and your mongodb server has started.
- you can also open mongodb compass and select the connect option to connect to mongodb server.
- now when you are on vscode, select terminal menu from top of the menubar. now select 'open new terminal'.
- a new terminal will open in the bottom. type there 'npm install'.
- now type 'npm start'
- congrats your project is running now.
- open any browser of your choice like chrome, firefox and type 'http://localhost:3000/' and this will give the output of your project.
- now you can check the project by giving some inputs.
- too check whether the data in stored in database or not, you can open mongodb compass and then press connect button.
- after that you can see 'todo-app' database on the left side of the mongodb compass. click on it.
- now you can see the changes whhich you will make in the project, just make sure you click the refresh button each time you check.


