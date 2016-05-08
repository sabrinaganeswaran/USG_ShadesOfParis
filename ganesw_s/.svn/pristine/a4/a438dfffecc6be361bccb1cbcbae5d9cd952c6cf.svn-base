function coms()
{
    var body = document.querySelector('body');
    
    var div0 = body.appendChild(document.createElement("div")); 
    var div1 = body.appendChild(document.createElement("div"));
    var div2 = body.appendChild(document.createElement("div"));

    var nameBox = document.createElement("input");
    nameBox.type = "text";
    nameBox.id = "nameBox";
    nameBox.placeholder = "Enter your name here..";
    div0.appendChild(nameBox);

    var commentBox = document.createElement("input");
    commentBox.type = "text";
    commentBox.id = "commentBox";
    commentBox.placeholder = "Any Comments?"; 
    div1.appendChild(commentBox);

    var button = document.createElement("button");
    button.id = "submit";
    button.textContent = "Post it!";
    div2.appendChild(button);


    var div0Bis = body.appendChild(document.createElement("div"));
    div0Bis.setAttribute('id', "name");

    var div3 = body.appendChild(document.createElement("div"));
    div3.setAttribute('id', "boo");
}

function valid()
{
    document.getElementById("submit").addEventListener("click", function()
{
    var nom = document.getElementById("nameBox").value;
    document.getElementById("name").textContent = commentaire;

    var commentaire = document.getElementById("commentBox").value;
    document.getElementById("boo").textContent = commentaire;
});
};
coms();
valid();