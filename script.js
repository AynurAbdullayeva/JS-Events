let toDoForm = document.querySelector(".to-do-form");
let todoInp = document.querySelector("#to-do");
let list = document.querySelector(".todos");

toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    list.innerHTML += ` <li style="display: flex;
    justify-content: space-between;
    align-items: center;" class="list-group-item">
    <span>${todoInp.value}</span>
    <div>
        <button class="btn btn-warning done"><i class="fa-solid fa-check"></i></button>
        <button class="btn btn-danger remove"><i class="fa-solid fa-trash"></i></button>
    </div>
    </li>`;
    todoInp.value = "";


    let dones = document.querySelectorAll(".done");
    dones.forEach((item) => {
        item.addEventListener("click", function () {
            this.parentElement.previousElementSibling.style.textDecoration = "line-through";
        })
    })

    let openModal = document.querySelector(".remove");
    let closeModal = document.querySelector(".btnC");
    let modal = document.querySelector("#modal");
    let removes = document.querySelectorAll(".remove");

    removes.forEach((item) => {
        item.addEventListener("click", function () {
            openModal.addEventListener("click", () => {
                document.body.classList.add("modal-body");
                modal.style.visibility = "visible";
                modal.style.opacity = "1";
                modal.style.transform = "translate(-50%,-50%) scale(1)";
                nameInput.focus();
            });
        })

        closeModal.addEventListener("click", () => {
            ModalClose();
        });

        function ModalClose() {
            document.body.classList.remove("modal-body");
            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
            modal.style.transform = "translate(-50%,-50%) scale(0)";
        }
    })


    let remove = document.querySelectorAll(".btnY");
    remove.forEach((item) => {
        item.addEventListener("click", function () {
            this.previousElementSibling.previousElementSibling.remove();
        })
    })



let formInput=document.querySelector(".form-control");
let submitBtn=document.querySelector(".btn");

formInput.addEventListener("keyup",(e)=>{
    if (e.target.value.length=0) {
        e.target.nextElementSibling.classList.replace("d-none","d-block");
        submitBtn.setAttribute("disabled","");
    }
    else{
        e.target.nextElementSibling.classList.replace("d-block","d-none");
        submitBtn.removeAttribute("disabled");
    }
});





});








