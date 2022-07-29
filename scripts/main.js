// checks if user presses enter and then goes into executing
function checkInput() {
  var event = window.event || event.which;

  if (event.keyCode == 13) {
    event.preventDefault();
    execute(document.getElementById("command").value);
    document.getElementById("command").value = "";
  }
}

function history(command) {
  var elem = document.querySelector("#history");
  var tag = document.createElement("p");
  var text = document.createTextNode(command);
  tag.appendChild(text);
  elem.appendChild(tag);
}

function ls(elem) {
  var tag = document.createElement("p");
  var folders = document.createElement("span");
  folders.id = "folder";
  var text = document.createTextNode("docs images scripts styles ");
  folders.appendChild(text);
  tag.appendChild(folders);
  text = document.createTextNode("index.html");
  tag.appendChild(text);
  elem.appendChild(tag);
}

// save previously entered command and execute command
function execute(command) {
  // grab terminal prompt and text input
  var elem = document.querySelector("#terminal");
  elem.scrollIntoView();
  // the clone it
  var clone = elem.cloneNode(true);

  // give it new id to not mix up next command enter
  clone.id = "prev_command";

  // store the command that was typed in to prompted (mimic terminal behavior)
  clone.appendChild(document.createTextNode(command));

  // grab the input tag
  var textinput = clone.querySelector("#command");

  // remove the input tag
  textinput.parentNode.removeChild(textinput);

  // grab previous section (stores all typed in commands until clear)
  var elem = document.querySelector("#previous");

  // add the current prompt
  elem.appendChild(clone);

  // store history in a history div (isnt visible)
  history(command);

  // maybe if I ever want to have flag options
  const commands = command.split(" ");
  if (commands[0] == "clear") {
    // clear command
    if (commands[1] == "history") {
      var clear = document.querySelector("#history");
      clear.innerHTML = "";
    } else elem.innerHTML = "";
  } else if (commands[0] == "resume") {
    // redirect to resume (in docs folder)
    window.location.href = "./docs/Resume.pdf";

    // basic echo command
  } else if (commands[0] == "echo") {
    var tag = document.createElement("p");
    var text;
    for (let i = 1; i < commands.length; i++) {
      text = document.createTextNode(commands[i] + " ");
      tag.appendChild(text);
    }
    elem.appendChild(tag);
  } else if (command == "ls") {
    ls(elem);
  } else if (command == "history") {
    var tag = document.querySelector("#history");
    var clone = tag.cloneNode(true);
    clone.id = "prev_history";
    elem.appendChild(clone);
  } else if (commands[0] == "cd") {
    var tag = document.createElement("p");
    var text = document.createTextNode("That's above my paygrade");
    tag.appendChild(text);
    elem.appendChild(tag);
  } else if (command == "help") {
    var tag = document.querySelector("#help");
    var clone = tag.cloneNode(true);
    clone.id = "prev_help";
    elem.appendChild(clone);
  } else if (command == "exit") {
    window.location.href = "./index.html"
  } else {
    // command not found
    var tag = document.createElement("p");
    var text = document.createTextNode(command + ": command not found");
    tag.appendChild(text);
    elem.appendChild(tag);
  }
}
