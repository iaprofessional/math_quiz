function login() {
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",player1_name_input);
    localStorage.setItem("player2_name",player2_name_input);
    window.location="logging_in.html";
}