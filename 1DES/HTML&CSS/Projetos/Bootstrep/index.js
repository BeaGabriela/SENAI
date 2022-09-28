const testebtn = document.getElementById("testebtn");
const teste = document.getElementById("teste");

testebtn.addEventListener('click', () => {
    const toast = new bootstrap.Toast(teste);
    toast.show();
})
