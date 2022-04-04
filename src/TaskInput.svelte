<script>
  import { TaskStore, incrementId } from './stores.js'

  let text;

  const addTask = () => {
    
    // @ts-ignore
    $incrementId++
    $TaskStore = [...$TaskStore, {id: $incrementId, task: text}]
  }
</script>

<!-- Title -->
<span class="flex absolute justify-center items-end h-52 w-screen font-mono font-bold">To Do</span>

<!-- Container -->
<div class="flex absolute items-center justify-center w-screen h-2/4 ">

  <!-- Input Box -->
  <input bind:value={text} type="text" class="shadow-md rounded-md px-16 py-2 mr-3" placeholder="Add a task">

  <!-- Add Button -->
  <button on:click={addTask} class="bg-white rounded-full shadow-md px-4 py-2 hover:bg-slate-300">&plus;</button>

</div>

