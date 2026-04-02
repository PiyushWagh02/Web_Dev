document.addEventListener('DOMContentLoaded',()=>{

  const todo=document.getElementById('todo-input');
  const btn=document.getElementById('add-task-btn')
  const todoList=document.getElementById('todo-list')

  let tasks=JSON.parse(localStorage.getItem('tasks')) || [];;

  tasks.forEach(element => {
    renderTask(element);
  });

  btn.addEventListener('click',function (){
    const task=todo.value.trim();

    if(task=="") return ;

    tasks.push(task)
    saveTasks();           // ✅ save to localStorage
    renderTask(task); 

    todo.value='';
    

  })

  function renderTask(task){
    const li=document.createElement('li');
    li.textContent=task

      const delBtn = document.createElement('button');
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";


     delBtn.addEventListener('click', () => {
      li.remove();

      // ✅ Remove task from array
      tasks = tasks.filter(t => t !== task);

      saveTasks();
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
  }



  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  


})