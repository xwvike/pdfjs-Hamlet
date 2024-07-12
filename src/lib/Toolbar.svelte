<script>
  import ToolbarMiddle from './ToolbarMiddle.svelte'
  import ToolbarLeft from './ToolbarLeft.svelte'
  import ToolbarRight from './ToolbarRight.svelte'
</script>

<div
  class="w-full h-12 bg-white box-border px-2 dark:bg-gray-700 shadow fixed z-10 flex justify-between items-center"
>
  <div>
    <ToolbarLeft />
  </div>
  <div>
    <ToolbarMiddle />
  </div>
  <div>
    <ToolbarRight />
  </div>
</div>
