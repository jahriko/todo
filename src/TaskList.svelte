<script> 
  import TaskItem from './TaskItem.svelte'
  import { TaskStore } from './stores.js'
</script>

<div class="flex flex-col-reverse absolute items-center justify-center w-screen top-80">
  {#each $TaskStore as task (task.id)}

    <TaskItem item={task}/>

  {/each}

</div>