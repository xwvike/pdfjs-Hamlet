<script>
  import ToolbarMiddle from './ToolbarMiddle.svelte'
  import ToolbarLeft from './ToolbarLeft.svelte'
  import ToolbarRight from './ToolbarRight.svelte'
</script>

<div
  class="w-full h-12 bg-white box-border px-2 dark:bg-gray-700 shadow fixed z-10 flex justify-between items-center"
>
  <div class="flex w-1/3 justify-start flex-shrink-0">
    <ToolbarLeft />
  </div>
  <div class="w-1/3 flex justify-center flex-shrink-0">
    <ToolbarMiddle />
  </div>
  <div class="max-sm:w-auto w-1/3 flex justify-end">
    <ToolbarRight />
  </div>
</div>
<style>
  a{
      justify-content: flex-start;
  }
</style>
