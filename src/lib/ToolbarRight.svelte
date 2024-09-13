<script>
  import ToolsPanel from './ToolsPanel.svelte'
</script>

<div class="text-black dark:text-white flex items-center">
  <div class="flex items-center overflow-hidden max-sm:w-0">
    <div
      id="viewFind"
      title="Find in Document"
      data-l10n-id="pdfjs-findbar-button"
      aria-expanded="false"
      aria-controls="findbar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="select-none hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-full cursor-pointer"
        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
          d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"
        /><path d="M21 21l-6 -6" /></svg
      >
    </div>
    <div class="w-[1px] max-sm:w-0 max-sm:mx-0 h-6 mx-2 bg-gray-200"></div>
  </div>
  <ToolsPanel />
</div>
