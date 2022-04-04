<script>
  import TaskCard from './TaskCard.svelte'
  import { TaskStore } from './stores.js'

  export let item;

  const handleRemove = (item) => {
    TaskStore.update((currTask) => {
      return currTask.filter(taskItem => taskItem.id != item.id)
    })

  }
  
</script>

<TaskCard>
   <div class="flex grow mr-3">
     <p class="break-words">{item.task}</p>
   </div>
  <button on:click={() => handleRemove(item)} class="relative">✗</button>
</TaskCard>




